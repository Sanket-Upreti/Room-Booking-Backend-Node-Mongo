const mongoose = require("mongoose");

// creating register schema(column) for booking of rooms
const RoomBookSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true,
        trim: true,
    },
    from: {
        type: Date,
        trim: true,
        default: Date.now
    },
    to: {
        type: Date,
        trim: true,
        default: Date.now
    },
    agenda: {
        type: mongoose.Schema.Types.Mixed,
        trim: true,
        required: true,
        maxlength: [150, "name can not be more than 150 characters"],
    },
    members: {
        type: Array,
        trim: true,
        required: true,
        lowercase: true,
    },
    facilities: {
        type: Array,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    }
});
  
module.exports = mongoose.model('bookRoom', RoomBookSchema);

