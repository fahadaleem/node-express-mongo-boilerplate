const cors = require("cors");
const express = require("express");
const database = require("./configs/database");
const handleServerError = require("./middlewares/errorMiddlewares");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Use the cors
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Use the auth routes
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use(handleServerError);

// Start the server
app.listen(PORT, () => {
  console.log(`app listens at port ${PORT}`);
});
