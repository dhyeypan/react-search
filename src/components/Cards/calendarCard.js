import React from 'react';
import {Card} from 'react-bootstrap';
import {SiGooglecalendar} from 'react-icons/si';
import './cards.css'

export default function CalendarCard(props)
{
    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <SiGooglecalendar className="mr-2" size={22} color={'#57bc90'}/>
				<Card.Text>{props.info.title}</Card.Text>
            </div>
            <Card.Text>{props.info.date}</Card.Text>
        </Card.Header>
        <Card.Body>
            <Card.Text>Invitees: {props.info.invitees}</Card.Text>
        </Card.Body>
        </Card>
    );
}