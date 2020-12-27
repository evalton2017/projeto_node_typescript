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
const login_repository_1 = require("../repository/login-repository");
class LoginService {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = login_repository_1.default.find({});
            return result;
        });
    }
    getById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = login_repository_1.default.findById(_id);
            return result;
        });
    }
    create(login) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield login_repository_1.default.create(login);
            return result;
        });
    }
    update(_id, login) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = login_repository_1.default.findByIdAndUpdate(_id, login);
            return result;
        });
    }
    delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = login_repository_1.default.findByIdAndRemove(_id);
            return result;
        });
    }
}
exports.default = new LoginService();
