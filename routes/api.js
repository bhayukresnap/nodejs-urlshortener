import Express from 'express';
import * as Controller from '../controllers/APIController.js';
import { apiShortenerValidation } from '../configs/validation.js';

const router = Express.Router();
router.post('/shortener', apiShortenerValidation, Controller.shortener);
export default router;
