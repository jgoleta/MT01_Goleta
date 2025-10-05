import StudentService from "../services/StudentService.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentService.getAllStudents();
    res.status(200).json(students);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }
};

export const createStudent = async (req, res) => {
    try {
        const student = await StudentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }   
};

export const getStudentById = async (req, res) => {
    try {
        const student = await StudentService.getStudentById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }
};

export const updateStudent = async (req, res) => {
    try {
        const student = await StudentService.updateStudent(req.params.id, req.body);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }
};
export const deleteStudent = async (req, res) => {
    try {
        const student = await StudentService.deleteStudent(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json(({ message: error.message }));
    }
};

export default { getAllStudents , getStudentById , createStudent , updateStudent , deleteStudent , };
