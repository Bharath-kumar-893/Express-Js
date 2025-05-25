//Lesson 1
//Setting up Express.js
// import express from "express";
// const app=express();
// const PORT= process.env.PORT || 3000;
// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });

//Lesson 2
//get requests
// import express from "express";
// const app=express();
// const PORT= process.env.PORT || 3000;
// app.get("/",(req,res)=>
// {
//  res.send("Welcome to the home page");
// });
// app.get("/api/student",(req,res)=>

// {
//     res.status(201).send([{"id":"21BIT064","Name":"Bharath Kumar N","Dept":"IT"},
//         {"id":"21BIT060","Name":"Jayamani R","Dept":"IT"},
//         {"id":"21BIT032","Name":"Elaiyabharathi P","Dept":"IT"},
//         {"id":"21BIT038","Name":"Selvaragul M","Dept":"IT"},
//         {"id":"21BIT082","Name":"Priyadharshini V","Dept":"IT"},
//         {"id":"21BIT108","Name":"Abishek R","Dept":"IT"},
//     ])
// });
// app.get("/api/jobs",(req,res)=>
// {
//     res.status(201).send([{"student":"Bharath Kumar","Job":"LTI/CTS"},
//         {"student":"Jayamani","Job":"Kaar Technologies"},
//         {"student":"Elaiyabharathi","Job":"Google"},
//         {"student":"Selvaragul","Job":"Saama Technologies"},
//         {"student":"Priyadharshini","Job":"Azentio"},
//         {"student":"Abishek","Job":"Microsoft"},
//         {"student":"Joshni","Job":"Rapid Data"},
//     ])
// })
// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });


//Lesson 3
//Routing Parameters
// import express from "express";
// const app=express();
// const PORT= process.env.PORT || 3000;
// const students=[
//     {"id":"21BIT064","Name":"Bharath Kumar N","Dept":"IT"},
//     {"id":"21BIT060","Name":"Jayamani R","Dept":"IT"},
//     {"id":"21BIT032","Name":"Elaiyabharathi P","Dept":"IT"},
//     {"id":"21BIT038","Name":"Selvaragul M","Dept":"IT"},
//     {"id":"21BIT082","Name":"Priyadharshini V","Dept":"IT"},
//     {"id":"21BIT108","Name":"Abishek R","Dept":"IT"},
// ];
// app.get("/",(req,res)=>
// {
//  res.send("Welcome to the home page");
// });
// app.get("/api/student",(req,res)=>
// {
//     res.status(201).send(students);
// });

// app.get("/api/student/:id",(request,response)=>
// {
//     console.log(request.params);
//     const ID=request.params.id;
//     const foundStudent = students.find((user) => user.id === ID); // Use strict equality for better practice

//     if (!foundStudent) { // Corrected variable name
//         return response.status(400).send("Bad Request"); // Send a 400 status with the message
//     }
    
//     return response.status(200).send(foundStudent); 
// });

// app.get("/api/jobs",(req,res)=>
// {
//     res.status(201).send([{"student":"Bharath Kumar","Job":"LTI/CTS"},
//         {"student":"Jayamani","Job":"Kaar Technologies"},
//         {"student":"Elaiyabharathi","Job":"Google"},
//         {"student":"Selvaragul","Job":"Saama Technologies"},
//         {"student":"Priyadharshini","Job":"Azentio"},
//         {"student":"Abishek","Job":"Microsoft"},
//         {"student":"Joshni","Job":"Rapid Data"},
//     ])
// })
// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });



//Lesson 4
//Query Parameters
// import express from "express";
// const app=express();
// const PORT= process.env.PORT || 3000;
// const students=[
//     {"id":"21BIT064","Name":"Bharath Kumar N","Dept":"IT"},
//     {"id":"21BIT060","Name":"Jayamani R","Dept":"IT"},
//     {"id":"21BIT032","Name":"Elaiyabharathi P","Dept":"IT"},
//     {"id":"21BIT038","Name":"Selvaragul M","Dept":"IT"},
//     {"id":"21BIT082","Name":"Priyadharshini V","Dept":"IT"},
//     {"id":"21BIT108","Name":"Abishek R","Dept":"IT"},
// ];
// app.get("/",(req,res)=>
// {
//  res.send("Welcome to the home page");
// });
// app.get("/api/student",(req,res)=>
// {
//     const{query:{filter,value},}=req;
//     if(filter && value)
//     {
//         return res.send(students.filter((user)=>user[filter].includes(value)));
//     }
//     res.status(201).send(students);
// });

