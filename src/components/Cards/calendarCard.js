import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import {SiGooglecalendar} from 'react-icons/si';
import {AiFillPushpin, AiOutlinePushpin} from 'react-icons/ai';
import './cards.css'

export default function CalendarCard(props)
{
	const [isPinned, setIsPinned] = useState(localStorage.getItem(props.info.id)!==null);

	function pinResult(id) {
		setIsPinned(true);
		localStorage.setItem(props.info.id, props.info);
		props.pin();
	}

	function unpinResult(id) {
		setIsPinned(false);
		localStorage.removeItem(props.info.id);
		props.pin();
	}

    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <SiGooglecalendar className="mr-2" size={22} color={'#57bc90'}/>
				<Card.Text>{props.info.title}</Card.Text>
            </div>
			<div className="d-flex">
				<Card.Text className="m-0">{props.info.date}</Card.Text>
				{!isPinned && <AiOutlinePushpin size={20} className="ml-3" 
						onClick={() => pinResult(props.info.id)} />}
				{isPinned && <AiFillPushpin size={20} className='ml-3' 
					onClick={() => unpinResult(props.info.id)}/>}
			</div>
        </Card.Header>
        <Card.Body>
            <Card.Text>Invitees: {props.info.invitees}</Card.Text>
        </Card.Body>
        </Card>
    );
}