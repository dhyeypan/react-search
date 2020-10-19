import React from 'react';
import {Card} from 'react-bootstrap';
import {RiContactsFill} from 'react-icons/ri';
import * as day from  '../../utils/DateUtils';
import './cards.css'

export default function ContactsCard(props)
{
    let phones="";
    for(let i = 0;i<props.info.phones.length;i++)
    {
        phones+=props.info.phones[i]+"," + " ";
    }
    let emails="";
    for(let i = 0;i<props.info.emails.length;i++)
    {
        emails+=props.info.emails[i]+"," + " ";
    }

    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
            <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
                <div className="d-flex">
                    <RiContactsFill className="mr-2" size={22} color={'#f6b128'}/>
                    <Card.Text>{props.info.name}</Card.Text>
                </div>
                <Card.Text>{day.timeago(props.info.last_contact)} </Card.Text>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.info.company}</Card.Title>
                <Card.Text>
                    Phones: {phones.substring(0, phones.length-2)}
                </Card.Text>
                <Card.Text>Emails : {emails.substring(0, emails.length-2)}</Card.Text>
            </Card.Body>
        </Card>
    );
}