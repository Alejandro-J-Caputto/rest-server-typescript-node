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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const connectionDB_1 = __importDefault(require("../database/connectionDB"));
const user_1 = __importDefault(require("../models/user"));
const myQueryAsync = (query) => {
    return new Promise((resolve, reject) => {
        connectionDB_1.default.query(query, function (err, result, fields) {
            if (err)
                return reject(err);
            resolve(result);
        });
    });
};
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield myQueryAsync('SELECT * FROM users');
    //   db.query("SELECT * FROM users", function(err, result, fields) {
    //     if(err) throw err;
    //     res.status(200).json({
    //       msg: 'getUSers',
    //       result
    //     })
    // }
    res.status(200).json({
        msg: 'getUSers',
        users
    });
    // const users = await User.findAll();
    // res.status(200).json({
    //   msg: 'getUsers',
    //   users
    // })
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({
            status: 'fail',
            message: 'This id doesnt match any user on DB'
        });
    }
    res.status(200).json({
        msg: 'getUser',
        user
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const createUser = new user_1.default(body);
        yield createUser.save();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
    res.status(200).json({
        msg: 'postUser',
        body
    });
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const editUser = yield user_1.default.findByPk(id);
    if (!editUser)
        throw new Error('There is not an user with the provided ID');
    editUser === null || editUser === void 0 ? void 0 : editUser.update(body);
    res.status(200).json({
        msg: 'putUser',
        editUser
    });
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteUser = yield user_1.default.findByPk(id);
    deleteUser === null || deleteUser === void 0 ? void 0 : deleteUser.update({ active: false });
    res.status(200).json({
        msg: 'deleteUser',
        deleteUser
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map