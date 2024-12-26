import { Router } from "express";
import * as rh from "./requesthandler/user.request.js";


const router=Router();
router.route("/addcar").post(rh.addcar)


export default router
