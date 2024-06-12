import express from "express";
import config from "./config";
import router from "./route";
import morgan from "morgan";
import cors from "cors";


const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(morgan("dev"));



server.use("/api", router);




server.listen(config.port, () => {
    console.log(`api is running on port: ${config.port}`);
});