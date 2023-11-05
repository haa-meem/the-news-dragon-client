import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import firstImage from '../../../assets/1.png'
import secondImage from '../../../assets/2.png'
import thirdImage from '../../../assets/3.png'

const Cards = () => {
    return (
        <Row xs={1} md={2} lg={1} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={firstImage} />
                    <Card.Body>
                        <Card.Title>Our First Home</Card.Title>
                        <Card.Text>
                            A heartwarming moment as a girl holds a board that says "Our First Home." Share in the joy of creating new memories.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={secondImage} />
                    <Card.Body>
                        <Card.Title>Selfie with Friends</Card.Title>
                        <Card.Text>
                            Capture the fun times with friends in a memorable selfie. Create lasting memories with those who matter the most.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={thirdImage} />
                    <Card.Body>
                        <Card.Title>Camera Focusing on Stadium</Card.Title>
                        <Card.Text>
                            Witness the excitement as the camera focuses on a bustling stadium. Feel the energy of the crowd and the thrill of the event.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Cards;
