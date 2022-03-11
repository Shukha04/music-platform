import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material'
import { FC } from 'react'

interface StepWrapperProps {
	active: number
}

const steps = ['Track information', 'Track image', 'Track file']

const StepWrapper: FC<StepWrapperProps> = ({ active, children }) => {
	return (
		<Container>
			<Stepper activeStep={ active }>
				{ steps.map((step, index) =>
					<Step key={ index } completed={ active > index }>
						<StepLabel>{ step }</StepLabel>
					</Step>
				) }
			</Stepper>
			<Grid container justifyContent='center' style={ { margin: '70px 0', height: 270 } }>
				<Card style={ { width: 600 } }>
					{ children }
				</Card>
			</Grid>
		</Container>
	)
}

export default StepWrapper
