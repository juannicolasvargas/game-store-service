import { Schema, model } from "mongoose";
import { publicUrl } from '../../services/file';

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
	imgKey: {
		type: String,
		Required: [true, blankMsg]
	},
	publicUrl: {
		type: String
	}
})

gameSchema.set('toJSON', {
	virtuals: true,
	versionKey:false,
	transform: (_doc, ret) => {
		ret.publicUrl = publicUrl(ret.imgKey);
		delete ret._id;
	}
});

export default model('Game', gameSchema)
