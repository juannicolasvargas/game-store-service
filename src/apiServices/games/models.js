import { Schema, model } from "mongoose";

const blankMsg = 'es obligatorio';
const gameSchema = Schema({
	name: {
		type: String,
		Required: [true, blankMsg]
	},
	description: {
		type: String,
		Required: [true, blankMsg]
	},
	gender: {
		type: String,
		Required: [true, blankMsg]
	},
	imgUrl: {
		type: String,
		Required: [true, blankMsg]
	}
})

export default model('Game', gameSchema)
