import React from 'react';
import {Card} from 'react-bootstrap';
import {FaSlack} from 'react-icons/fa';
import './cards.css'

export default function SlackCard()
{
    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <FaSlack className="mr-2" size={22} color={'#e01e5b'}/>
                <Card.Text>Slack Channel</Card.Text>
            </div>
            <Card.Text>Card Date</Card.Text>
        </Card.Header>
        <Card.Body>
            <Card.Title>Author</Card.Title>
            <Card.Text>Message</Card.Text>
        </Card.Body>
        </Card>
    );
}