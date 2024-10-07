const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/soiree';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Define a route to handle registration
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(200).send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred during registration. Please try again.');
    }
});

// Serve static files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
