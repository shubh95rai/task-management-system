import mongoose from "mongoose";

async function connectToDB() {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => {
      console.log("Error connecting to MongoDB:", err);
      process.exit(1);
    });
}

export default connectToDB;
