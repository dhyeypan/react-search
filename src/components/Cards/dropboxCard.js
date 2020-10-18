import React from 'react';
import {Card} from 'react-bootstrap';
import {FaDropbox} from 'react-icons/fa';
import './cards.css'

export default function DropBoxCard()
{
    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <FaDropbox className="mr-2" size={22} color={'#3d9ae6'}/>
                <Card.Text>Dropbox Card Title</Card.Text>
            </div>
            <Card.Text>Card Date</Card.Text>
        </Card.Header>
        <Card.Body>
            <Card.Text>
            Shared With 
            </Card.Text>
        </Card.Body>
        </Card>
    );
}