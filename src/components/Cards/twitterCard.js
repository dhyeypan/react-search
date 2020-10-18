import React from 'react';
import {Card} from 'react-bootstrap';
import {FaTwitter} from 'react-icons/fa';
import './cards.css'

export default function TwitterBoxCard()
{
    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <FaTwitter className="mr-2" size={22} color={'#00acee'}/>
                <Card.Text>Twitter Username</Card.Text>
            </div>
            <Card.Text>Card Date</Card.Text>
        </Card.Header>
        <Card.Body>
            <Card.Text>
            Tweet
            </Card.Text>
        </Card.Body>
        </Card>
    );
}