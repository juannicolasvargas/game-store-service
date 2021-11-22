import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const s3 = new AWS.S3({
	accessKeyId: "AKIA5NE3WQ2NM544CEWJ",
	secretAccessKey: "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"
});

export default s3;
