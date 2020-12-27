"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const login_controller_1 = require("../controller/login-controller");
const loginRouter = express.Router();
//controllerLogin
loginRouter.route('/login').get(login_controller_1.default.get);
loginRouter.route('/login/:id').get(login_controller_1.default.getById);
loginRouter.route('/login').post(login_controller_1.default.create);
loginRouter.route('/login/:id').put(login_controller_1.default.update);
loginRouter.route('/login/:id').delete(login_controller_1.default.delete);
exports.default = loginRouter;
