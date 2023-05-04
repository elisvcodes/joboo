import { Router } from "express";
import createPaymentIntent from "../../controllers/payment/payment-intent";

const router = Router();

router.post("/create-payment-intent", createPaymentIntent);

export default router;
