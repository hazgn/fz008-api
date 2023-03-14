"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var chai_1 = __importDefault(require("chai"));
var chai_http_1 = __importDefault(require("chai-http"));
var node_test_1 = require("node:test");
var __1 = __importDefault(require(".."));
chai_1["default"].should();
chai_1["default"].use(chai_http_1["default"]);
(0, node_test_1.describe)('Test API', function () {
    (0, node_test_1.describe)('GET /users', function () {
        (0, node_test_1.it)('It should GET all the users', function (done) {
            chai_1["default"].request(__1["default"]).get('/users').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });
    (0, node_test_1.describe)('GET /users/find/:id', function () {
        (0, node_test_1.it)('It Should GET a Users By Id', function (done) {
            var testID = 1;
            chai_1["default"].request(__1["default"]).get("/users/find/".concat(testID))
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                done();
            });
        });
    });
    (0, node_test_1.describe)('POST /users', function () {
        (0, node_test_1.it)('It Should POST a new user', function (done) {
            var body = {
                email: 'tryTesting@gmail.com',
                fullname: 'Try Testing'
            };
            chai_1["default"].request(__1["default"])
                .post('/users').send(body)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                done();
            });
        });
    });
    (0, node_test_1.describe)('PATCH /users/:id', function () {
        (0, node_test_1.it)('It should be PATCH an existing user', function (done) {
            var testID = 1;
            var body = {
                email: 'tryEdit@gmail.com',
                fullname: 'Try Edit'
            };
            chai_1["default"].request(__1["default"])
                .patch("/users/".concat(testID)).send(body)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                done();
            });
        });
    });
    (0, node_test_1.describe)('DELETE /users/:id', function () {
        (0, node_test_1.it)('It Should Delete an Existing user', function (done) {
            var testId = 1;
            chai_1["default"].request(__1["default"])["delete"]("/users/".concat(testId))
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                done();
            });
        });
    });
});
//# sourceMappingURL=config-loader.test.js.map