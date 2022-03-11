import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'
import MainLayout from '../../layouts/Main'
import { ITrack } from '../../types/track'

const TrackPage: FC = () => {
	const router = useRouter()
	const track: ITrack = {
		_id: '6225136a06128df63b391d7d',
		comments: [],
		audio: 'http://localhost:3001/audio/74c7606b-e744-4b79-9d43-030c267e89c7.mp3',
		picture: 'http://localhost:3001/image/0e7e02b2-60f9-48a4-b72f-7b75ce995cb1.jpg',
		listens: 2,
		text: 'Lyrics',
		artist: 'IDFK',
		name: 'Track 01'
	}

	return (
		<MainLayout>
			<Button
				variant='outlined'
				style={ { fontSize: 32 } }
				onClick={ () => router.push('/tracks') }
			>
				Back
			</Button>
			<Grid container style={ { margin: '20px 0' } }>
				<img src={ track.picture } alt={ track.name } width={ 200 } height={ 200 } />
				<div style={ { marginLeft: 30 } }>
					< h1> Track name: { track.name }</h1>
					<h1>Artist: { track.artist }</h1>
					<h1>Listens: { track.listens }</h1>
				</div>
			</Grid>
			<h1>Lyrics</h1>
			<p>{ track.text }</p>
			<h1>Comments</h1>
			<Grid container>
				<TextField
					label='Name'
					fullWidth
				/>
				<TextField
					label='Comment'
					fullWidth
					multiline
					rows={ 4 }
				/>
				<Button>Send</Button>
			</Grid>
			{ track.comments.map((comment) =>
				<div key={ comment._id }>
					<div>Author - { comment.username }</div>
					<div>{ comment.text }</div>
				</div>
			) }
		</MainLayout>
	)
}

export default TrackPage
