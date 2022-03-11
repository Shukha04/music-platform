import { Button, Grid, TextField } from '@mui/material'
import { FC, useState } from 'react'
import FileUpload from '../../components/FileUpload'
import StepWrapper from '../../components/StepWrapper'
import MainLayout from '../../layouts/Main'

const Create: FC = () => {
	const [activeStep, setActiveStep] = useState(0)
	const [picture, setPicture] = useState(null)
	const [audio, setAudio] = useState(null)

	const next = () => {
		if (activeStep !== 2) {
			setActiveStep((prev) => prev + 1)
		}
	}

	const back = () => {
		setActiveStep((prev) => prev - 1)
	}

	return (
		<MainLayout>
			<StepWrapper active={ activeStep }>
				{ activeStep === 0 &&
				<Grid container direction='column' style={ { padding: 20 } }>
					<TextField
						style={ { marginTop: 10 } }
						label='Track name'
					/>
					<TextField
						style={ { marginTop: 10 } }
						label='Artist'
					/>
					<TextField
						style={ { marginTop: 10 } }
						label='Lyrics'
						multiline
						rows={ 3 }
					/>
				</Grid>
				}
				{ activeStep === 1 &&
				<FileUpload setFile={ setPicture } accept='image/*'>
					<Button>Load image</Button>
				</FileUpload>
				}
				{ activeStep === 2 &&
				<FileUpload setFile={ setAudio } accept='audio/*'>
					<Button>Load track</Button>
				</FileUpload>
				}
			</StepWrapper>
			<Grid container justifyContent='space-between'>
				<Button disabled={ activeStep === 0 } onClick={ back }>Back</Button>
				<Button onClick={ next }>Next</Button>
			</Grid>
		</MainLayout>
	)
}

export default Create
