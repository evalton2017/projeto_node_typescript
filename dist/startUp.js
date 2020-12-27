"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = require("./util/database");
const bodyParser = require("body-parser");
const login_router_1 = require("./router/login-router");
const cors = require("cors");
const auth_1 = require("./util/auth");
const upload_1 = require("./util/upload");
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
        this.enableCors();
    }
    enableCors() {
        const options = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*",
        };
        this.app.use(cors(options));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ token: auth_1.default.gerarToken() });
        });
        this.app.route("/uploads").post(upload_1.default.single("file"), (req, res) => {
            try {
                res.send("arquivo enviado com sucesso!");
            }
            catch (error) {
                console.log(error);
            }
        });
        // this.app.use(Auth.validate);
        this.app.use("/api", login_router_1.default);
    }
}
exports.default = new StartUp();
