import '../styles.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

function HeaderBar() {
    return (
        <div className='container' >
            <h1>Community Event Finder</h1>
            <h2>Northeastern Oakland Campus</h2>
            <ButtonGroup className="header-buttons-container">
                <Link to="/create_event">
                    <Button className='button'>+ Create New Event</Button>
                </Link>
                <Link to="/delete_event">
                    <Button className='button'>- Delete An Event</Button>
                </Link>
            </ButtonGroup>
        </div>
    )
}

export default HeaderBar;