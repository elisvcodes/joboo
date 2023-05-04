import { Router } from "express";
import { handleCreateCompany } from "../../controllers/company/create";
import { companyService } from "../../services/companyService";

const router = Router();

router.post("/create", handleCreateCompany(companyService));

export default router;
