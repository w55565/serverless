"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const pureFunc_1 = require("../tools/pureFunc");
const { restful, controller } = config_1.default;
const getHandleFunc = (path, action) => {
    const Constr = require('../controller' + path).default;
    const handleFactory = (action) => (req, res) => {
        const ctorObj = new Constr(req, res);
        ctorObj[action]();
    };
    return handleFactory(action);
};
const initRouters = (app) => {
    (0, pureFunc_1.mapObjIndexed)((v, k) => {
        const idUrl = k + '/:id';
        app.get(k, getHandleFunc(v.path, 'index'));
        app.post(k, getHandleFunc(v.path, 'create'));
        app.get(idUrl, getHandleFunc(v.path, 'show'));
        app.put(idUrl, getHandleFunc(v.path, 'update'));
        app.delete(idUrl, getHandleFunc(v.path, 'destroy'));
    }, restful);
    (0, pureFunc_1.mapObjIndexed)((v, k) => {
        const paths = v.path.split('/');
        const action = paths.pop();
        const path = paths.join('/');
        app[v.method](k, getHandleFunc(path, action));
    }, controller);
};
exports.default = initRouters;
