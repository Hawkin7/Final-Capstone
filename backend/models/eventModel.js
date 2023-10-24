const mongoose = require('mongoose');
//Schema for the events
const EventSchema = new mongoose.Schema({
  name: String,
  date: String,
  location: String,
  image: String,
  site: String
});

module.exports = mongoose.model('Event', EventSchema);
