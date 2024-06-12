import { PrismaClient } from "@prisma/client";
import Database from "../../lib/database";
import UserRepository from "./repository";
import UserController from "./controller";

const prisma = new PrismaClient();
const database = new Database(prisma)
database.connect();
const userRepository = new UserRepository(database);
const userController = new UserController(userRepository);
export default userController;