import DeleteRow from "./DeleteRow";

/**
 * A component used in DeleteEventPage for displaying events in a table
 * @module DeleteTable
 * @param {Array} events
 * @param {Array} selects
 * @param {Function} onRowCheckChange
 * @returns {{JSX.Element}}
 */
function DeleteTable({ events, selects, onRowCheckChange }) {
    const rows = [];

    // Push events into DeleteRow
    events.forEach((event) => {
      rows.push(
        <DeleteRow
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

  export default DeleteTable;