"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var env_1 = __importDefault(require("../helpers/env"));
var mysql2_1 = __importDefault(require("mysql2"));
var db = mysql2_1["default"].createConnection({
    host: env_1["default"].HOST,
    user: env_1["default"].UNAME,
    password: env_1["default"].PASS,
    database: env_1["default"].DB
});
db.connect(function (err) {
    if (err)
        return console.log('error?', err);
    return console.log('Database is Connected');
});
exports["default"] = db;
//# sourceMappingURL=config.js.map