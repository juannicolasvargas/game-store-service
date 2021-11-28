import s3 from '../configs/aws/config';
import fs from 'fs';

export const upload = async(filePath, fileKey) => {
	const fileStream = fs.createReadStream(filePath);
	fileStream.on('error', function(err) {
		console.log('File Error', err)
	});

	const params = {
		Bucket: process.env.BUCKET_NAME,
		Key: fileKey,
		Body: fileStream
	};

	const response = await s3.upload(params).promise();
	removeTempFile(filePath);
	return response.key;
}

export const publicUrl = (fileKey) => {
	const signedUrlExpireSeconds = 120 * 5;
	const url = s3.getSignedUrl('getObject', {
		Bucket: process.env.BUCKET_NAME,
		Key: fileKey,
		Expires: signedUrlExpireSeconds
	});
	return url;
} 

const removeTempFile = (filePath) => {
	fs.unlink(filePath, (err) => {
		if (err) {
			console.error(err);
		}
	})
}