// app.get("/api/student/:id",(request,response)=>
// {
//     console.log(request.params);
//     const ID=request.params.id;
//     const foundStudent = students.find((user) => user.id === ID); // Use strict equality for better practice

//     if (!foundStudent) { // Corrected variable name
//         return response.status(400).send("Bad Request"); // Send a 400 status with the message
//     }
    
//     return response.status(200).send(foundStudent); 
// });

// app.get("/api/jobs",(req,res)=>
// {
//     res.status(201).send([{"student":"Bharath Kumar","Job":"LTI/CTS"},
//         {"student":"Jayamani","Job":"Kaar Technologies"},
//         {"student":"Elaiyabharathi","Job":"Google"},
//         {"student":"Selvaragul","Job":"Saama Technologies"},
//         {"student":"Priyadharshini","Job":"Azentio"},
//         {"student":"Abishek","Job":"Microsoft"},
//         {"student":"Joshni","Job":"Rapid Data"},
//     ])
// })
// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });


//Lesson 5
//Post request
// import express from "express";
// const app=express();
// app.use(express.json());
// const PORT= process.env.PORT || 3000;
// const students=[
//     {"id":1,"Name":"Bharath Kumar N","Dept":"IT"},
//     {"id":2,"Name":"Jayamani R","Dept":"IT"},
//     {"id":3,"Name":"Elaiyabharathi P","Dept":"IT"},
//     {"id":4,"Name":"Selvaragul M","Dept":"IT"},
//     {"id":5,"Name":"Priyadharshini V","Dept":"IT"},
//     {"id":6,"Name":"Abishek R","Dept":"IT"},
// ];
// app.get("/",(req,res)=>
// {
//  res.send("Welcome to the home page");
// });
// app.get("/api/student",(req,res)=>
// {
//     const{query:{filter,value},}=req;
//     if(filter && value)
//     {
//         return res.send(students.filter((user)=>user[filter].includes(value)));
//     }
//     res.status(201).send(students);
// });

// app.post("/api/student",(req,res)=>{
//     const {body}=req;
//     const newStudent={id:students[students.length-1].id+1,...body};
//     students.push(newStudent)
//     return res.status(200).send(newStudent);
// });
// app.get("/api/student/:id",(request,response)=>
// {
//     console.log(request.params);
//     const ID=request.params.id;
//     const foundStudent = students.find((user) => user.id === ID); // Use strict equality for better practice

//     if (!foundStudent) 
//     { // Corrected variable name
//         return response.status(400).send("Bad Request"); // Send a 400 status with the message
//     }
    
//     return response.status(200).send(foundStudent); 
// });

// app.get("/api/jobs",(req,res)=>
// {
//     res.status(201).send([{"student":"Bharath Kumar","Job":"LTI/CTS"},
//         {"student":"Jayamani","Job":"Kaar Technologies"},
//         {"student":"Elaiyabharathi","Job":"Google"},
//         {"student":"Selvaragul","Job":"Saama Technologies"},
//         {"student":"Priyadharshini","Job":"Azentio"},
//         {"student":"Abishek","Job":"Microsoft"},
//         {"student":"Joshni","Job":"Rapid Data"},
//     ])
// })
// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });

