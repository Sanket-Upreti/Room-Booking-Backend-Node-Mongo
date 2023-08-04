const register = require("../models/register");

const checkTeamName = async (req, res) => {
    const { teamName } = req.body;
    try {
        const teamNameExists = await register.findOne({ teamName });
        if (!teamNameExists) {
             res
                .status(404)
                .json({ message: "The teamname doesn't exist" });
        }
        else{
            res.status(200).json({ teamName });
        }
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

module.exports = {
    checkTeamName
};
