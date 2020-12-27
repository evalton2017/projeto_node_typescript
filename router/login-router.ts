import * as express from "express";
import LoginController from '../controller/login-controller';

const loginRouter = express.Router();


//controllerLogin
loginRouter.route('/login').get(LoginController.get);
loginRouter.route('/login/email/:email').get(LoginController.getByEmail);
loginRouter.route('/login/exports').get(LoginController.exportToCsv);
loginRouter.route('/login/codigo/:id').get(LoginController.getById);
loginRouter.route('/login').post(LoginController.create);
loginRouter.route('/login/:id').put(LoginController.update);
loginRouter.route('/login/:id').delete(LoginController.delete);

export default loginRouter;