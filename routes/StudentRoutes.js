import express from "express";
import { getAllStudents , getStudentById , createStudent , updateStudent , deleteStudent , } from "../controllers/StudentController.js";
import { validateStudent } from "../validators/studentValidator.js";

const router = express.Router();

router.get("/", getAllStudents);
router.post("/", validateStudent, createStudent);
router.get("/:id", getStudentById);
router.put("/:id", validateStudent, updateStudent);
router.delete("/:id", deleteStudent);

export default router;