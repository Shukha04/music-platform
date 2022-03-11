import { Module } from '@nestjs/common'
import FileService from './file.service'

@Module({
	providers: [FileService]
})
export default class FileModule {}