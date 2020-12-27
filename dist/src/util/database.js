"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.url = 'mongodb://link-dbs/db_login';
    }
    createConnection() {
        mongoose.connect(this.url);
    }
}
exports.default = Database;
