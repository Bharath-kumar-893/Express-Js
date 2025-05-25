import express from "express";
const router = express.Router();

const students = [
    { id: 1, Name: "Bharath Kumar", Dept: "IT" },
    { id: 2, Name: "Jayamani R", Dept: "CSE" }
];

// ✅ Get All Students
router.get("/", (req, res) => {
    res.status(200).json(students);
});

// ✅ Get a Single Student by ID
router.get("/:id", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.status(200).json(student);
});

// ✅ Add a New Student
router.post("/", (req, res) => {
    const newStudent = { id: students.length + 1, ...req.body };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

export default router;
