import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import {FaSlack} from 'react-icons/fa';
import {AiFillPushpin, AiOutlinePushpin} from 'react-icons/ai';
import './cards.css'

export default function SlackCard(props)
{
	const [isPinned, setIsPinned] = useState(localStorage.getItem(props.info.id)!==null);

	function pinResult(id) {
		setIsPinned(true);
		localStorage.setItem(props.info.id, props.info);
	}

	function unpinResult(id) {
		setIsPinned(false);
		localStorage.removeItem(props.info.id);
	}

    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
			<Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
				<div className="d-flex">
					<FaSlack className="mr-2" size={22} color={'#e01e5b'}/>
					<Card.Text>{props.info.channel}</Card.Text>
				</div>
				<div className="d-flex">
					<Card.Text>{props.info.timestamp}</Card.Text>
					{!isPinned && <AiOutlinePushpin size={20} className="ml-3" 
						onClick={() => pinResult(props.info.id)} />}
					{isPinned && <AiFillPushpin size={20} className='ml-3' 
						onClick={() => unpinResult(props.info.id)}/>}
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>{props.info.author}</Card.Title>
				<Card.Text>{props.info.message}</Card.Text>
			</Card.Body>
        </Card>
    );
}