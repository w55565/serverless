"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 原计划用于test的http请求。目前暂未使用
 */
const http_1 = require("http");
const assert_1 = require("assert");
class HttpTest {
    constructor() {
        this.config = {
            host: '127.0.0.1',
            // port: process.env.SERVER_PORT,
            port: 3000,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': 0,
            }
        };
    }
    static httpRequest() {
        return new HttpTest();
    }
    post(url) {
        this.url = url;
        this.config.method = 'POST';
        return this;
    }
    get(url) {
        this.url = url;
        this.config.method = 'GET';
        return this;
    }
    put(url) {
        this.url = url;
        this.config.method = 'PUT';
        return this;
    }
    ;
    delete(url) {
        this.url = url;
        this.config.method = 'DELETE';
        return this;
    }
    ;
    send(data) {
        this.data = data;
        return this;
    }
    expect(param) {
        let data = '';
        if (!this.statusCode) {
            new Promise(resolve => {
            }).then();
            const dataStr = JSON.stringify(this.data);
            this.data && (this.config.headers['Content-Length'] = dataStr.length);
            const req = (0, http_1.request)(this.config, res => {
                this.statusCode = res.statusCode;
                res.setEncoding('utf8');
                res.on('data', d => {
                    data += d;
                });
                res.on('end', () => {
                    this.result = JSON.parse(data);
                    if (typeof param === 'number') {
                        (0, assert_1.equal)(this.statusCode, param);
                    }
                    else {
                        param(this.result);
                    }
                });
            });
            req.on('error', e => console.error(e));
            req.write(dataStr);
            req.end();
        }
        else if (typeof param === 'number') {
            (0, assert_1.equal)(this.statusCode, param);
        }
        else {
            param(this.result);
        }
        return this;
    }
}
exports.default = HttpTest;
