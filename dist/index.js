"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morganMiddlewares_1 = __importDefault(require("./src/middlewares/morganMiddlewares"));
var cors_1 = __importDefault(require("cors"));
require("./src/config/config");
var routes_1 = __importDefault(require("./src/routes"));
var env_1 = __importDefault(require("./src/helpers/env"));
var server = (0, express_1["default"])();
var port = env_1["default"].PORT || 8000;
server.listen(port, function () {
    console.log('Server is Connected', port);
});
server.use((0, cors_1["default"])());
server.use(express_1["default"].json());
server.use(express_1["default"].urlencoded({ extended: true }));
server.use(morganMiddlewares_1["default"]);
server.use(routes_1["default"]);
//# sourceMappingURL=index.js.map