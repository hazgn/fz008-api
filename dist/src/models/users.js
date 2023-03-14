"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var config_1 = __importDefault(require("../config/config"));
var listAllUsersModel = function () {
    return new Promise(function (resolve, reject) {
        config_1["default"].query("SELECT * FROM users", function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
var userByIdModel = function (id) {
    return new Promise(function (resolve, reject) {
        config_1["default"].query("SELECT * FROM users WHERE id = ?", id, function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
var createUserModel = function (body) {
    return new Promise(function (resolve, reject) {
        config_1["default"].query("INSERT INTO users SET ?", [body], function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
var editUsersModel = function (id, body) {
    return new Promise(function (resolve, reject) {
        config_1["default"].query("UPDATE users SET ? WHERE id = ?", [body, id], function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
var deleteuserModel = function (id) {
    return new Promise(function (resolve, reject) {
        config_1["default"].query("DELETE FROM users WHERE id = ?", [id], function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
exports["default"] = {
    listAllUsersModel: listAllUsersModel,
    userByIdModel: userByIdModel,
    createUserModel: createUserModel,
    editUsersModel: editUsersModel,
    deleteuserModel: deleteuserModel
};
//# sourceMappingURL=users.js.map