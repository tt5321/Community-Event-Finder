import EventRow from "./EventRow.jsx";

function EventTable({ events, fList, onRowCheckChange }) {
    const rows = [];
    const now = new Date();
    const filterEvents = events.filter(event => {
      return (
        (fList[0] === "" || event.type === fList[0]) && 
        (fList[1] === "Both" || event.mode.includes(fList[1])) &&
        (fList[2] === "" || event.topics.includes(fList[2])) &&
        (fList[3] === "" || Number(event.duration) <= fList[3]) &&
        (!fList[4] || event.registered) &&
        (new Date(event.start) > now)
      );
    }).sort((a, b) => new Date(a.start) - new Date(b.start));


    filterEvents.forEach((event) => {
      rows.push(
        <EventRow
          event={event}
          key={event.name} 
          onCheckBoxChange={onRowCheckChange} />
      );
    });
  
    return (
      <table className="table">
        <thead className="thead-tr">
          <tr>
            <th>Event</th>
            <th>Type</th>
            <th>Mode</th>
            <th>Start</th>
            <th>End</th>
            <th>Duration</th>
            <th>Location</th>
            <th>Topics</th>
            <th>Registered</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  export default EventTable;