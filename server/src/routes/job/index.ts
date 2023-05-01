import { Router } from "express";
import createJob from "../../controllers/job/create";
import createUser from "../../controllers/user/create";
import createCompany from "../../controllers/company/create";

const router = Router();

router.post("/firstjob/create/", createUser, createCompany, createJob);

export default router;
