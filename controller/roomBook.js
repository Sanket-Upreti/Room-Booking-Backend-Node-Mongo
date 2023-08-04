const bookRoomSchema = require("../models/roomBook");

// booking a room with data from a team
const bookMeetingRoom = async (req, res) => {
    try {
        const bookRoom = await bookRoomSchema.create(req.body);
        res.status(200).json({ message: success, bookRoom });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

module.exports = {
    bookMeetingRoom,
};
