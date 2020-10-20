import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import {FaSlack} from 'react-icons/fa';
import {AiFillPushpin, AiOutlinePushpin} from 'react-icons/ai';
import * as day from '../../utils/DateUtils'
import ReactTooltip from 'react-tooltip';
import './cards.css'

export default function SlackCard(props)
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
			<Card.Header className="font-weight-bold d-flex justify-content-between align-items-center">
				<div className="d-flex">
					<FaSlack className="mr-2" size={20} color={'#e01e5b'}/>
					<Card.Text>{props.info.channel}</Card.Text>
				</div>
				<div className="d-flex">
					<Card.Text className="m-0">{day.calendarTime(props.info.last_contact)}</Card.Text>
					<ReactTooltip place="top" effect="solid"/>
					{!isPinned && <AiOutlinePushpin size={20} className="ml-3" 
						onClick={() => pinResult(props.info.id)} data-tip="Pin"/>}
					{isPinned && <AiFillPushpin size={20} className='ml-3' 
						onClick={() => unpinResult(props.info.id)} data-tip = "Unpin"/>}
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>{props.info.author}</Card.Title>
				<Card.Text>{props.info.message}</Card.Text>
			</Card.Body>
        </Card>
    );
}