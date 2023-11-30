// controllers/studentController.js

const Register = require("../models/student");

exports.getAllStudents = async (req, res) => {
  try {
    // Parse query parameters for pagination
    const page = req.query.page || 0; // Current page
    const pageSize = 3; // Number of items per page

    // Calculate the skip value for pagination
    const skip = page * pageSize;

    // Fetch students using pagination
    const students = await Register.find({})
      .skip(skip)
      .limit(pageSize);

    res.status(200).json({
      success: true,
      data: students,
      message: `Page ${page} with ${pageSize} students fetched successfully.`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: err.message,
    });
  }
};
