const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Name can not exceed 30 character'],
        minLength: [4, 'Name must be atleast 4 character']
    },
    email:{
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [8, 'Password length should be greater than 8 characters'],
        select: false
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
})

userSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
})

//JWT Token
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

// Compare password
userSchema.methods.comaparePassword = async function(enteredPassword){
    return bcrypt.compare(enteredPassword, this.password)
}

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15*60*1000;
  
    return resetToken;
  };

module.exports = mongoose.model('User', userSchema)