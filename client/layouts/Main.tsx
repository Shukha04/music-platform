import { Container } from '@mui/material'
import { FC } from 'react'
import Navbar from '../components/Navbar'
import Player from '../components/Player'

const MainLayout: FC = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container style={ { margin: '90px auto' } }>
				{ children }
			</Container>
			<Player />
		</>
	)
}

export default MainLayout
