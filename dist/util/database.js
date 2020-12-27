"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        //    private url = 'mongodb://link-db/db_login'
        this.url = 'mongodb://localhost:27017/db_login';
    }
    createConnection() {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(this.url);
    }
}
exports.default = Database;
