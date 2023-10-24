import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

//Component to manage the structure of the cards displayed on the main page 
const EventCard = ({ event }) => {
    return (
        <div>
            <Card className='event-card text-center'>
                <Col>
                    
                    <Card.Body>

                        <Card.Img src={event.image} className="card-img-top" alt={event.name} />
                        <Card.Title className="card-title my-1"> {event.name} </Card.Title>
                        <Card.Text className="card-text">{event.date}</Card.Text>
                        <Card.Text className="card-text">{event.location}</Card.Text>

                    </Card.Body>
                    <Card.Footer>

                    <Button variant='dark outline-light' className='admin-card-button' href={event.site}> Visit </Button>

                    </Card.Footer>            
                </Col>
            </Card>
        </div>
    );
}

export default EventCard;
