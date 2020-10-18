import React, { useEffect, useState } from 'react';
import ContactsCard from '../Cards/contactsCard';

export default function SearchResults(props){
    // console.log(props.query);
    const [query, setQuery] = useState("");
    const [contactResults, setContactresults] = useState([]);
    // console.log(dropBoxResults);
    useEffect(() => {
       // console.log("mounted");
        setQuery(props.query);
    }, []);
    useEffect(() => {
        //console.log("unmount")
        fetch('./acme-search/contacts.json')
        .then((response) => response.json())
        .then((data) => {
            if(props.query.length!=0){
                // console.log("fetched")
            let res = [];
            let query_string = props.query.val.toLowerCase();
            // console.log(query_string);
            let query_terms = query_string.split(" ");
            for(let i = 0;i<data.contacts.length;i++)
            {
                let count = 0;
                // console.log(data.contacts[i].matching_terms);
                // console.log(query_terms);
                let matching_terms = data.contacts[i].matching_terms;
                // console.log(matching_terms);
                for(let word of query_terms)
                {
                   for(let term of matching_terms)
                   {
                       if(word === term)
                        {
                            count++;
                            break;
                        }
                   }
                }
                if(count>0)
                {
                    data.contacts[i]["count"] = count;
                    data.contacts[i]["catgeory"] = "contacts";
                    res.push(data.contacts[i]);
                }
                    
            }
            res.sort((a,b) => b["count"]-a["count"]);
            //console.log(res);
          setContactresults(res);
        }
           //console.log(contacts);
  })
    }, [props.query]);
    // console.log(query);
    if(props.query === "")
    return null;
    else{
        const cards = contactResults.map(res => <ContactsCard info = {res}/>);
        // console.log(contactResults);
        return(
       <div>
            {cards}
       </div>
        );
    }
}