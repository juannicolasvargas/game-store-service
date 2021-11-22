import AWS from 'aws-sdk';
require('dotenv').config();

AWS.config.update({ region: process.env.AWS_REGION });

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
});

export default s3;
