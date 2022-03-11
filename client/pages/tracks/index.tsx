import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'
import TrackList from '../../components/TrackList'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import MainLayout from '../../layouts/Main'
import { getTracks } from '../../store/actions/track'
import { NextThunkDispatch, wrapper } from '../../store/index'

const Index: FC = () => {
	const router = useRouter()
	const {} = useActions()
	const { tracks, error } = useTypedSelector((state) => state.track)

	if (error) {
		return (
			<MainLayout>
				<h1>{ error }</h1>
			</MainLayout>
		)
	}

	return (
		<MainLayout>
			<Grid container justifyContent='center'>
				<Card style={ { width: 900 } }>
					<Box p={ 3 }>
						<Grid container justifyContent='space-between'>
							<h1>Tracks list</h1>
							<Button onClick={ () => router.push('/tracks/create') }>Load new</Button>
						</Grid>
					</Box>
					<TrackList tracks={ tracks } />
				</Card>
			</Grid>
		</MainLayout>
	)
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
	const dispatch = store.dispatch as NextThunkDispatch
	await dispatch(await getTracks())
})