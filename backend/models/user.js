import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({

    UID: {
        type: String,
        required: true,
    },
    smartCardID: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },

})

export default mongoose.model("User", userSchema);