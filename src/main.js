import app from './app';
require('dotenv').config();

const port = process.env.PORT;

const main = async() => {
	await app.listen(port)
	console.log('server running on port', port);
}

main();
