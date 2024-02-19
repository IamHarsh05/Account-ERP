const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const companyRoutes = require('./Routes/companyRoutes');

const port = process.env.PORT;

// Use the cors middleware to enable CORS
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());

// // Define a route 
// Use companyRoutes for '/api' route
app.use('/api', companyRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
