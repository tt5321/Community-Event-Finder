import TextBox from "../components/TextBox.jsx";
import DeleteTable from "../components/DeleteTable.jsx";
import { useState, useEffect } from 'react';
import { myDB } from "../db/MyFirestoreDB.js";
import { Link } from "react-router-dom";
import '../styles.css';

/**
 * DeleteEventPage for deleting selected events (/delete_event)
 * @module DeleteEventPage
 * @returns {{JSX.Element}}
 */
function DeleteEventPage () {
    const [searchwords, setSearchwords] = useState("");
    const [events, setEvents] = useState([]);
    const [allEvents, setAllEvents] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    

    // obtain data from datastore
    useEffect(() => {
        async function loadData() {
          const data = await myDB.fetch();
          setEvents(data); 
          setAllEvents(data);
        }
        loadData();
      }, []);

    /**
     * A function that update searchwords and events when there are text entries in the TextBox
     * @param {String}
     * @return {void}
     */
    function handleSearch(v) {
        setSearchwords(v);
        if (v.trim() !== "") {
            setEvents(allEvents.filter((event) => event.name.includes(v)));
        } else {
            setEvents(allEvents);
        }
    }

    /**
     * A function to update selectedIds and checkbox display when a checkbox's value is changed
     * @param {String} id 
     * @param {boolean} checked
     * @return {void}
     */
    function handleCheckChange(id, checked) {
        if (checked) {
            setSelectedIds((prevIds) => [...prevIds, id]);
        } else {
            setSelectedIds((prevIds) =>
              prevIds.filter((selected) => selected !== id)
            );
        }
    }

    /**
     * A function to delete all the selected events in datastore and update events display
     * @param {Array} selectList - list of selected IDs
     * @return {void}
     */
    async function handleDelete(selectList) {
        await Promise.all(selectList.map((id) => myDB.delete({ eid: id }))); //Use ChatGPT (see References_AIuse.md prompt #3)
        setEvents((prevEvents) =>
            prevEvents.filter((event) => !selectList.includes(event.id))
        );
    }

    // Render page title, a search box to search for events, a table of events, and "Back to Home" & "Delete" buttons
    return (
        <div>
            <h1>Delete an Event</h1>
            <TextBox title="Search Event" defaultText="Enter event name" item={searchwords} onEnter={handleSearch}/>
            <DeleteTable events={events} selects={selectedIds} onRowCheckChange={handleCheckChange} />
            <div> 
                <Link to="/"><button className="back-button">Back to Home</button></Link>
                <button className="delete-button" onClick={() => handleDelete(selectedIds)}>Delete</button>
            </div>
        </div>

    );
}

export default DeleteEventPage;