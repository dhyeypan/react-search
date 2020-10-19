import React from 'react';
import {Card} from 'react-bootstrap';
import {FaDropbox} from 'react-icons/fa';
import './cards.css'

export default function DropBoxCard(props)
{
    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <FaDropbox className="mr-2" size={22} color={'#3d9ae6'}/>
                <Card.Text>{props.info.title}</Card.Text>
            </div>
            <Card.Text>{props.info.created}</Card.Text>
        </Card.Header>
        <Card.Body>
            <Card.Text>
            {props.info.path}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}