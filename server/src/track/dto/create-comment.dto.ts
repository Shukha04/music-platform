import { ObjectId } from 'mongoose'

export default class CreateCommentDTO {
	readonly username: string
	readonly text: string
	readonly trackId: ObjectId
}