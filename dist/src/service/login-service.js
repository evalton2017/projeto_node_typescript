"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_repository_1 = require("../repository/login-repository");
class LoginService {
    get() {
        return login_repository_1.default.find({});
    }
    getByid(_id) {
        return login_repository_1.default.findById(_id);
    }
    create(login) {
        return login_repository_1.default.create(login);
    }
    update(_id, login) {
        return login_repository_1.default.findByIdAndUpdate(_id, login);
    }
    delete(_id) {
        return login_repository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new LoginService();
