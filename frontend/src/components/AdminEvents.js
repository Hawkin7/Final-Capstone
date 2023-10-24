import React, { useState, useEffect } from "react";
import EventForm from "./EventForm";
import AdminEventCard from "./AdminEventCard";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const AdminEvents = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    //Routes the user back to the login page if the user has not signed in or does not have admin permissions
    const navigate = useNavigate();
    const token = localStorage.getItem('userToken');
    if (!token) {
        navigate('/login')
    }
    const decodedToken = jwt_decode(token);
    const isAdmin = decodedToken.isAdmin; 
    console.log(token);

    if (!isAdmin) {
        navigate('/login')
    }

    //Fetches all of the events from the database
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch("/events");
            const data = await response.json();
            setEvents(data);
        }
        fetchEvents();
    }, []);

    //Deletes a user based on their id
    const deleteEvent = async (eventId) => {
        await fetch(`/events/${eventId}`, {
            method: 'DELETE',
        })
        setEvents(events.filter(event => event._id !== eventId));       
    };

    //Edits certain event elements 
    const editEvent = (event) => {
        setEditingEvent(event);
    };

    //Handles creating new events and updating old ones, when submitting a new one if it doesnt exist, a new one is created. 
    //if it does already exist it is edited and updated
    const handleEventFormSubmit = async (event) => {
        console.log("Editing Event:", editingEvent);
        setEditingEvent(null); 
        if (event._id) {
            // if editing an existing event, update it
            const response = await fetch(`/events/${event._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(event)
            })
            const data = await response.json();
            
            setEvents(events.map(e => e._id === event._id ? data : e)); 
        } else {
            // if creating a new event, add it
            const response = await fetch("/events", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(event)
            })
            const data = await response.json();
            setEvents(prevEvents => [...prevEvents, data]); 
        }
    };

    return (
        <div className="event-list">
            <h1 className="text-center my-2">Admin Event Panel</h1>
            <EventForm onSubmit={handleEventFormSubmit} event={editingEvent} />
            <CardGroup>
                <Container>
                    <Row className='mx-auto'>
                        {events && events.map(event => (
                            <Col md={6} key={event._id}>
                                <AdminEventCard event={event} deleteEvent={deleteEvent} editEvent={editEvent} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </CardGroup>        
        </div>
    );
};

export default AdminEvents;
