import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import {FaDropbox} from 'react-icons/fa';
import {AiFillPushpin, AiOutlinePushpin} from 'react-icons/ai';
import * as day from '../../utils/DateUtils'
import './cards.css'

export default function DropBoxCard(props)
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

	let sharedWith="";
    for(let i = 0;i<props.info.shared_with.length;i++)
    {
        sharedWith+=props.info.shared_with[i]+"," + " ";
    }

    return(
        <Card className="dropBoxCard mt-3 mx-auto shadow-sm">
        <Card.Header className="font-weight-bold d-flex justify-content-between align-content-center">
            <div className="d-flex">
                <FaDropbox className="mr-2" size={22} color={'#3d9ae6'}/>
                <Card.Text>{props.info.title}</Card.Text>
            </div>
			<div className="d-flex">
				<Card.Text className="m-0">Created on {day.dropboxTime(props.info.created)}</Card.Text>
				{!isPinned && <AiOutlinePushpin size={20} className="ml-3" 
						onClick={() => pinResult(props.info.id)} />}
				{isPinned && <AiFillPushpin size={20} className='ml-3' 
					onClick={() => unpinResult(props.info.id)}/>}
			</div>
            
        </Card.Header>
        <Card.Body>
            <Card.Text>
            Path: {props.info.path}
            </Card.Text>
			<Card.Text>
				Shared With: {sharedWith.substring(0, sharedWith.length-2)}
			</Card.Text>
        </Card.Body>
        </Card>
    );
}