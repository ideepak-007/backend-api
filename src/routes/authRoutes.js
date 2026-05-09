import express from 'express';
const router = express.Router();

import { register } from '../controllers/authContoller.js';

router.post('/register', register);

export default router;
