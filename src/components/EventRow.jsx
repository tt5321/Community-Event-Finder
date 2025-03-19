function EventRow({ event, onCheckBoxChange }) {
    const name = !event.registered ? event.name :
      <span style={{ color: 'blue' }}>
        {event.name}
      </span>;
  
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

export default EventRow;