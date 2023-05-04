"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var create_1 = require("../../controllers/user/create");
var userService_1 = require("../../services/userService");
var router = (0, express_1.Router)();
router.post("/create", (0, create_1.handleCreateUser)(userService_1.userService));
exports.default = router;
