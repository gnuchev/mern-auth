import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        // The email must be unique
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        // The password must be at least 6 characters long
        // minlength: 6,
    },
},
{
    timestamps: true,
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        // If the password is not modified, call next()
        next();
    }
    // If the password is modified, hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    // Compare the entered password with the hashed password
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;