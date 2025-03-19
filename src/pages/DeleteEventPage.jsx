import TextBox from "../components/TextBox.jsx";
import DeleteTable from "../components/DeleteTable.jsx";
import { useState, useEffect } from 'react';
import { myDB } from "../db/MyFirestoreDB.js";
import { Link } from "react-router-dom";
import '../styles.css';

function DeleteEventPage () {
    const [searchwords, setSearchwords] = useState("");
    const [events, setEvents] = useState([]);
    const [allEvents, setAllEvents] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    

    useEffect(() => {
        async function loadData() {
          const data = await myDB.fetch();
          setEvents(data); 
          setAllEvents(data);
        }
        loadData();
      }, []);

    function handleSearch(v) {
        setSearchwords(v);
        if (v.trim() !== "") {
            setEvents(allEvents.filter((event) => event.name.includes(v)));
        } else {
            setEvents(allEvents);
        }
    }

    function handleCheckChange(id, checked) {
        if (checked) {
            setSelectedIds((prevIds) => [...prevIds, id]);
        } else {
            setSelectedIds((prevIds) =>
              prevIds.filter((selected) => selected !== id)
            );
        }
    }

    async function handleDelete(selectList) {
        await Promise.all(selectList.map((id) => myDB.delete({ eid: id }))); //Use ChatGPT
        setEvents((prevEvents) =>
            prevEvents.filter((event) => !selectList.includes(event.id))
        );
    }

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