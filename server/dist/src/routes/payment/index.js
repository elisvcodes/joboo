"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var payment_intent_1 = __importDefault(require("../../controllers/payment/payment-intent"));
var router = (0, express_1.Router)();
router.post("/create-payment-intent", payment_intent_1.default);
exports.default = router;
