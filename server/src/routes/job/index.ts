import { Router } from "express";
import createJob from "../../controllers/job/create";
import { createUserMiddleware } from "../../controllers/user/create";
import { createCompanyMiddleware } from "../../controllers/company/create";
import { userService } from "../../services/userService";
import { companyService } from "../../services/companyService";

const router = Router();

router.post(
  "/firstjob/create/",
  createUserMiddleware(userService),
  createCompanyMiddleware(companyService),
  createJob
);

export default router;
