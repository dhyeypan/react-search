import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar/searchbar';
import SearchResults from './components/SearchResults/searchResults'
// import DropBoxCard from './components/Cards/dropboxCard';
// import TwiterCard from './components/Cards/twitterCard';
// import SlackCard from './components/Cards/slackCard';
// import CalendarCard from './components/Cards/calendarCard';
// import ContactsCard from './components/Cards/contactsCard';


function App() {
  const[query, setQuery] = useState("");
  const [checkedDropbox, setCheckedDropbox] = useState(true);
  const [checkedTwitter, setCheckedTwitter] = useState(true);
  const [checkedSlack, setCheckedSlack] = useState(true);
  const [checkedCalendar, setCheckedCalendar] = useState(true);
  const [checkedContacts, setCheckedContacts] = useState(true);
// console.log(query);
  return(
  <React.Fragment>
    <SearchBar 
      getQuery = {(value) => setQuery(value)} 
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
      twitter = {checkedTwitter}
      slack = {checkedSlack}
      dropbox = {checkedDropbox}
      contacts = {checkedContacts}
      />
  </React.Fragment>);
}

export default App;