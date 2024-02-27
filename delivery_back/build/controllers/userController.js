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
exports.createUser = exports.getUser = void 0;
const userModel_1 = require("../models/userModel");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.userModel.find({});
    res.send(users);
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.userModel.create({
        name: "Battsetseg",
        email: "bg@gmail.com",
        password: "1234",
        phoneNumber: 80836369,
        role: "admin",
    });
    res.send(user);
});
exports.createUser = createUser;
