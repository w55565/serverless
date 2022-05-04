"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const supRequest = (app) => {
    const superRequest = (0, supertest_1.default)(app);
    const baseGet = superRequest.get;
    const basePost = superRequest.post;
    const basePut = superRequest.put;
    const baseDelete = superRequest.delete;
    superRequest.get = function (url, callback) {
        return baseGet.apply(superRequest, [url, callback]).set('Accept', 'application/json').expect('Content-Type', /json/);
    };
    superRequest.post = function (url, callback) {
        return basePost.apply(superRequest, [url, callback]).set('Accept', 'application/json').expect('Content-Type', /json/);
    };
    superRequest.put = function (url, callback) {
        return basePut.apply(superRequest, [url, callback]).set('Accept', 'application/json').expect('Content-Type', /json/);
    };
    superRequest.delete = function (url, callback) {
        return baseDelete.apply(superRequest, [url, callback]).set('Accept', 'application/json').expect('Content-Type', /json/);
    };
    return superRequest;
};
exports.default = supRequest;
