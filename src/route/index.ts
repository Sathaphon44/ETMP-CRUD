import { Router } from "express";
import UserRoute from "../modules/user";
const router = Router();

router.use("/user", UserRoute)

export default router;