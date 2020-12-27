"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = require("./util/database");
const bodyParser = require("body-parser");
const login_controller_1 = require("./controller/login-controller");
class StartUp {
    constructor() {
        this.app = express();
        this.db = new database_1.default();
        this.db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: "0.0.1" });
        });
        //controllerLogin
        this.app.route('/api/login').get(login_controller_1.default.get);
        this.app.route('/api/login/:id').get(login_controller_1.default.getById);
        this.app.route('/api/login').post(login_controller_1.default.create);
        this.app.route('/api/login/:id').put(login_controller_1.default.update);
        this.app.route('/api/login/:id').delete(login_controller_1.default.delete);
    }
}
exports.default = new StartUp();
