import ErrorHandler from "../error/error";
import { Reservation } from "../models/reservationSchema";

export const sendReservation = async(req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if( !firstName || !lastName || !email || !phone || !time || !date ){
        return next(new ErrorHandler("Please fill out the entire form", 400))
    }
};