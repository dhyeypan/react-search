import React from 'react';
import {Card} from 'react-bootstrap';
import {FaTwitter} from 'react-icons/fa';
import './cards.css'

export default function TwitterCard(props)
{
    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <FaTwitter className="mr-2" size={22} color={'#00acee'}/>
                <Card.Text>{props.info.user}</Card.Text>
            </div>
            <Card.Text>{props.info.timestamp}</Card.Text>
        </Card.Header>
        <Card.Body>
            <Card.Text>
            {props.info.message}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}