const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// creating register schema(column) for registration of user 
const RegisterSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: mongoose.Schema.Types.Mixed,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        maxlength: [20, "name can not be more than 20 characters"],
    },
    teamName: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        maxlength: [20, "name can not be more than 20 characters"],
    },
    password: {
        type: String,
        required: true,
    },
    termAndCondition: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        default: 'attendee'
    }
});

// Hash the password before saving it to the database
RegisterSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (error) {
      return next(error);
    }
  });
  
  // Method to compare the password provided during login with the hashed password in the database
  RegisterSchema.methods.comparePassword = async function (candidatePassword) {
    try {
      return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
      return false;
    }
  };
  
module.exports = mongoose.model('register', RegisterSchema);

