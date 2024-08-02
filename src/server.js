import 'dotenv/config'
import express from 'express';
import path, { extname } from 'path';
import route from './routes/web.js';
import viewConfig from "./configs/views.js";
import connectDB from  './configs/db.js'

const app = express()

route(app);
viewConfig(app)
connectDB();

// app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.APP_PORT ?? 3000)