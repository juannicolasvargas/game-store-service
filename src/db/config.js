import mongoose from 'mongoose';

const dbConnection = async () => {
	try {
		await mongoose.connect(
			process.env.MONGODB_CONNECTION,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true
			}
		);

		console.log('BD connection done');
	} catch (e) {
		console.log(e);
		throw new Error('BD connection failure');
	}
}

export default dbConnection;
