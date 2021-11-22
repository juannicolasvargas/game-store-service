import { Schema, model } from "mongoose";
import { publicUrl } from '../../services/file';

const gameSchema = new Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	gender: { type: String, required: true },
	imgKey: { type: String, required: true },
	publicUrl: { type: String }
})

gameSchema.set('toJSON', {
	virtuals: true,
	versionKey:false,
	transform: (_doc, ret) => {
		ret.publicUrl = publicUrl(ret.imgKey);
		delete ret._id;
	}
});

export default model('Game', gameSchema);
