import Selectbox from '../components/Selectbox.jsx';
import Textbox from '../components/Textbox.jsx';
import { useState } from 'react';
import { myDB} from '../db/MyFirestoreDB.js';
import { Link } from "react-router-dom";
import '../styles.css';

/**
 * CreateEventPage for Creaing an event (/create_event).
 * Implement Module design patterns.
 * @module CreateEventPage
 * @returns {{JSX.Element}}
 */
function CreateEventPage() {
    // options for Selectbox
    const modeOptions = ["", "In-person", "Virtual", "In-person & Virtual"];
    const registerOptions = ["", "true", "false"];
    const typeOptions = ["", "Social Event", "Workshop", "Lecture", "Networking Event", "Club Event", "Leisure Activity", "Others"];

    // states
    const [cname, setName] = useState("");
    const [cmode, setMode] = useState("");
    const [ctype, setType] = useState("");
    const [cstart, setStart] = useState(""); //e.g. "2025/1/1 12:00"
    const [cend, setEnd] = useState(""); //e.g. 2025/1/1 13:00
    const [creg, setReg] = useState("");
    const [clocation, setLocation] = useState("");
    const [ctopics, setTopics] = useState("");

    /**
     * A function to create event in datasore and clear display when the submit button on CreateEventPage is clicked
     */
    async function handleSubmit() {
        const registerstatus = creg === "true"; // convert input string ("true" "false" "") to boolean 
        console.log(registerstatus);
        const eventData = {eName: cname, eMode: cmode, eType: ctype, eStart: cstart, eEnd: cend, eRegister: registerstatus, eLocation: clocation, eTopics: ctopics};
        const hasUnFilled = Object.values(eventData).some(value => value === undefined  || value === ""); 
        if (hasUnFilled) {
            // check if there is any unfilled field
            alert("Please fill all fileds to submit!");
        } else {
            // create event in datastore
            await myDB.add(eventData);
            // clear states and display
            alert("Success: event created!");
            setName("");
            setMode("");
            setType("");
            setStart("");
            setEnd("");
            setReg("");
            setLocation("");
            setTopics("");
        }
    }

    // Render page title, event details, and "Back to Home" & "Submit" buttons
    return (
        <div>
            <h1>Create a New Event</h1>
            <div>
                <Textbox type="normal" title="Name" defaultText="Enter event name..." item={cname} onEnter={setName} />
                <Selectbox keyword="Event Type: " options={typeOptions} item={ctype} onSelectChange={setType} />
                <Selectbox keyword='Event Mode: ' options={modeOptions} item={cmode} onSelectChange={setMode} />
                <Textbox type="time" title="Start Time" onEnter={setStart} />
                <Textbox type="time" title="End Time"onEnter={setEnd} />
                <Textbox type="normal" title="Location" defaultText="Enter location..." item={clocation} onEnter={setLocation}/>
                <Textbox type="normal" title="Related Topics" defaultText="Enter related topics..." item={ctopics} onEnter={setTopics} />
                <Selectbox keyword='Registered Already? ' options={registerOptions} item={creg} onSelectChange={setReg} />
            </div>
            <div>
                <Link to="/"><button className="back-button">Back to Home</button></Link>
                <button className="submitbutton" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default CreateEventPage;