//lesson 6
//Put request
// import express from "express";
// const app=express();
// app.use(express.json());
// const PORT= process.env.PORT || 3000;
// const students=[
//     {"id":1,"Name":"Bharath Kumar N","Dept":"IT","Job":"SDE"},
//     {"id":2,"Name":"Jayamani R","Dept":"IT","Job":"SAP"},
//     {"id":3,"Name":"Elaiyabharathi P","Dept":"IT","Job":"Developer"},
//     {"id":4,"Name":"Selvaragul M","Dept":"IT","Job":"Python dev"},
//     {"id":5,"Name":"Priyadharshini V","Dept":"IT","Job":"SDET"},
//     {"id":6,"Name":"Abishek R","Dept":"IT","Job":"Data Analyst"},
// ];
// app.get("/",(req,res)=>
// {
//  res.send("Welcome to the home page");
// });
// app.get("/api/student",(req,res)=>
// {
//     const{query:{filter,value},}=req;
//     if(filter && value)
//     {
//         return res.send(students.filter((user)=>user[filter].includes(value)));
//     }
//     res.status(201).send(students);
// });

// app.post("/api/student",(req,res)=>{
//     const {body}=req;
//     const newStudent={id:students[students.length-1].id+1,...body};
//     students.push(newStudent)
//     return res.status(200).send(newStudent);
// });
// app.get("/api/student/:id",(request,response)=>
// {
//     console.log(request.params);
//     const ID=request.params.id;
//     const foundStudent = students.find((user) => user.id === ID); // Use strict equality for better practice

//     if (!foundStudent) 
//     { // Corrected variable name
//         return response.status(400).send("Bad Request"); // Send a 400 status with the message
//     }
    
//     return response.status(200).send(foundStudent); 
// });

// app.get("/api/jobs",(req,res)=>
// {
//     res.status(201).send([{"student":"Bharath Kumar","Job":"LTI/CTS"},
//         {"student":"Jayamani","Job":"Kaar Technologies"},
//         {"student":"Elaiyabharathi","Job":"Google"},
//         {"student":"Selvaragul","Job":"Saama Technologies"},
//         {"student":"Priyadharshini","Job":"Azentio"},
//         {"student":"Abishek","Job":"Microsoft"},
//         {"student":"Joshni","Job":"Rapid Data"},
//     ])
// });
// app.put("/api/student/:id", (req, res) => {
//     const ID = parseInt(req.params.id); // Convert ID to a number
//     const { Job } = req.body; // Get the new job from request body

//     // Find the student by ID
//     const studentIndex = students.findIndex((user) => user.id === ID);

//     // If student not found, return error
//     if (studentIndex === -1) {
//         return res.status(404).send({ error: "Student not found" });
//     }

//     // Update the job field
//     students[studentIndex].Job = Job;

//     // Send the updated student as response
//     return res.status(200).send(students[studentIndex]);
// });

// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });

//Lesson 7
//Patch request
// import express from "express";
// const app=express();
// app.use(express.json());
// const PORT= process.env.PORT || 3002;
// const students=[
//     {"id":1,"Name":"Bharath Kumar N","Dept":"IT","Job":"SDE"},
//     {"id":2,"Name":"Jayamani R","Dept":"IT","Job":"SAP"},
//     {"id":3,"Name":"Elaiyabharathi P","Dept":"IT","Job":"Developer"},
//     {"id":4,"Name":"Selvaragul M","Dept":"IT","Job":"Python dev"},
//     {"id":5,"Name":"Priyadharshini V","Dept":"IT","Job":"SDET"},
//     {"id":6,"Name":"Abishek R","Dept":"IT","Job":"Data Analyst"},
// ];
// app.get("/",(req,res)=>
// {
//  res.send("Welcome to the home page");
// });
// app.get("/api/student",(req,res)=>
// {
//     const{query:{filter,value},}=req;
//     if(filter && value)
//     {
//         return res.send(students.filter((user)=>user[filter].includes(value)));
//     }
//     res.status(201).send(students);
// });

// app.post("/api/student",(req,res)=>{
//     const {body}=req;
//     const newStudent={id:students[students.length-1].id+1,...body};
//     students.push(newStudent)
//     return res.status(200).send(newStudent);
// });
// app.get("/api/student/:id",(request,response)=>
// {
//     console.log(request.params);
//     const ID=request.params.id;
//     const foundStudent = students.find((user) => user.id === ID); // Use strict equality for better practice

