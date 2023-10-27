import Router from "express";
import * as controller from "./controller.js"

const router=Router();
router.route("/display").post(controller.addTask);


export default router;