import express from "express";
import {
  getCalenderData,
  newCalender,
} from "../controllers/calenderController.js";

const router = express.Router();

router.get("/", getCalenderData);
router.post("/new", newCalender);

export default router;
