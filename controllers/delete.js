const Register = require("../models/student");

exports.deletion = async(req,res) =>{
    try{
        const {roll_no} = req.params;
        await Register.findOneAndDelete({roll_no: roll_no});
        res.json({
            success:true,
            message:"Student Data removed."
        })
    }
    catch(err){
        console.error(err);
        response.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:err.message,
        })
    }
}