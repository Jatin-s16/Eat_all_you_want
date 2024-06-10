import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "Restaurant_App",
    })
    .then(() => {
        console.log("Connected to Database successfully");
    })
    .catch((err) => {
        console.log(`Some error occured while connecting to database! ${err}`);
    });
};