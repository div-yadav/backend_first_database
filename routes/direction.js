const express = require("express");
const router = express.Router();

const {deletion} = require("../controllers/delete");
const {allStudent, findStudentByRoll_no} = require("../controllers/getStudent");
const {registration} = require("../controllers/register");
const {updateData} = require("../controllers/update");
const { getAllStudents } = require("../controllers/studentController");


router.post("/register",registration);
router.get("/getStudent",allStudent);
router.get("/getStudentByRoll_no/:roll_no",findStudentByRoll_no);
router.put("/updateData", updateData);
router.delete("/delete/:roll_no", deletion);
router.get("/students", getAllStudents);


module.exports = router;