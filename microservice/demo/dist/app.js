"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./router"));
const model_1 = __importDefault(require("./model"));
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
(0, model_1.default)();
(0, router_1.default)(exports.app);
exports.app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is listening on port 3000");
});