//     if (!foundStudent) 
//     { // Corrected variable name
//         return response.status(400).send("Bad Request"); // Send a 400 status with the message
//     }
    
//     return response.status(200).send(foundStudent); 
// });

// app.get("/api/jobs",(req,res)=>
// {
//     res.status(201).send([{"student":"Bharath Kumar","Job":"LTI/CTS"},
//         {"student":"Jayamani","Job":"Kaar Technologies"},
//         {"student":"Elaiyabharathi","Job":"Google"},
//         {"student":"Selvaragul","Job":"Saama Technologies"},
//         {"student":"Priyadharshini","Job":"Azentio"},
//         {"student":"Abishek","Job":"Microsoft"},
//         {"student":"Joshni","Job":"Rapid Data"},
//     ])
// });
// app.put("/api/student/:id", (req, res) => {
//     const ID = parseInt(req.params.id); // Convert ID to a number
//     const { Job } = req.body; // Get the new job from request body

//     // Find the student by ID
//     const studentIndex = students.findIndex((user) => user.id === ID);

//     // If student not found, return error
//     if (studentIndex === -1) {
//         return res.status(404).send({ error: "Student not found" });
//     }

//     // Update the job field
//     students[studentIndex].Job = Job;

//     // Send the updated student as response
//     return res.status(200).send(students[studentIndex]);
// });app.patch("/api/student/:id", (req, res) => {
//     const ID = parseInt(req.params.id); // Convert ID to integer
//     const updates = req.body; // Get fields to update from request body

//     // Find the student in the array
//     const student = students.find((user) => user.id === ID);

//     // If student not found, return 404 error
//     if (!student) {
//         return res.status(404).send({ error: "Student not found" });
//     }

//     // Update only provided fields dynamically
//     Object.keys(updates).forEach((key) => {
//         if (student[key] !== undefined) {
//             student[key] = updates[key];
//         }
//     });

//     return res.status(200).send(student);
// });

// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });

//Lesson 8
// //Delete
// import express from "express";
// const app=express();
// app.use(express.json());
// const PORT= process.env.PORT || 3001;
// const students=[
//     {"id":1,"Name":"Bharath Kumar N","Dept":"IT","Job":"SDE"},
//     {"id":2,"Name":"Jayamani R","Dept":"IT","Job":"SAP"},
//     {"id":3,"Name":"Elaiyabharathi P","Dept":"IT","Job":"Developer"},
//     {"id":4,"Name":"Selvaragul M","Dept":"IT","Job":"Python dev"},
//     {"id":5,"Name":"Priyadharshini V","Dept":"IT","Job":"SDET"},
//     {"id":6,"Name":"Abishek R","Dept":"IT","Job":"Data Analyst"},
// ];
// app.get("/",(req,res)=>
// {
//  res.send("Welcome to the home page");
// });
// app.get("/api/student",(req,res)=>
// {
//     const{query:{filter,value},}=req;
//     if(filter && value)
//     {
//         return res.send(students.filter((user)=>user[filter].includes(value)));
//     }
//     res.status(201).send(students);
// });

// app.post("/api/student",(req,res)=>{
//     const {body}=req;
//     const newStudent={id:students[students.length-1].id+1,...body};
//     students.push(newStudent)
//     return res.status(200).send(newStudent);
// });
// app.get("/api/student/:id",(request,response)=>
// {
//     console.log(request.params);
//     const ID=request.params.id;
//     const foundStudent = students.find((user) => user.id === ID); // Use strict equality for better practice

//     if (!foundStudent) 
//     { // Corrected variable name
//         return response.status(400).send("Bad Request"); // Send a 400 status with the message
//     }
    
//     return response.status(200).send(foundStudent); 
// });

