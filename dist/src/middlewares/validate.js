"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var response_1 = __importDefault(require("../helpers/response"));
var validate = function (req, res, next) {
    var body = req.body;
    var userBody = ['email', 'fullname'];
    var bodyProperty = Object.keys(body);
    var isBodyInvalid = userBody.filter(function (property) { return !bodyProperty.includes(property); }).length === 0 ? true : false;
    if (!isBodyInvalid)
        return response_1["default"].error(res, 400, 'Invalid Body');
    next();
};
exports["default"] = validate;
//# sourceMappingURL=validate.js.map