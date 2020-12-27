"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const login_service_1 = require("../service/login-service");
const helper_1 = require("../util/helper");
const redis = require("redis");
class LoginController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //configuração docker compose
            //let client = redis.createClient(6379, "redis");
            let client = redis.createClient();
            yield client.get('logins', function (err, reply) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        if (reply) {
                            console.log('redis');
                            helper_1.default.sendResponse(res, HttpStatus.OK, JSON.parse(reply));
                        }
                        else {
                            let result = yield login_service_1.default.get();
                            console.log('db');
                            client.set('logins', JSON.stringify(result));
                            client.expire('logins', 20);
                            helper_1.default.sendResponse(res, HttpStatus.OK, result);
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
            });
        });
    }
    getById(req, res) {
        const _id = req.params.id;
        login_service_1.default.getById(_id)
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
