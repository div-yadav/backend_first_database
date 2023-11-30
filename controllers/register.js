const Register = require("../models/student");

exports.registration = async(req,res) =>{
    try{
        const{name,roll_no,mobile_no,address} = req.body;
        const response = await Register.create({name,roll_no,mobile_no,address});
        res.status(200).json({
            success:true,
            data: response,
            message: "Registration Successfull"
        });
    }
    catch(err){
        res.status(500).json({
                success:false,
                data:"Internal Server error",
                message: err.message
        })
        console.log(err);
    }
}