const mongoose = require("mongoose");

const UserSchema = new mongoose({
    name:{
        type: String,
        required: true
    },
    email:{
        type: email,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model("User", UserSchema);

module.exports= User;
