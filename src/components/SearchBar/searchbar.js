import React, { useEffect, useRef, useState } from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import {SiGooglecalendar} from 'react-icons/si';
import {FaSlack, FaDropbox, FaTwitter} from 'react-icons/fa';
import {RiContactsFill} from 'react-icons/ri';
import  ReactTooltip from 'react-tooltip';
import './searchbar.css'

export default function SearchBar(props) {
    const[query, setQuery] = useState("");
	const inputRef = useRef();

    return( 
        <Navbar  className="mainSearchBar my-auto">
            <p className="mainTitleText">Acme Search</p>
            <Form inline className="mx-auto searchForm">
                <div>
					<FormControl 
						type="text" 
						placeholder="Enter search query.." 
						className="mr-2 searchBox" 
						onChange={e => {
							setQuery({ val: e.target.value });
						}}
						onKeyDown={e => {
							if(e.key === "Enter"){
								e.preventDefault(); 
								props.getQuery(query);
							} 
						}}
						ref = {inputRef}
					/>
					<Button variant="outline-light" onClick={() => props.getQuery(query)}>Search</Button>
					<Button className="ml-2"variant="outline-light" onClick={
						() => {
							setQuery("");
							inputRef.current.value = "";
							props.resetEverything();
						}
					}>
						Clear
					</Button>
                </div>  
                <div className="searchFilters mx-auto mt-5">
				<ReactTooltip place="top" effect="solid"/>
                    <div className="checkBoxFilter px-3">
                    	<Form.Check checked={props.checkedCalendar} onClick={props.calendarChange} /><SiGooglecalendar color="white" size={24} data-tip="Calendar"/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    	<Form.Check checked={props.checkedTwitter} onClick={props.twitterChange} /><FaTwitter color="white" size={24} data-tip="Twitter"/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    	<Form.Check checked={props.checkedSlack} onClick={props.slackChange}/><FaSlack color="white" size={24} data-tip="Slack"/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    	<Form.Check checked={props.checkedDropbox} onClick={props.dropboxChange}/><FaDropbox color="white" size={24} data-tip="Dropbox"/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    	<Form.Check checked={props.checkedContacts} onClick={props.contactsChange}/><RiContactsFill color="white" size={24} data-tip="Contacts"/>
                    </div>
                </div>
            </Form>
        </Navbar>);
   
}
