import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { Card, Grid, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ITrack } from '../types/track'
import styles from '../styles/TrackItem.module.scss'

interface TrackItemProps {
	track: ITrack
	active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
	const router = useRouter()
	const { playTrack, pauseTrack, setActiveTrack } = useActions()

	const play = (e) => {
		e.stopPropagation()
		setActiveTrack(track)
		playTrack()
	}

	return (
		<Card className={ styles.track } onClick={ () => router.push('/tracks/' + track._id) }>
			<IconButton onClick={ play }>
				{
					active
					? <Pause />
					: <PlayArrow />
				}
			</IconButton>
			<img
				width={ 70 }
				height={ 70 }
				style={ { margin: '0 20px' } }
				src={ 'http://localhost:3001/' + track.picture }
				alt={ track.name }
			/>
			<Grid container direction='column' style={ { width: 200 } }>
				<div>{ track.name }</div>
				<div style={ { fontSize: 12, color: 'gray' } }>{ track.artist }</div>
			</Grid>
			{ active && <div>02:42 / 03:22</div> }
			<IconButton style={ { marginLeft: 'auto' } } onClick={ (e) => e.stopPropagation() }>
				<Delete />
			</IconButton>
		</Card>
	)
}

export default TrackItem
