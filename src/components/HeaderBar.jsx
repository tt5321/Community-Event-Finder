import '../styles.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

/**
 * A component used in EventFinderPage for displaying headers and create/delete event buttons.
 * Implement Module design patterns.
 * @module HeaderBar
 * @returns {{JSX.Element}}
 */
function HeaderBar() {
    // Render page title, subtitle, "create new event" & "delete an event" buttons (clicking either of the buttons will go to another page)
    // Use ChatGPT to know about the ButtonGroup and Button (see References_AIuse.md prompt #4)
    return (
        <div className='container' >
            <h1>Community Event Finder</h1>
            <h2>Northeastern Oakland Campus</h2>
            <ButtonGroup className="header-buttons-container">
                <Link to="/create_event">
                    <Button className='button'>+ Create New Event</Button>
                </Link>
                <Link to="/delete_event">
                    <Button className='button'>- Delete Event(s)</Button>
                </Link>
            </ButtonGroup>
        </div>
    )
}

export default HeaderBar;