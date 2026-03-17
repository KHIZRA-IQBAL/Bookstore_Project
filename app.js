const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();


app.use(express.json());


const bookRoutes = require('./routes/bookRoutes');


app.use('/books', bookRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected to Bookstore Database!"))
    .catch((err) => console.log("DB Connection Error:", err));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});