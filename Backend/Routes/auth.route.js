import express from 'express';
const router = express.Router();

import signup from '../controllers/auth_controllers/signup.controller.js';

const authRoutes = () => {
router.get('/signup', signup);

}
export default authRoutes;