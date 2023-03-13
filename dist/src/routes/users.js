"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userRouter = express_1["default"].Router();
var users_1 = __importDefault(require("../controllers/users"));
userRouter.get('/', users_1["default"].usersListAllcontroller);
exports["default"] = userRouter;
//# sourceMappingURL=users.js.map