const Event = require('../models/eventModel');

//GET all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};    

//POST new events 
const addEvents = async (req, res) => {
    try {
        const { image, name, date, location, site} = req.body
        const newEvent = new Event({
            name: name,
            date: date,
            location: location,
            image: image,
            site: site
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//DELETE an event
const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        await Event.findByIdAndDelete(eventId);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
  
//UPDATE an event
const updateEvent = async (req, res) => {
    try {
        // const eventId = req.params._id;
        // const { name, date, image, location, site} = req.body;
        const event = await Event.findByIdAndUpdate(
            req.params._id,
            // { name, date, image, location, site},
            req.body,
            { new: true }
        );
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { addEvents, getAllEvents, updateEvent, deleteEvent};