// app.get("/api/jobs",(req,res)=>
// {
//     res.status(201).send([{"student":"Bharath Kumar","Job":"LTI/CTS"},
//         {"student":"Jayamani","Job":"Kaar Technologies"},
//         {"student":"Elaiyabharathi","Job":"Google"},
//         {"student":"Selvaragul","Job":"Saama Technologies"},
//         {"student":"Priyadharshini","Job":"Azentio"},
//         {"student":"Abishek","Job":"Microsoft"},
//         {"student":"Joshni","Job":"Rapid Data"},
//     ])
// });
// app.put("/api/student/:id", (req, res) => {
//     const ID = parseInt(req.params.id); // Convert ID to a number
//     const { Job } = req.body; // Get the new job from request body

//     // Find the student by ID
//     const studentIndex = students.findIndex((user) => user.id === ID);

//     // If student not found, return error
//     if (studentIndex === -1) {
//         return res.status(404).send({ error: "Student not found" });
//     }

//     // Update the job field
//     students[studentIndex].Job = Job;

//     // Send the updated student as response
//     return res.status(200).send(students[studentIndex]);
// });
// app.patch("/api/student/:id", (req, res) => {
//     const ID = parseInt(req.params.id); // Convert ID to integer
//     const updates = req.body; // Get fields to update from request body

//     // Find the student in the array
//     const student = students.find((user) => user.id === ID);

//     // If student not found, return 404 error
//     if (!student) {
//         return res.status(404).send({ error: "Student not found" });
//     }

//     // Update only provided fields dynamically
//     Object.keys(updates).forEach((key) => {
//         if (student[key] !== undefined) {
//             student[key] = updates[key];
//         }
//     });

//     return res.status(200).send(student);
// });
// //delete
// app.delete("/api/student/:id", (req, res) => {
//     const ID = parseInt(req.params.id); // Convert ID to number

//     // Find the index of the student in the array
//     const studentIndex = students.findIndex((user) => user.id === ID);

//     // If student is not found, return 404 error
//     if (studentIndex === -1) {
//         return res.status(404).send({ error: "Student not found" });
//     }

//     // Remove the student from the array
//     const deletedStudent = students.splice(studentIndex, 1);

//     return res.status(200).send({
//         message: "Student deleted successfully",
//         deletedStudent: deletedStudent[0],
//     });
// });


// app.listen(PORT,()=>
// {
//     console.log(`Running on Port ${PORT}`)
// });

//Lesson 9
//Middle ware
// import express from "express";

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 3001;

// const students = [
//     { id: 1, Name: "Bharath Kumar N", Dept: "IT", Job: "SDE" },
//     { id: 2, Name: "Jayamani R", Dept: "IT", Job: "SAP" },
//     { id: 3, Name: "Elaiyabharathi P", Dept: "IT", Job: "Developer" },
//     { id: 4, Name: "Selvaragul M", Dept: "IT", Job: "Python dev" },
//     { id: 5, Name: "Priyadharshini V", Dept: "IT", Job: "SDET" },
//     { id: 6, Name: "Abishek R", Dept: "IT", Job: "Data Analyst" },
// ];

// // 🚀 Middleware: Logger
// const logger = (req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
//     next();
// };
// app.use(logger);

// // 🚀 Middleware: Validation for POST
// const validateStudent = (req, res, next) => {
//     const { Name, Dept, Job } = req.body;
//     if (!Name || !Dept || !Job) {
//         return res.status(400).send({ error: "Missing required fields: Name, Dept, or Job" });
//     }
//     next();
// };

// //🚀 Middleware: Authentication (for DELETE)
// const authenticate = (req, res, next) => {
//     const token = req.headers.authorization;
//     if (!token || token !== "Bearer 123") {
//         return res.status(403).send({ error: "Unauthorized access" });
        

//     }
//     console.log("Authorization Header Received:", req.headers.authorization);
//     next();
// };

// app.get("/", (req, res) => res.send("Welcome to the home page"));

// app.get("/api/student", (req, res) => {
//     const { query: { filter, value } } = req;
//     if (filter && value) {
//         return res.send(students.filter((user) => user[filter].includes(value)));
//     }
//     res.status(200).send(students);
// });

// app.post("/api/student", validateStudent, (req, res) => {
//     const newStudent = { id: students[students.length - 1].id + 1, ...req.body };
//     students.push(newStudent);
//     return res.status(201).send(newStudent);
// });

