//bXDYOUupG67uuIsC

import express, { Express } from 'express';
import mongoose from 'mongoose';
import financialRecordRouter from './routes/financial-records';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI : string = "mongodb+srv://aman29shukla:bXDYOUupG67uuIsC@personalfinancetracker.4wpyrei.mongodb.net/"

mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use("/financial-records", financialRecordRouter); // ✅ Correct

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
