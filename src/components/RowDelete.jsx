/**
 * A component used in Deletable component for displaying event in a row.
 * Implement Module design patterns.
 * @module RowDelete
 * @param {Object} event 
 * @param {boolean} checked
 * @param {Function} onCheckBoxChange
 * @returns {{JSX.Element}}
 */
function RowDelete({ event, checked, onCheckBoxChange }) {
    // highlight registered events' names in blue  
    const name = !event.registered ? event.name :
      <span style={{ color: 'blue' }}>
        {event.name}
      </span>;
  
    // Render checkbox for a event and event details and check. The checkbox is used to select events for deletion.
    return (
      <tr>
        <td>
            <input type="checkbox" checked={checked} onChange={(e) => {onCheckBoxChange(event.id, e.target.checked)}} />
        </td>
        <td>{name}</td>
        <td>{event.type}</td>
        <td>{event.mode}</td>
        <td>{event.start}</td>
        <td>{event.end}</td>
        <td>{event.duration}</td>
        <td>{event.location}</td>
        <td>{event.topics}</td>
        <td>{String(event.registered)}</td>
      </tr>
    );
  }

export default RowDelete;