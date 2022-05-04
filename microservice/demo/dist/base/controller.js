"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const model_1 = require("../model");
class BaseController {
    constructor(req, res) {
        const context = {
            request: req,
            response: res,
            model: model_1.sequelize.models,
        };
        let service = {};
        const path = (0, path_1.join)(__dirname, '../service');
        const serviceFiles = (0, fs_1.readdirSync)(path).filter(x => x !== 'index.js');
        serviceFiles.map(fileName => {
            const name = (0, lodash_1.upperFirst)((0, lodash_1.camelCase)(fileName.split('.')[0] + 'Service'));
            const cotr = require((0, path_1.join)(path, fileName)).default;
            service = Object.assign(Object.assign({}, service), { get [name]() {
                    return new cotr(context);
                } });
        });
        this.ctx = Object.assign(Object.assign({}, context), { service });
    }
    success(data, msg) {
        const body = {
            errcode: 0,
            msg: msg || 'success',
            retcode: 0,
            data,
        };
        this.ctx.response.send(body);
        return;
    }
    error(errcode, retcode, msg, data) {
        const body = {
            errcode, msg, retcode, data,
        };
        this.ctx.response.send(body);
    }
    get request() {
        return this.ctx.request;
    }
    get response() {
        return this.ctx.response;
    }
}
exports.default = BaseController;
