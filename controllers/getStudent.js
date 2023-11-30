const Register = require("../models/student");

exports.allStudent = async(req,res) =>{
    try{
        const students = await Register.find({});

        res.status(200).json({
            success:true,
            data: students,
            message:"Entire Student data is fetched",
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:err.message,
        })
    }
}


exports.findStudentByRoll_no = async(req,res) =>{
    try{
            const roll_no = req.params.roll_no;
            const findByRoll_no = await Register.findOne({roll_no: roll_no});
            if(!findByRoll_no){
                return res.status(404).json({
                    sucess:false,
                    message:"No student found with that roll no",
                })
            }
            res.status(200).json({
                success: true,
                data:findByRoll_no,
                message: `Student ${roll_no} data sucessfully fetched.`
            })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:err.message,
        })
    }
}