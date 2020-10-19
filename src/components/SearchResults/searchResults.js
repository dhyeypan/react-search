import React, { useEffect, useState } from 'react';
import ContactsCard from '../Cards/contactsCard';
import CalendarCard from '../Cards/calendarCard';
import SlackCard from '../Cards/slackCard';
import TwitterCard from '../Cards/twitterCard';
import DropBoxCard from '../Cards/dropboxCard';

let answer = [];

export default function SearchResults(props){
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // useEffect(() => {
    //     setQuery(props.query);
	// }, []);
	
    useEffect(() => {
		let initialPath = "./acme-search/";
		let categories = [
			"slack",
			"calendar",
			"contacts",
			"dropbox",
			"tweet"
		];
		let res = [];
		for(let category of categories) 
		{
			fetch(initialPath+category+".json")
			.then((response) => response.json())
			.then((data) => {
				if(props.query.length!=0){
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
							console.log(res.length);
						}
					}
					res.sort((a,b) => b["count"]-a["count"]);
				}
  			})
		}
		answer = res;
		
		setTimeout(function(){
			setResults(res);
			console.log(results.length); // array length is 3 - after two seconds
		 }, 100);
		// console.log(answer);
	}, [props.query]);
	
	
    // if(props.query === "")
    // 	return null;
    // else{
		let cards = [];
		let displayResults = answer;
		console.log(answer);
		console.log(answer.length);
		for(let i = 0; i < displayResults.length; i++) {
			if (displayResults[i].searchCategory === "contacts") {
				cards.push(<ContactsCard info = {displayResults[i]} key={i}/>);
			} else if (displayResults[i].searchCategory === "calendar") {
				cards.push(<CalendarCard info = {displayResults[i]} key={i}/>);
			} else if (displayResults[i].searchCategory === "dropbox") {
				cards.push(<DropBoxCard info = {displayResults[i]} key={i}/>);
			} else if (displayResults[i].searchCategory === "slack") {
				cards.push(<SlackCard info = {displayResults[i]} key={i}/>);
			} else if (displayResults[i].searchCategory === "tweet") {
				cards.push(<TwitterCard info = {displayResults[i]} key={i}/>);
			}
			else{
				console.log("Hi");
			}
		}
		
        return(
			<div>
				{cards}
			</div>
		);//}
}