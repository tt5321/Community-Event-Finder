import Selectbox from './Selectbox.jsx'
import { useState } from 'react';

function FilterBar({ setFList }){
    const eventType = ["", "Social Event", "Workshop", "Lecture", "Networking Event", "Club Event", "Leisure Activity", "Others"];
    const eventMode = ["", "In-person", "Virtual", "Both"];
    const topics = ["", "CS", "Engineer", "Privacy"];
    const duration = ["", 15, 30, 60, 90, 120];

    const [filterType, setFilterType] = useState("");
    const [filterMode, setFilterMode] = useState("");
    const [filterTopics, setFilterTopics] = useState("");
    const [filterDuration, setFilterDuration] = useState("");
    const [filterIsRegistered, setFilterIsRegistered] = useState(0);

    const onButtonClick = () => {
        const fList = [filterType, filterMode, filterTopics, filterDuration, filterIsRegistered]
        setFList(fList);
    };

    return(
        <div>
            <div className="select">
                <Selectbox keyword='Event Type: ' options={eventType} item={filterType} onSelectChange={setFilterType} />
                <Selectbox keyword='Event Mode: ' options={eventMode} item={filterMode} onSelectChange={setFilterMode} />
                <Selectbox keyword='Topics: ' options={topics} item={filterTopics} onSelectChange={setFilterTopics}/>
                <Selectbox keyword='Duration: ' options={duration} item={filterDuration} onSelectChange={setFilterDuration}/>
            </div>
            <div>
                <label >
                    <span className="keyword">Registered Only?</span>
                    <input type="checkbox" checked={filterIsRegistered} onChange={() => setFilterIsRegistered(!filterIsRegistered)}/>
                    {' '}
                </label>
                <button className="submitbutton" onClick={onButtonClick}>Filter</button>
            </div>
        </div>
    )
}

export default FilterBar;