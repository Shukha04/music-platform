import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import { ChangeEvent, FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import styles from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress'

let audio

const Player: FC = () => {
	const { active, duration, currentTime, pause, volume } = useTypedSelector((state) => state.player)
	const { playTrack, pauseTrack, setVolume, setDuration, setCurrentTime, setActiveTrack } = useActions()

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setAudio()
			play()
		}
	}, [active])

	const setAudio = () => {
		if (active) {
			audio.src = 'http://localhost:3001/' + active.audio
			audio.volume = volume / 100
			audio.onloadedmetadata = () => {
				setDuration(Math.ceil(audio.duration))
			}
			audio.ontimeupdate = () => {
				setCurrentTime(Math.ceil(audio.currentTime))
			}
		}
	}

	const play = () => {
		if (pause) {
			playTrack()
			audio.play()
		} else {
			pauseTrack()
			audio.pause()
		}
	}

	const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		setVolume(Number(e.target.value))
	}

	const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		setCurrentTime(Number(e.target.value))
	}

	if (!active) {
		return null
	}

	return (
		<div className={ styles.player }>
			<IconButton onClick={ play }>
				{
					!pause
					? <Pause />
					: <PlayArrow />
				}
			</IconButton>
			<Grid container direction='column' style={ { width: 200 } }>
				<div>{ active?.name }</div>
				<div style={ { fontSize: 12, color: 'gray' } }>{ active?.artist }</div>
			</Grid>
			<TrackProgress left={ currentTime } right={ duration } onChange={ changeCurrentTime } />
			<VolumeUp style={ { marginLeft: 'auto' } } />
			<TrackProgress left={ volume } right={ 100 } onChange={ changeVolume } />
		</div>
	)
}

export default Player
