const express = require('express')
const router = express.Router()

const { addEvents, getAllEvents, deleteEvent, updateEvent} = require('../controllers/eventController')

//GET all of the events 
router.get('/', getAllEvents);

//POST a new event
router.post('/', addEvents);

//DELETE an event
router.delete('/:id', deleteEvent);

//UPDATE an event
router.put('/:id', updateEvent);

module.exports = router