const mongoose = require("mongoose");

// collection schema(columns) for table announcement
const AnnouncementSchema = new mongoose.Schema({
    announcement: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        maxlength: [150, "name can not be more than 150 characters"],
    },
    announcer:{
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true,
    }
});
  
module.exports = mongoose.model('announcement', AnnouncementSchema);

