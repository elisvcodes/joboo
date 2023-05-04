"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var create_1 = __importDefault(require("../../controllers/job/create"));
var create_2 = require("../../controllers/user/create");
var create_3 = require("../../controllers/company/create");
var userService_1 = require("../../services/userService");
var companyService_1 = require("../../services/companyService");
var router = (0, express_1.Router)();
router.post("/firstjob/create/", (0, create_2.createUserMiddleware)(userService_1.userService), (0, create_3.createCompanyMiddleware)(companyService_1.companyService), create_1.default);
exports.default = router;
