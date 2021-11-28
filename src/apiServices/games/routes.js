import express from 'express';
import controller from './controller';
import { check } from 'express-validator';
import validateParams from '../../middlewares';
import multer from 'multer';
import { namePresence, getGameById } from './validators';

const upload = multer({ dest: 'tmp/' });
const router = express.Router();

router.get('/', controller.getGames);
router.get('/:id', [
	check('id').isMongoId(),
	check('id').custom(getGameById),
	validateParams
], controller.getGame);
router.post('/', [
	upload.single('img'),
	check('name', 'length 6').isLength({ min: 6 }),
	check('name').custom(namePresence),
	check('description', 'length 6').isLength({ min: 6 }),
	check('gender').exists(),
	check('img').custom((_value, {req}) => {
		if(!req.file) throw new Error('missing param');

		if(req.file.mimetype.split('/')[0] === 'image') {
			return true;
		} else {
			throw new Error('invalid file');
		}
	}),
	validateParams
], controller.CreateGame);
router.delete('/:id', controller.deleteGame)

export default router;
