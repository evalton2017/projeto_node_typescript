"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    password: { type: String },
    perfil: { type: String }
});
exports.default = LoginSchema;
