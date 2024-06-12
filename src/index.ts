import express from "express";
import config from "./config";
import router from "./route";

const server = express();

server.use("/api", router)

server.listen(config.port, () => {
    console.log(`api is running on port: ${config.port}`)
})