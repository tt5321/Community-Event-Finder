import TextBox from "../components/TextBox.jsx";
import Selectbox from '../components/Selectbox.jsx';
import TimeTextBox from "../components/TimeTextBox.jsx";
import { useState } from 'react';
import { myDB} from '../db/MyFirestoreDB.js';
import { Link } from "react-router-dom";
import '../styles.css';

function CreateEventPage() {
    const modeOptions = ["", "In-person", "Virtual", "In-person & Virtual"];
    const registerOptions = ["", "true", "false"];
    const typeOptions = ["", "Social Event", "Workshop", "Lecture", "Networking Event", "Club Event", "Leisure Activity", "Others"];

    const [cname, setName] = useState("");
    const [cmode, setMode] = useState("");
    const [ctype, setType] = useState("");
    const [cstart, setStart] = useState(""); //e.g. "2025/1/1 12:00"
    const [cend, setEnd] = useState(""); //e.g. 2025/1/1 13:00
    const [creg, setReg] = useState("");
    const [clocation, setLocation] = useState("");
    const [ctopics, setTopics] = useState("");

    async function handleSubmit() {
        const registerstatus = creg === "true";
        console.log(registerstatus);
        const eventData = {eName: cname, eMode: cmode, eType: ctype, eStart: cstart, eEnd: cend, eRegister: registerstatus, eLocation: clocation, eTopics: ctopics};
        const hasUnFilled = Object.values(eventData).some(value => value === undefined  || value === "");
        if (hasUnFilled) {
            alert("Please fill all fileds to submit!");
        } else {
            await myDB.add(eventData);
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

    return (
        <div>
            <h1>Create a New Event</h1>
            <div>
                <TextBox title="Name" defaultText="Enter event name..." item={cname} onEnter={setName} />
                <Selectbox keyword="Event Type: " options={typeOptions} item={ctype} onSelectChange={setType} />
                <Selectbox keyword='Event Mode: ' options={modeOptions} item={cmode} onSelectChange={setMode} />
                <TimeTextBox title="Start Time" onEnter={setStart} />
                <TimeTextBox title="End Time"onEnter={setEnd} />
                <TextBox title="Location" defaultText="Enter location..." item={clocation} onEnter={setLocation}/>
                <TextBox title="Related Topics" defaultText="Enter related topics..." item={ctopics} onEnter={setTopics} />
                <Selectbox keyword='Registered Already? ' options={registerOptions} item={creg} onSelectChange={setReg} />
            </div>
            <div>
                <Link to="/"><button className="back-button">Back to Home</button></Link>
                <button className="submitbutton" onClick={handleSubmit}>Submit</button>
            </div>
            {/* <h3>name: {cname}, mode: {cmode}, type: {ctype}, start: {cstart}, end: {cend}, registered: {creg}, location: {clocation}, topics: {ctopics}</h3> */}
        </div>
    )
}
export default CreateEventPage;