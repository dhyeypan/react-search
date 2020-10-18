import React, { useEffect, useState } from 'react';
import ContactsCard from '../Cards/contactsCard';
import CalendarCard from '../Cards/calendarCard';
import SlackCard from '../Cards/slackCard';
import TwitterCard from '../Cards/twitterCard';
import DropBoxCard from '../Cards/dropboxCard';

export default function SearchResults(props){
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        setQuery(props.query);
	}, []);
	
    useEffect(() => {
		let initialPath = "./acme-search/";
		let categories = [
			"calendar",
			"contacts",
			"dropbox",
			"slack",
			"tweet"
		];
		let res = [];
		for(let category of categories) {
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
							//data.contacts[i]["count"] = count;
							data[category][i]["searchCategory"] = category;
							//data.contacts[i]["category"] = "contacts";
							res.push(data[category][i]);
						}
					}
				}
  			})
		}
		res.sort((a,b) => b["count"]-a["count"]);
		setResults(res);
		console.log(res);
    }, [props.query]);
    
    if(props.query === "")
    	return null;
    else{
		const cards = results.map(res => {
			if (res.searchCategory === "contacts") {
				return <ContactsCard info = {res} />;
			} else if (res.searchCategory === "calendar") {
				return <CalendarCard info = {res} />;
			} else if (res.searchCategory === "dropbox") {
				return <DropBoxCard info = {res} />;
			} else if (res.searchCategory === "slack") {
				return <SlackCard info = {res} />;
			} else if (res.searchCategory === "tweet") {
				return <TwitterCard info = {res} />;
			}
		}
		//<ContactsCard info = {res}/>
		);
        return(
			<div>
				{cards}
			</div>
		)};
}