import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar/searchbar';
import SearchResults from './components/SearchResults/searchResults'

function App() {
  const [query, setQuery] = useState("");
  const [checkedDropbox, setCheckedDropbox] = useState(true);
  const [checkedTwitter, setCheckedTwitter] = useState(true);
  const [checkedSlack, setCheckedSlack] = useState(true);
  const [checkedCalendar, setCheckedCalendar] = useState(true);
  const [checkedContacts, setCheckedContacts] = useState(true);
  const [pinnedUpdate, setPinnedUpdate] = useState(true);
	
  return(
  <React.Fragment style={{backgroundColor: "#fffdf5"}}>
    <SearchBar 
      getQuery = {(value) => setQuery(value)} 
      resetEverything = {(value) => {
        setCheckedContacts(true);
        setCheckedDropbox(true);
        setCheckedCalendar(true);
        setCheckedSlack(true);
        setCheckedTwitter(true);
        setQuery("");
      }
      }
      value = {query}
      checkedDropbox={checkedDropbox} 
      dropboxChange={() => setCheckedDropbox(!checkedDropbox)}
      checkedCalendar={checkedCalendar}
      calendarChange={() => setCheckedCalendar(!checkedCalendar)}
      checkedTwitter={checkedTwitter}
      twitterChange={() => setCheckedTwitter(!checkedTwitter)}
      checkedSlack={checkedSlack}
      slackChange={() => setCheckedSlack(!checkedSlack)}
      checkedContacts={checkedContacts}
      contactsChange={() => setCheckedContacts(!checkedContacts)}
    />
    <SearchResults 
      query = {query} 
      calendar = {checkedCalendar}
      tweet = {checkedTwitter}
      slack = {checkedSlack}
      dropbox = {checkedDropbox}
	  contacts = {checkedContacts}
	  pinUpdate = {() => setPinnedUpdate(!pinnedUpdate)}
      />
  </React.Fragment>);
}

export default App;