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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 一个好习惯ajax的调用均使用protocol://hostname/api/** 等的url形式
 * 接口异常均可用 this.error 函数返回格式化数据到前端。本例子暂未使用
 */
const controller_1 = __importDefault(require("../../base/controller"));
class PlayerController extends controller_1.default {
    // restful规范接口
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctx } = this;
            const result = yield ctx.service.PlayerService.publicAll();
            this.success(result);
        });
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctx } = this;
            const { id } = ctx.request.params;
            const result = yield ctx.service.PlayerService.fetchOne(Number(id));
            this.success(result);
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctx } = this;
            const { name, position } = ctx.request.body;
            const result = yield ctx.service.PlayerService.create({ name, position });
            this.success(result);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctx } = this;
            const { id } = ctx.request.params;
            const { name, position } = ctx.request.body;
            const result = yield ctx.service.PlayerService.modify(Number(id), { name, position });
            this.success(result.length ? '修改成功' : '未知错误');
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctx } = this;
            const { id } = ctx.request.params;
            const result = yield ctx.service.PlayerService.delete(Number(id));
            this.success(result);
        });
    }
    /**
     * 非restful规范接口. test
     */
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            this.success('result test');
        });
    }
}
exports.default = PlayerController;
