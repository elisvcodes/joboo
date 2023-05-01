"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var create_1 = __importDefault(require("../../controllers/job/create"));
var create_2 = __importDefault(require("../../controllers/user/create"));
var create_3 = __importDefault(require("../../controllers/company/create"));
var router = (0, express_1.Router)();
router.post("/firstjob/create/", create_2.default, create_3.default, create_1.default);
exports.default = router;
