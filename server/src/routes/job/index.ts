import { Router } from "express";
import createJob from "../../controllers/job/create";
import { createUserMiddleware } from "../../controllers/user/create";
import createCompany from "../../controllers/company/create";
import { userService } from "../../services/userService";

const router = Router();

router.post(
  "/firstjob/create/",
  createUserMiddleware(userService),
  createCompany,
  createJob
);

export default router;