// app.delete("/api/student/:id",  (req, res) => {
//     const ID = parseInt(req.params.id);
//     const studentIndex = students.findIndex((user) => user.id === ID);
//     if (studentIndex === -1) {
//         return res.status(404).send({ error: "Student not found" });
//     }
//     const deletedStudent = students.splice(studentIndex, 1);
//     return res.status(200).send({ message: "Student deleted", deletedStudent: deletedStudent[0] });
// });

// app.listen(PORT, () => console.log(`Running on Port ${PORT}`));

//Lesson 10
//Validation
// import express from "express";
// import { body, validationResult } from "express-validator";

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 3001;

// const students = [
//     { id: 1, Name: "Bharath Kumar N", Dept: "IT", Job: "SDE" },
//     { id: 2, Name: "Jayamani R", Dept: "IT", Job: "SAP" },
//     { id: 3, Name: "Elaiyabharathi P", Dept: "IT", Job: "Developer" },
//     { id: 4, Name: "Selvaragul M", Dept: "IT", Job: "Python dev" },
//     { id: 5, Name: "Priyadharshini V", Dept: "IT", Job: "SDET" },
//     { id: 6, Name: "Abishek R", Dept: "IT", Job: "Data Analyst" },
// ];

// // 🚀 Middleware: Logger
// const logger = (req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
//     next();
// };
// app.use(logger);

// // 🚀 Middleware: Authentication (for DELETE)
// const authenticate = (req, res, next) => {
//     const token = req.headers.authorization;
//     if (!token || token !== "Bearer 123") {
//         return res.status(403).send({ error: "Unauthorized access" });
//     }
//     console.log("Authorization Header Received:", req.headers.authorization);
//     next();
// };

// // 🚀 Validation for POST request using express-validator
// const validateStudent = [
//     body("Name").isString().notEmpty().withMessage("Name is required and must be a string"),
//     body("Dept").isString().notEmpty().withMessage("Dept is required and must be a string"),
//     body("Job").isString().notEmpty().withMessage("Job is required and must be a string"),
//     (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         next();
//     }
// ];

// app.get("/", (req, res) => res.send("Welcome to the home page"));

// app.get("/api/student", (req, res) => {
//     const { query: { filter, value } } = req;
//     if (filter && value) {
//         return res.send(students.filter((user) => user[filter].includes(value)));
//     }
//     res.status(200).send(students);
// });

// // 🚀 POST Request with Validation Middleware
// app.post("/api/student", validateStudent, (req, res) => {
//     const newStudent = { id: students.length + 1, ...req.body };
//     students.push(newStudent);
//     return res.status(201).send(newStudent);
// });

// // 🚀 DELETE Request with Authentication & ID Validation
// app.delete("/api/student/:id", authenticate, (req, res) => {
//     const ID = parseInt(req.params.id);
//     if (isNaN(ID)) {
//         return res.status(400).send({ error: "Invalid student ID" });
//     }

//     const studentIndex = students.findIndex((user) => user.id === ID);
//     if (studentIndex === -1) {
//         return res.status(404).send({ error: "Student not found" });
//     }

//     const deletedStudent = students.splice(studentIndex, 1);
//     return res.status(200).send({ message: "Student deleted", deletedStudent: deletedStudent[0] });
// });

// app.listen(PORT, () => console.log(`Running on Port ${PORT}`));

//Lesson 11
//Cookies
// import express from "express";
// import cookieParser from "cookie-parser";

// const app = express();
// app.use(cookieParser()); // Middleware to parse cookies
// app.use(express.json());

// const PORT = 3001;

// // ✅ Set a cookie
// app.get("/set-cookie", (req, res) => {
//     res.cookie("username", "bharath", {
//         maxAge: 1000 * 60 * 60, // 1 hour
//         httpOnly: true, // not accessible via JS (secure)
//     });
//     res.send("Cookie set!");
// });

// // ✅ Read cookies
// app.get("/get-cookie", (req, res) => {
//     console.log(req.cookies); // logs { username: 'bharath' }
//     res.send(req.cookies);
// });

