"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
var response_1 = __importDefault(require("../helpers/response"));
var users_1 = __importDefault(require("./users"));
router.get('/', router.get('/', function (req, res, next) {
    response_1["default"].success(res, 200, 'wellcome to api');
    next();
}));
router.use('/users', users_1["default"]);
exports["default"] = router;
//# sourceMappingURL=index.js.map