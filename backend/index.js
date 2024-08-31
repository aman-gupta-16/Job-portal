import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDb from "./utils/db.js";
import userRouter from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";
import applicantRouter from "./routes/application.route.js";

const PORT = process.env.PORT || 3000;
const corsOption = {
  origin: "https://jobvikas.onrender.com",
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.static("public"));

//routes
app.use("/user", userRouter);
app.use("/company", companyRouter);
app.use("/job", jobRouter);
app.use("/application", applicantRouter);

app.listen(PORT, () => {
  connectDb();
  console.log("Server is running on port 8000");
});
