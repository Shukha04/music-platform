import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const start = async () => {
	try {
		const PORT = process.env.PORT || 3001
		const app = await NestFactory.create(AppModule)
		app.enableCors()

		await app.listen(PORT, () => {
			console.log('Server is running on port', PORT)
		})
	} catch (err) {
		console.error(err)
	}
}

start()