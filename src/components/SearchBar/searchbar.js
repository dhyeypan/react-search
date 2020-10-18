import React, { useState } from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
// import {Text} from
import {SiGooglecalendar} from 'react-icons/si';
import {FaSlack, FaDropbox, FaTwitter} from 'react-icons/fa';
import {RiContactsFill} from 'react-icons/ri';
import './searchbar.css'


export default function SearchBar(props) {
    const[query, setQuery] = useState("");
    // console.log("Nav");    
    return( 
        <Navbar expand="lg" className="mainSearchBar my-auto">
            <p className="titleText">Acme Search</p>
            <Form inline className="mx-auto searchForm">
                <div>
                <FormControl 
                    type="text" 
                    placeholder="Enter search query.." 
                    className="mr-2 searchBox" 
                    onChange={e => setQuery({ val: e.target.value })}
                    onKeyDown={e => {
                        if(e.key === "Enter"){
                            e.preventDefault(); 
                            // console.log("Hi");
                            props.getQuery(query);
                        } 
                    }}
                />
                <Button variant="outline-light" onClick={() => props.getQuery(query)}>Search</Button>
                </div>  
                <div className="searchFilters mx-auto mt-5">
                    <div className="checkBoxFilter px-3">
                    <Form.Check checked={true} /><SiGooglecalendar color="white" size={24}/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    <Form.Check checked={true}/><FaTwitter color="white" size={24}/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    <Form.Check checked={true}/><FaSlack color="white" size={24}/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    <Form.Check checked={true}/><FaDropbox color="white" size={24}/>
                    </div>
                    <div className="checkBoxFilter px-3">
                    <Form.Check checked={true}/><RiContactsFill color="white" size={24}/>
                    </div>
                </div>
            </Form>
        </Navbar>);
   
}
