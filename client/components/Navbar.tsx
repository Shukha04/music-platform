import { ChevronLeft, ChevronRight, Inbox, Mail, Menu as MenuIcon } from '@mui/icons-material'
import {
	AppBar,
	Box,
	CssBaseline,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon, ListItemText,
	Toolbar,
	Typography
} from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useTheme } from '@mui/material/styles'

const menuItems = [
	{
		text: 'Home',
		href: '/'
	},
	{
		text: 'Tracks',
		href: '/tracks'
	},
	{
		text: 'Albums',
		href: '/albums'
	}
]

const Navbar = () => {
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)
	const router = useRouter()

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box sx={ { display: 'flex' } }>
			<CssBaseline />
			<AppBar position='fixed'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={ handleDrawerOpen }
						edge='start'
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Persistent drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='persistent'
				anchor='left'
				open={ open }
			>
				<div>
					<IconButton onClick={ handleDrawerClose }>
						{ theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight /> }
					</IconButton>
				</div>
				<List>
					{ menuItems.map(({ text, href }, index) => (
						<ListItem button key={ href } onClick={ () => router.push(href) }>
							<ListItemIcon>
								{ index % 2 === 0 ? <Inbox /> : <Mail /> }
							</ListItemIcon>
							<ListItemText primary={ text } />
						</ListItem>
					)) }
				</List>
			</Drawer>
		</Box>
	)
}

export default Navbar