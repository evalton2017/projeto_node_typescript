"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const login_1 = require("../model/login");
exports.default = mongoose.model('logins', login_1.default);
