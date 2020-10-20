import React, { useEffect, useState } from 'react';
import ContactsCard from '../Cards/contactsCard';
import CalendarCard from '../Cards/calendarCard';
import SlackCard from '../Cards/slackCard';
import TwitterCard from '../Cards/twitterCard';
import DropBoxCard from '../Cards/dropboxCard';
import { Button } from 'react-bootstrap';
import {animateScroll as scroll} from 'react-scroll';

let answer = [];

export default function SearchResults(props){
    const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);

	function handlePin() {
		props.pinUpdate();
	}

    useEffect(() => {
		setLoading(true);
		let initialPath = "./acme-search/";
		let categories = [
			"slack",
			"calendar",
			"contacts",
			"tweet",
			"dropbox"
		];
		let res = [];
		
		for(let category of categories) 
		{  
			
            if(props[category] === false)
                continue;
			fetch(initialPath+category+".json")
			.then((response) => response.json())
			.then((data) => {
				// if(j === 5)
				// 	setLoading(false);
				if(props.query.length!==0){
					let query_string = props.query.val.toLowerCase();
					let query_terms = query_string.split(" ");
					for(let i = 0;i<data[category].length;i++)
					{
						let count = 0;
						let matching_terms = data[category][i].matching_terms;
						
						for(let word of query_terms)
						{
							for(let term of matching_terms){
								if(word === term){
									count++;
									break;
								}
							}
						}
						if(count>0){
							data[category][i]["count"] = count;
							data[category][i]["searchCategory"] = category;
							res.push(data[category][i]);
						}
					}
					res.sort((a,b) => b["count"]-a["count"]);
				}
			  })
		}
		answer = res;
		
		setTimeout(function(){
			setLoading(false);
			setResults(res);
		}, 100);

		

	}, [props.query, props.tweet, props.dropbox, props.calendar, props.contacts, props.slack]);
	
    if(props.query === "")
    	return null;
    else{
		if(loading) {
			return(<p style={{fontSize : 24, color: "#fffdf5"}} className="text-center font-weight-bold mt-5">Loading...</p>)
		}
		
		if(results.length === 0) {
			return(<p style={{fontSize : 24}} className="text-center font-weight-bold mt-5">Sorry, there were no matching results!</p>);
		}

		let cards = [];
		let pinnedCards = [];
		let displayResults = answer;
	
		for(let i = 0; i < displayResults.length; i++) {
			if(localStorage.getItem(displayResults[i].id) !== null) {
				if (displayResults[i].searchCategory === "contacts") {
					pinnedCards.push(<ContactsCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
				} else if (displayResults[i].searchCategory === "calendar") {
					pinnedCards.push(<CalendarCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
				} else if (displayResults[i].searchCategory === "dropbox") {
					pinnedCards.push(<DropBoxCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
				} else if (displayResults[i].searchCategory === "slack") {
					pinnedCards.push(<SlackCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
				} else if (displayResults[i].searchCategory === "tweet") {
					pinnedCards.push(<TwitterCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
				}
			}
			else if (displayResults[i].searchCategory === "contacts") {
				cards.push(<ContactsCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
			} else if (displayResults[i].searchCategory === "calendar") {
				cards.push(<CalendarCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
			} else if (displayResults[i].searchCategory === "dropbox") {
				cards.push(<DropBoxCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
			} else if (displayResults[i].searchCategory === "slack") {
				cards.push(<SlackCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
			} else if (displayResults[i].searchCategory === "tweet") {
				cards.push(<TwitterCard info = {displayResults[i]} key={i} pin={() => handlePin()}/>);
			}
		}

		let len = pinnedCards.length + cards.length;
		
        return(
			<div style={{backgroundColor: '#fffdf5'}}>
				{pinnedCards}
				{cards}
				<div className="text-center">
				{(len >= 3) && <Button 	className="text-center mb-5 backToTop" 
										onClick={() => {scroll.scrollToTop({behavior: "smooth"});}}
										style={{backgroundColor: "#415aff", color: "#fffdf5"}}> 
								Back to Top 
								</Button>}
				</div>
				
			</div>
		);
	}
}