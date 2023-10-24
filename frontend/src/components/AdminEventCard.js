import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


//Component to manage the structure of the cards displayed on the admin page 
const AdminEventCard = ({ event , deleteEvent, editEvent  }) => {
    return (
        <div>
            <Card className='event-card text-center'>
                <Col>
                    <Card.Img src={event.image} className="card-img-top" alt={event.name} />
                    <Card.Body>
                        <Card.Title className="card-title"> {event.name} </Card.Title>
                        <Card.Text className="card-text text-center">{event.date}</Card.Text>
                        <Card.Text className="card-text">{event.location}</Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                        <Button variant='dark outline-light' className='dark outline-light admin-card-button' onClick={() => deleteEvent(event._id)}>Delete</Button>
                        <Button variant='dark outline-light' className='admin-card-button' href={event.site}> Visit </Button>
                        <Button variant='dark outline-light' className='dark outline-light admin-card-button' onClick={() => editEvent(event)}>Edit</Button>          
                    </Card.Footer>            
                </Col>
            </Card>
        </div>
    );
}

export default AdminEventCard;
