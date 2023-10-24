import React from 'react';
import { useNavigate, Link} from  'react-router-dom'
import { useState, useEffect } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import EventCard from './EventCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jwt_decode from 'jwt-decode';

const EventPage = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([])
    const token = localStorage.getItem('userToken');

    if (!token) {
        navigate('/login')
    }

    const decodedToken = jwt_decode(token);
    const isAdmin = decodedToken.isAdmin; 
    console.log(token);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch('/Events');
            const data = await res.json();
            setEvents(data);
        };
        fetchEvents();
    }, [events]);
    console.log(events);
    return (
        <div>
            {isAdmin ? <button variant="primary"><Link to='/admin'>Admin Tools</Link></button> : ""}
            <h1 className='text-center'>Cape Events</h1>
            <h4 className='text-center'>Find the most exciting events and shows around Cape Town</h4>
            <CardGroup>
                <Container>
                    <Row className='mx-auto'>
                        {events && events.map(event => (
                            <Col md={6} key={event._id}>
                                <EventCard
                                    
                                    event={event}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </CardGroup>
        </div>
    );
}

export default EventPage;

