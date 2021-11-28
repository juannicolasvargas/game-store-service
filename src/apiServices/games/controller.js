import { upload } from '../../services/file';
import Game from './models';

module.exports = {
	async getGames(request, response) {
		const { page } = request.query;
		const games = await Game.find().limit(Number(page ? page : 0));
		response.json(games).status(200);
	},

	async getGame(request, response) {
		const game = await Game.findById(request.params.id);

		if (!game) return response.status(404);
		response.json(game).status(200);
	},

	async CreateGame(request, response) {
		const imgKey = await upload(request.file.path, request.file.originalname);
		const { ... params } = request.body;
		const game = new Game(params);
		game.imgKey = imgKey;
		await game.save();
		response.json(game);
	},

	async deleteGame(request, response) {
		await Game.findById(request.params.id).remove();

		response.json({success: 'done'});
	}
}
