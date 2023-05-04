import { Router } from "express";
import { handleCreateUser } from "../../controllers/user/create";
import { userService } from "../../services/userService";

const router = Router();

router.post("/create", handleCreateUser(userService));

export default router;
