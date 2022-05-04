"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelObj = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const path_1 = require("path");
const fs_1 = require("fs");
exports.sequelize = new sequelize_1.Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORLD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
});
exports.modelObj = {};
const initORM = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    const path = (0, path_1.join)(__dirname, 'mysql');
    const modelFiles = (0, fs_1.readdirSync)(path);
    modelFiles.length && modelFiles.map(fileName => {
        const key = fileName.split('.')[0];
        const model = require((0, path_1.join)(path, fileName)).default;
        exports.modelObj[key] = model();
    });
    yield exports.sequelize.sync();
});
exports.default = initORM;
