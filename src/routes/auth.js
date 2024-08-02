import express from "express";
import AuthController from "../app/controllers/AuthController.js"

const authRouter = express.Router();
const authController = new AuthController();

authRouter.use('/', authController.auth);
authRouter.use('/callback', authController.callback);

export default authRouter;