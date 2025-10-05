import Student from "../models/Student.js";

const getAllStudents = async () => {
    return await Student.find();
};

const createStudent = async (studentData) => {
  const student = new Student(studentData);
  return await student.save();
};

const getStudentById = async (id) => {
  return await Student.findById(id);
};

const updateStudent = async (id, updateData) => {
  return await Student.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};


const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

export default { getAllStudents , getStudentById , createStudent , updateStudent , deleteStudent , };


