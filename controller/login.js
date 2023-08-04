const register = require("../models/register");

//posting login credential then giving out JWT token for validating login creds 
const postLogin = async (req, res) => {
    const {userName, password, role} = req.body

    if(!userName || !password){
        return res.status(400).json({message: "Bad request"})
    }
    
    const correctUser = await register.findOne({userName})
    
    if(!correctUser){
        return res.status(401).json({message: "Invalid credentials"})
    }
    
    const isRightPassword = await register.bcrypt.compare(password, this.password)
    
    if(!isRightPassword){
        return res.status(401).json({message: "Invalid credentials"})
    }
    const tokenUser = {userName: registerUser.userName, userId: registerUser._id, role: registerUser.role }
    const token = createJWT({payload: tokenUser, token})
    res.cookie('token', token, {
        httpOnly: true,
        expires: newDate(Date.now() + (1000*60*60*24)),
        secure: process.env.MEETING_ENV === "production",
        signed: true
    })
    res.status(200).json({ user: tokenUser });
};

module.exports = {
    postLogin
};
