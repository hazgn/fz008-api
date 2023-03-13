"use strict";
exports.__esModule = true;
exports.error = void 0;
var error = function (res, status, data) {
    var dataError = new Error(data);
    res.status(status).json({ err: { message: dataError.message } });
};
exports.error = error;
exports["default"] = {
    success: function (res, status, data) {
        res.status(status).json({ result: data });
    },
    error: function (res, status, data) {
        var dataError = new Error(data);
        res.status(status).json({ err: { message: dataError.message } });
    }
};
//# sourceMappingURL=response.js.map