import Selectbox from './Selectbox.jsx'
import { useState } from 'react';

/**
 * A component used in EventFinderPage for filter opions
 * @module FilterBar
 * @param {Array} e
 * @param {Function} setFList
 * @returns {{JSX.Element}}
 */
function FilterBar({ e, setFList}){
    // filter options
    const eventType = ["", "Social Event", "Workshop", "Lecture", "Networking Event", "Club Event", "Leisure Activity", "Others"];
    const eventMode = ["", "In-person", "Virtual", "Both"];
    const topics = e.reduce((acc, event) => {
        const eventTopics = event.topics.split(/[,\s]+/).filter(Boolean);
        return [...new Set([...acc, ...eventTopics])];
    }, [""]); // use ChatGPT (see AI use #8)
    const duration = ["", 15, 30, 60, 90, 120, 300, 1440];

    // states
    const [filterType, setFilterType] = useState("");
    const [filterMode, setFilterMode] = useState("");
    const [filterTopics, setFilterTopics] = useState("");
    const [filterDuration, setFilterDuration] = useState("");
    const [filterIsRegistered, setFilterIsRegistered] = useState(0);

    /**
     * A function to update Flist (a list of filter criterias)
     */
    function onButtonClick() {
        const fList = [filterType, filterMode, filterTopics, filterDuration, filterIsRegistered]
        setFList(fList);
    };

    // Render filter select boxes, "registered only?" checkbox, and a submit button
    return(
        <div>
            <div className="select">
                <Selectbox keyword='Event Type: ' options={eventType} item={filterType} onSelectChange={setFilterType} />
                <Selectbox keyword='Event Mode: ' options={eventMode} item={filterMode} onSelectChange={setFilterMode} />
                <Selectbox keyword='Topics: ' options={topics} item={filterTopics} onSelectChange={setFilterTopics}/>
                <Selectbox keyword='Duration (<= min): ' options={duration} item={filterDuration} onSelectChange={setFilterDuration}/>
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