import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import mongoose from "mongoose";
import dotenv from "dotenv";
import {Admin} from "../models/admin.model.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

const admin = new Admin({
  username: "superadmin",
  email: "admin@123.com",
  password: "123"
});
await admin.save();
console.log("✅ Admin created successfully");
process.exit();
