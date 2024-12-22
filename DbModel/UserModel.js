import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    description: {type: String}
}, {timestamps: true});

const AllUser = mongoose.model('userdatas', UserSchema);

export default AllUser;