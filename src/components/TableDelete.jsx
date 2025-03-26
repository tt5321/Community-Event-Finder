import RowDelete from "./RowDelete.jsx";

/**
 * A Table used in DeleteEventPage for displaying events and selecting events for deletion in a table.
 * Implement Module design patterns.
 * @module TableDelete
 * @param {Array} events
 * @param {Array} selects
 * @param {Function} onRowCheckChange
 * @returns {{JSX.Element}}
 */
function TableDelete({ events, selects, onRowCheckChange }) {
    const rows = [];

    // Push events into DeleteRow
    events.forEach((event) => {
      rows.push(
        <RowDelete
          key={event.id} 
          event={event}
          checked={selects.includes(event.id)}
          onCheckBoxChange={onRowCheckChange} />
      );
    });
  
    // Render the table header and DeleteRow list
    return (
      <table>
        <thead>
          <tr>
            <th>Select</th>
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

  export default TableDelete;