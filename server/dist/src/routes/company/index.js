"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var create_1 = require("../../controllers/company/create");
var companyService_1 = require("../../services/companyService");
var router = (0, express_1.Router)();
router.post("/create", (0, create_1.handleCreateCompany)(companyService_1.companyService));
exports.default = router;
