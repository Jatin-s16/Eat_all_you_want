import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "Must conatin more than 3 characters!"],
        maxlength: [30, "Must not exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Must conatin more than 3 characters!"],
        maxlength: [30, "Must not exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "Must conatin 10 digits!"],
        maxlength: [10, "Must conatin 10 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);