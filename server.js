import express from "express";
import studentRoutes from "./routes/students.js"; // Import the router

const app = express();
app.use(express.json());

app.use("/api/students", studentRoutes); // Mount the student router

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
