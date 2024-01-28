import Express from 'express';
import * as Controller from '../controllers/PageController.js';
import APIRoutes from './api.js';
const router = Express.Router();
router.get('/', Controller.homepage);
router.get('/:id', Controller.url);
router.use('/api', APIRoutes);
export default router;
