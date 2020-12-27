"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const login_service_1 = require("../service/login-service");
const helper_1 = require("../util/helper");
class LoginController {
    get(req, res) {
        login_service_1.default.get()
            .then(login => helper_1.default.sendResponse(res, HttpStatus.OK, login))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        login_service_1.default.getByid(_id)
            .then(login => helper_1.default.sendResponse(res, HttpStatus.OK, login))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        login_service_1.default.create(vm)
            .then(login => helper_1.default.sendResponse(res, HttpStatus.OK, "Login cadastrado com sucesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        login_service_1.default.update(_id, vm)
            .then(login => helper_1.default.sendResponse(res, HttpStatus.OK, `Login do ususario ${vm.nome} atualizado com sucesso.`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        login_service_1.default.delete(_id)
            .then(login => helper_1.default.sendResponse(res, HttpStatus.OK, `Login deletado.`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new LoginController();
