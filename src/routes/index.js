import express from 'express';
import games from '../apiServices/games/routes';

const router = express.Router();

router.use('/games', games);

export default router;
