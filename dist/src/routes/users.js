"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userRouter = express_1["default"].Router();
var users_1 = __importDefault(require("../controllers/users"));
var validate_1 = __importDefault(require("../middlewares/validate"));
userRouter.get('/', users_1["default"].usersListAllController);
userRouter.get('/find/:id', users_1["default"].userByIdController);
userRouter.post('/', validate_1["default"], users_1["default"].createUsersController);
userRouter.patch('/:id', validate_1["default"], users_1["default"].editUsersController);
userRouter["delete"]('/:id', users_1["default"].deleteUsersByIdController);
exports["default"] = userRouter;
//# sourceMappingURL=users.js.map