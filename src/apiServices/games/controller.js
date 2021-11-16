import Game from './models';

module.exports = {
	async getGames(req, res) {
		const { page } = req.query;
		const games = await Game.find().limit(Number(page ? page : 0));
		res.json(games).status(200);
	},

	async getGame(req, res) {
		const game = await Game.findById(req.params.id);

		if (!game) return res.status(404);
		res.json(game).status(200);
	}
}
