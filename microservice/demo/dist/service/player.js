"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../base/server"));
class PlayerService extends server_1.default {
    get model() {
        return this.ctx.model.Player;
    }
    publicAll() {
        return this.model.findAll();
    }
    fetchOne(id) {
        return this.model.findByPk(id);
    }
    // 暂不过多做数据验证。设计框架花费了大量时间
    create(obj) {
        return this.model.create(obj);
    }
    // 暂不过多做数据验证。
    modify(id, obj) {
        return this.model.update(obj, {
            where: {
                id,
            },
        });
    }
    // 根据情况可做软删除。这里直接删
    delete(id) {
        return this.model.destroy({
            where: {
                id,
            },
        });
    }
}
exports.default = PlayerService;
