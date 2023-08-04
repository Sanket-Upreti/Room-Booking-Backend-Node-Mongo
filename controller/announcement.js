const announcementStore = require("../models/announcement.js");

// storing announcment from a team
const announceToAll = async (req, res) => {
    try {
        const announcements = await announcementStore.create(req.body);
        res.status(200).json({ announcements });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

module.exports = {
    announceToAll,
};
