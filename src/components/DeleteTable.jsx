import DeleteRow from "./DeleteRow";

function DeleteTable({ events, selects, onRowCheckChange }) {
    const rows = [];

    events.forEach((event) => {
      rows.push(
        <DeleteRow
          event={event}
          checked={selects.includes(event.id)}
          onCheckBoxChange={onRowCheckChange} />
      );
    });
  
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