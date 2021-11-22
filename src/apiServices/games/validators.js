import mongoose from 'mongoose';
import Game from './models';

export const namePresence = async(name) => {
	const gameExist = await Game.findOne({ name });
	if(gameExist) throw new Error('name already exists');
}

export const getGameById = async(id) => {
	isIdValid(id);
	const game = await Game.findById(id);

	if(!game) throw new Error('game no exists');
}

const isIdValid = (id) => {
	if (mongoose.Types.ObjectId.isValid(id)) {
		return true;
	} else {
		throw new Error(`el id ${ id } no es un id valido`);
	}
}
