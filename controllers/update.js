const Register = require("../models/student");

exports.updateData = async (req, res) => {
    try {
        const { roll_no } = req.body;

        if (!roll_no) {
            return res.status(400).json({
                success: false,
                message: "Roll number is required for updating student data.",
            });
        }

        const updatedData = await Register.findOneAndUpdate(
            { roll_no: roll_no },
            req.body,
            { new: true }
        );

        if (!updatedData) {
            return res.status(404).json({
                success: false,
                message: `No student found with roll number ${roll_no}.`,
            });
        }

        res.status(200).json({
            success: true,
            data: updatedData,
            message: `Student with roll number ${roll_no} updated successfully.`,
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
