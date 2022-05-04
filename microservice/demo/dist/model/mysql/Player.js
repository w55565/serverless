"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
class Player extends sequelize_1.Model {
}
exports.Player = Player;
exports.default = () => {
    return Player.init({
        id: {
            field: 'FPlayerId',
            type: sequelize_1.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            field: 'FPlayerName',
            type: (0, sequelize_1.STRING)(20),
        },
        position: {
            field: 'FPlayerPosition',
            type: (0, sequelize_1.STRING)(2),
        }
    }, {
        sequelize: index_1.sequelize,
        tableName: 'T_Player',
    });
};
