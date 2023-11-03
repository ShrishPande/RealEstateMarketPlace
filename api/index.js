import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

dotenv.config();

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connected to DB");
})
.catch((err) => {
  console.log(err);
});

const app = express();
app.use(express.json())

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)