const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const Item = require("./Models/item");

const port = process.env.PORT;

// Use the cors middleware to enable CORS
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());

// // Define a route to fetch items
// app.get("/api/items", async (req, res) => {
//   try {
//     const items = await Item.find(); // Fetch all items
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // POST route to create an item
// app.post("/api/items", async (req, res) => {
//   try {
//     // Create a new item based on the data sent from the frontend
//     const newItem = new Item({
//       name: req.body.name,
//       description: req.body.description,
//       rating: req.body.rating,
//       projects: req.body.projects,
//       experience: req.body.experience,
//       price: req.body.price,
//       mobiles: req.body.mobiles,
//     });
//     // Save the new item to the MongoDB database
//     await newItem.save();

//     res.status(201).json(newItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // DELETE route to delete an item
// app.delete("/api/items/:itemId", async (req, res) => {
//   try {
//     const item = await Item.findOneAndDelete({ _id: req.params.itemId });

//     if (!item) {
//       return res.status(404).json({ error: "Item not found" });
//     }
//     return res.status(204).end(); // Respond with 204 (No Content) on success
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
