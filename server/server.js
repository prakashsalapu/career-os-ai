const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const connectDB = require("./database/db");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Passport config
require("./config/passport");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("CareerOS Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});