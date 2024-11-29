const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing application/json
app.use(express.static('public')); // Serve static files from 'public' folder

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/homeLearningHub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

// Define a Schema for the Learning Hub Content
const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  dateCreated: { type: Date, default: Date.now }
});

// Create a Model
const Content = mongoose.model('Content', contentSchema);

// Routes
// Get all content
app.get('/api/content', async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new content
app.post('/api/content', async (req, res) => {
  const { title, description, link } = req.body;
  const newContent = new Content({
    title,
    description,
    link,
  });

  try {
    const savedContent = await newContent.save();
    res.status(201).json(savedContent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
