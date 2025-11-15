console.log('Github push test yayay7ayaya');

require("dotenv").config();
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error("Mongo error:", err));

// //must be unique, so cant enter same email
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });


//next get the hashing to work and convert user scheme into model