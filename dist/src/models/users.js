"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var config_1 = __importDefault(require("../config/config"));
var listAllUsers = function () {
    return new Promise(function (resolve, reject) {
        config_1["default"].query("SELECT * FROM users", function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
exports["default"] = {
    listAllUsers: listAllUsers
};
//# sourceMappingURL=users.js.map