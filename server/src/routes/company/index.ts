import { Router } from "express";
import createCompany from "../../controllers/company/create";

const router = Router();

router.post("/create", createCompany);

export default router;
