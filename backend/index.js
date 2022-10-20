const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Connect database
connectDB();
// Parsing data as json
app.use(express.json())

// Cors init
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use('/data', require("./routes/userRoutes"));
const PORT = process.env.PORT || 5001;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
