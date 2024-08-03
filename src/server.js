import 'dotenv/config'
import express from 'express';
import route from './routes/web.js';
import viewConfig from "./configs/views.js";
import connectDB from  './configs/db.js'

import AuthController from "./app/controllers/AuthController.js";
const authController = new AuthController();

const app = express()

// route(app);
viewConfig(app)
connectDB();

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/api/auth', authController.auth);
app.get('/api/auth/callback', authController.callback);

app.listen(process.env.APP_PORT ?? 3000)