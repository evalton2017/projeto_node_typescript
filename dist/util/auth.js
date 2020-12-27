"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config_1 = require("./config");
class Auth {
    validate(req, res, next) {
        var token = req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, config_1.default.secret, function (err, decoded) {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: '401- unauthorized'
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            return res.status(401).send({
                success: false,
                message: '401- unauthorized'
            });
        }
    }
    gerarToken() {
        console.log('gerando token');
        let payload = {
            iss: "evalton",
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(30),
            name: "Evalton Gomes",
            email: "evalton.nunes@gmail.com"
        };
        var token = jwt.sign(payload, "duke corajoso");
        return token;
    }
}
exports.default = new Auth();
