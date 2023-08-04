const register = require("../models/register");
const { createJWT } = require('../utils');

const postUser = async (req, res) => {
    const { teamName } = req.body 
    try {
        const checkForTeamName = await register.findOne({teamName});
        if(!checkForTeamName){
            req.body.role = "admin";
        }
        const registerUser = await register.create(req.body);
        res.status(200).json({ user: registerUser });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

module.exports = {
    postUser
};