// // ✅ Clear cookie
// app.get("/clear-cookie", (req, res) => {
//     res.clearCookie("username");
//     res.send("Cookie cleared!");
// });

// app.listen(PORT, () => console.log(`Running on port ${PORT}`));

//crate a cookie and set its expiry time for 5 minutes
// import express from "express";
// import cookieParser from "cookie-parser";

// const app = express();
// app.use(cookieParser()); // Middleware to parse cookies

// const PORT = 3001;

// // ✅ Set a cookie that expires in 5 minutes (300,000 ms)
// app.get("/set-cookie", (req, res) => {
//     const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes from now
//     res.cookie("sessionCookie", expiresAt, {
//         expires: new Date(expiresAt),
//         httpOnly: true, // Cookie is not accessible via JavaScript
//     });
//     res.send("Cookie set! It will expire in 5 minutes.");
// });

// // ✅ Check remaining time
// app.get("/get-cookie", (req, res) => {
//     const expiresAt = req.cookies.sessionCookie;
    
//     if (!expiresAt) {
//         return res.send("No active session cookie found!");
//     }

//     const remainingTime = Math.max(0, expiresAt - Date.now()); // Prevent negative values

//     res.send(`Cookie expires in ${Math.ceil(remainingTime / 1000)} seconds.`);
// });

// // ✅ Clear the cookie manually
// app.get("/clear-cookie", (req, res) => {
//     res.clearCookie("sessionCookie");
//     res.send("Cookie cleared!");
// });

// app.listen(PORT, () => console.log(`Running on port ${PORT}`));


//Lesson 12
//Session
// sessionExample.js
// import express from "express";
// import session from "express-session";

// const app = express();
// const PORT = 3001;

// // ✅ Middleware to parse JSON & setup sessions
// app.use(express.json());
// app.use(session({
//     secret: "my-secret-key", // used to sign the session ID cookie
//     resave: false,           // don't save session if unmodified
//     saveUninitialized: true,// save new sessions
//     cookie: {
//         maxAge: 5 * 60 * 1000, // 5 minutes
//         httpOnly: true,        // client JS can't access it
//     }
// }));

// // ✅ Set session
// app.get("/login", (req, res) => {
//     req.session.user = "bharath";
//     res.send("Session started! Welcome, Bharath.");
// });

// // ✅ Get session
// app.get("/profile", (req, res) => {
//     if (req.session.user) {
//         res.send(`Hi ${req.session.user}, this is your profile page.`);
//     } else {
//         res.status(401).send("Unauthorized. Please log in.");
//     }
// });

// // ✅ Destroy session
// app.get("/logout", (req, res) => {
//     req.session.destroy(err => {
//         if (err) return res.status(500).send("Error logging out.");
//         res.clearCookie("connect.sid"); // default cookie name
//         res.send("Logged out successfully!");
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


//Lesson 13
//Password Hashing
// hashApp.js
import express from "express";
import bcrypt from "bcrypt";

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// 🧪 Simulated in-memory "database"
const fakeDB = {};

// 🔧 Number of salt rounds for hashing
const saltRounds = 10;

// ✅ Register Route
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (fakeDB[username]) {
        return res.status(409).send("Username already exists.");
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        fakeDB[username] = hashedPassword;

        res.status(201).send("✅ Registered successfully with hashed password.");
    } catch (error) {
        res.status(500).send("Error hashing password.");
    }
});

// ✅ Login Route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const storedHashedPassword = fakeDB[username];

    if (!storedHashedPassword) {
        return res.status(404).send("❌ User not found.");
    }

    try {
        const isMatch = await bcrypt.compare(password, storedHashedPassword);

        if (isMatch) {
            res.send("✅ Login successful!");
        } else {
            res.status(401).send("❌ Incorrect password.");
        }
    } catch (error) {
        res.status(500).send("Error verifying password.");
    }
});

// 🚀 Start server
app.listen(PORT, () => {
    console.log(`🔐 Server running on http://localhost:${PORT}`);
});
