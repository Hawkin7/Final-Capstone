const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const app = express();
const PORT = 4000

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://hawkinspingies:RB4TfmFRUvgHZPRO@eventcluster.1ziduhg.mongodb.net/EventDatabase?retryWrites=true&w=majority', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true ,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error occurred while establishing a connection to MongoDB', err));

app.use('/users', userRoutes );
app.use('/events', eventRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
