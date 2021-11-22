import { validationResult } from 'express-validator';

const validateParams = (request, response, next) => {
	const checkErrors = validationResult(request);
	if (!checkErrors.isEmpty()) {
		return response.status(422).json(checkErrors);
	}
	next();
}

export default validateParams;
