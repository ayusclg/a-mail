import { Router } from "express";
import { send } from "./mailController.js";

const router = Router();

router.route("/send").post(send);

export default router;
