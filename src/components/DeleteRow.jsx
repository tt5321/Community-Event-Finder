function DeleteRow({ event, checked, onCheckBoxChange }) {
    const name = !event.registered ? event.name :
      <span style={{ color: 'blue' }}>
        {event.name}
      </span>;
  
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

export default DeleteRow;