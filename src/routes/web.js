import IndexController from "../app/controllers/IndexController.js";
import authRouter from "./auth.js";

const indexController = new IndexController();

const route = (app) => {
    app.get('/', indexController.index);
    app.get('/create', indexController.createUser);
    app.use('/api/auth', authRouter);
};

export default route;
