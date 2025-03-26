/**
 * A component used in EventTable component for displaying event in a row.
 * Implement Module design patterns.
 * @module RowFilter
 * @param {Object} event 
 * @param {Function} onCheckBoxChange
 * @returns {{JSX.Element}}
 */
function RowFilter({ event, onCheckBoxChange }) {
  // highlight registered events' names in blue  
  const name = !event.registered ? event.name :
      <span style={{ color: 'blue' }}>
        {event.name}
      </span>;
  
  // Render event details. The checkbox of the "registered" display the status, and if user changes the value, the updated value will be passed to the parent component and saved to the datastore
  return (
    <tr>
      <td>{name}</td>
      <td>{event.type}</td>
      <td>{event.mode}</td>
      <td>{event.start}</td>
      <td>{event.end}</td>
      <td>{event.duration}</td>
      <td>{event.location}</td>
      <td>{event.topics}</td>
      <td>
          <input type="checkbox" checked={event.registered} onChange={(e) => onCheckBoxChange(event.id, e.target.checked)}/>
      </td>
    </tr>
  );
  }

export default RowFilter;