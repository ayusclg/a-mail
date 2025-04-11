import { Router } from "express";
import { send } from "./mailController.js";

const router = Router();

router.route("/send", send);

export default router;
