import express from "express";
require("dotenv").config();

import routes from "./network/routes";
import connect from "./db";

const router = express.Router();
connect();

routes(router);

export default router;
