import HeaderBar from "../components/HeaderBar.jsx"
import FilterBar from "../components/FilterBar.jsx"
import EventTable from "../components/EventTable.jsx";
import { useState, useEffect } from 'react';
import { myDB } from "../db/MyFirestoreDB.js";

/**
 * EventFinderPage for filtering events (Home Page)
 * @module EventFinderPage
 * @returns {{JSX.Element}}
 */
function EventFinderPage() {
    const [filterList, setFilterList] = useState(["", "", "", "", 0]);
    const [events, setEvents] = useState([]);
    
    // obtain data from datastore
    useEffect(() => {
      async function loadData() {
        const data = await myDB.fetch();
        setEvents(data); 
      }
      loadData();
    }, []);

    /**
     * Asynchronmous function to update registered status change back to datastore and update display
     * @param {String} id 
     * @param {boolean} status 
     */
    async function handleRegisterChange(id, status) {
      await myDB.updateR({eid: id, estatus: status});
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
            event.id === id ? { ...event, registered: status } : event
        )
      );
    }

    // Render HeaderBar, FilterBar, note for EventTable, and EventTable; note: timeline is not implemented for now
    return (
      <div>
        <HeaderBar />
        <FilterBar setFList={setFilterList} />
        {/* <TimelineBar events={events} /> // not implemented yet */} 
        <div style={{ marginTop: '20px' , fontSize: '13px' }}>* Event list for all times:</div>
        <EventTable events={events} fList={filterList} onRowCheckChange={handleRegisterChange}/>
      </div>
    )
}

export default EventFinderPage;