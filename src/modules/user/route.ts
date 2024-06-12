import { Router } from "express";
import userController from "./bootstrap";

const router = Router();

router.get("/:id", userController.getById.bind(userController))

router.post("/", userController.createOne.bind(userController))

router.put("/", userController.updateById.bind(userController))

router.delete("/:id", userController.deleteById.bind(userController))

export default router;