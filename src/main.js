import app from './app';
import dbConnection from './configs/db/config';
require('dotenv').config();

const port = process.env.PORT;

const main = async() => {
	await dbConnection();
	await app.listen(port)
	console.log('server running on port', port);
}

main();
