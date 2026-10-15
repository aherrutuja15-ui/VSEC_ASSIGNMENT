const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Maya", marks: 94 },
    { id: 2, name: "Rahul", marks: 88 },
    { id: 3, name: "Priya", marks: 96 }
];

// Home route
app.get("/", (req, res) => {
    res.send("Student API is running successfully!");
});

// Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// Get student by ID
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.json(student);
});

// Add a new student
app.post("/students", (req, res) => {
    const student = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name: req.body.name,
        marks: req.body.marks
    };

    students.push(student);
    res.status(201).json(student);
});

// Update a student
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    student.name = req.body.name;
    student.marks = req.body.marks;

    res.json({
        message: "Student updated successfully",
        student
    });
});

// Delete a student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send("Student not found");
    }

    students.splice(index, 1);
    res.send("Student deleted successfully");
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
setInterval(() => {
    console.log("Server is still running");
}, 5000);
