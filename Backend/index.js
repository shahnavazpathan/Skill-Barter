import express from 'express';
const app = express();

import authRoutes from './Routes/auth.route.js';

app.use('/auth', authRoutes);

app.listen(1000, () => {
    console.log("server is alive!");  
});