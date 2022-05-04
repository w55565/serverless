"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObjIndexed = void 0;
/**
 * 用于写一些常用的纯函数
 */
const lodash_1 = require("lodash");
const mapObjIndexed = (func, obj) => {
    const result = {};
    (0, lodash_1.map)(obj, (val, key) => {
        result[key] = func(val, key, obj);
    });
    return result;
};
exports.mapObjIndexed = mapObjIndexed;
