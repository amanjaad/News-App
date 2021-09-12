import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://AmanJaad:qwerty123@inshorts.hegvv.mongodb.net/INSHORTS-CLONE?retryWrites=true&w=majority";
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};
export default Connection;
