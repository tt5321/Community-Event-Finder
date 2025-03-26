# Functional Programming Examples
1. Pure functions
    - Example:
    ```
    // In HeaderBar.jsx
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
                        <Button className='button'>- Delete Event(s)</Button>
                    </Link>
                </ButtonGroup>
            </div>
        )
    }   
    ```
    - Explain: (1) HeaderBar function does not change any external state (2) It does not have props, and it always returns the same results (the same JSX structure) when it is called
    - Counter Example: modify global variable
    ```
    let h1 = "";
    let h2 = "";
    function HeaderBar() {
        h1 = "Community Event Finder";
        h2 = "ortheastern Oakland Campus";
        return (
            <div className='container' >
                <h1>{h1}</h1>
                <h2>N{h2}</h2>
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
    ```

2. Immutability
    - Example:
    ```
    // In DeleteEventPage.jsx
    function DeleteEventPage () {
        // ...
        const [selectedIds, setSelectedIds] = useState([]);
        //...
        function handleCheckChange(id, checked) {
            if (checked) {
                setSelectedIds((prevIds) => [...prevIds, id]);
            } else {
                setSelectedIds((prevIds) =>
                prevIds.filter((selected) => selected !== id)
                );
            }
        }
    // ...
    }
    ```
    - Explain: Use states and state setters to update states without mutability to the original data
    - Counter Example: modify the prevID array directly
    ```
    function handleCheckChange(id, checked) {
        if (checked) {
            setSelectedIds(（prevIDs）=> {
                prevIDs.push(id);
                return prevIDs;
            });
        } else {
            setSelectedIds((prevIds) =>
              prevIds.filter((selected) => selected !== id)
            );
        }
    }
    ```
    
3. First-class functions
    - Example:
    ```
    // In Selectbox.jsx
    function Selectbox({keyword, options, item, onSelectChange}) {
        //...
        const handleChange = (e) => {
            const selectedValue = e.target.value;
            setCurrentOpt(selectedValue);
            onSelectChange(selectedValue);
        };

        // Render a dropdown select box with a title
        return (
            //...
            <select name="selectedFilter" className="custom-select" value={currentOpt} onChange={handleChange} >
            //...
        );
    }
    ```
    - Explain: The function to handle value change in a select box is assigned to a variable handleChange, and is passed as property to another JSX component, thus it is a first class function.
    - Counter Example: the checkValue function is not assigned to a variable and passed to another function
    ```
     function Selectbox({keyword, options, item, onSelectChange}) {
        //...
        function handleChange(e) {
            const selectedValue = e.target.value;
            setCurrentOpt(selectedValue);
            onSelectChange(selectedValue);
        };

        const event = {target:{value: 3}};
        handleChange(event);
     }
    ```
    
4. Higher-order functions
    - Example:
    ```
    // In TextboxNormal.jsx
    function TextboxNormal({ title, defaultText, item, onEnter }) {
        // Render a text box with a title
        return (
            <div className="custom-label">
                <label className="keyword">{title}: </label>
                <form>
                    <input className="custom-textbox" type="text" placeholder={defaultText} value={item} onChange={(e) => onEnter(e.target.value)}/>
                </form>
            </div>
        );
    }
    ```
    - Explain: The TextboxNormal function accepts a function onEnter as a prop.
    - Counter Example: No function is passed as a parameter or is returned
    ```
        function TextboxNormal({ title, defaultText, item }) {
        const handleChange = (e) => {...};

        return (
            <div className="custom-label">
                <label className="keyword">{title}: </label>
                <form>
                    <input className="custom-textbox" type="text" placeholder={defaultText} value={item} onChange={handleChange}/>
                </form>
            </div>
        );
    }
    ```
    
5. Declarative over imperative
    - Example:
    ```
    // In DeleteEventPage.jsx
    function DeleteEventPage () {
        //...
        function handleSearch(v) {
            setSearchwords(v);
            if (v.trim() !== "") {
                setEvents(allEvents.filter((event) => event.name.includes(v)));
            } else {
                setEvents(allEvents);
            }
        }
        //...
    }

    ```
    - Explain: In handleSearch function, I use state setters (setSearchwords, setEvents) and Array's filter method to define what to do declarively instead of defining the steps to set searchwrods and events
    - Counter Example: define what to do imperatively
    ```
    function handleSearch(v) {
        searchWords = v;
        if (v.trim() !== "") {
            let searchEvents = []
            for (let e of allEvents) {
                if (e.name.includes(v)) {
                    searchEvents.push(e);
                }
            }
            events = searchEvents;
        } else {
            events = allEvents;
        }
    }
    ```

#  Array Functional Programming Methods
1. map
    - Example:
    ```
    // In EventFinderPage.jsx
    async function handleRegisterChange(id, status) {
      await myDB.updateR({eid: id, estatus: status});
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
            event.id === id ? { ...event, registered: status } : event
        )
      );
    }

    ```
    - Explain: Use the array's map function to change an event's registration status (registered field) based on the passed-in event id and status, which returns a new array.
    - Counter Example:
    ```
    async function handleRegisterChange(id, status) {
        await myDB.updateR({eid: id, estatus: status});
        setEvents((prevEvents) => {
            let newEvents = [];
            for (let e of prevEvents) {
                if (e.id === id) {
                    e[registered] = status;
                }
                newEvents.push(e);
            }
            return newEvents;
        });
    }
    ```

2. filter
    - Example:
    ```
    // In DeleteEventPage.jsx
    function handleCheckChange(id, checked) {
        if (checked) {
            setSelectedIds((prevIds) => [...prevIds, id]);
        } else {
            setSelectedIds((prevIds) =>
              prevIds.filter((selected) => selected !== id)
            );
        }
    }
    ```
    - Explain: Use the Array's filter method to exclude the selected event ID from the selectedIds array, which returns a new array.
    - Counter Example: 
    ```
    function handleCheckChange(id, checked) {
        if (checked) {
            setSelectedIds((prevIds) => [...prevIds, id]);
        } else {
            setSelectedIds((prevIds) => {
                let newSelected = [];
                for (let item of prevIds) {
                    if (item === id) {
                        continue;
                    }
                    mewSelected.push(item);
                }
                return newSelected;
            });
        }
    }
    ```

3. reduce
    - Example:
    ```
    // In FilterBar.jsx
    const topics = e.reduce((acc, event) => {
        const eventTopics = event.topics.split(/[,\s]+/).filter(Boolean);
        return [...new Set([...acc, ...eventTopics])];
    }, [""]);
    ```
    - Explain: Use the Array's reduce method to get all the unique topics in the events array, which returns an array of event topics
    - Counter Example:
    ```
    let topics = [""];
    for (let event of e) {
        const eventTopics = event.topics.split(/[,\s]+/).filter(Boolean);
        topics = [...new Set([...topics, ...eventTopics])];
    }
    ```

# Design Patterns
1. Singleton
    - Example:
    ```
    // In src/db/MyFirestoreDB.js
    function MyFireStoreHandler() {
        //...
        myDB.fetch = fetchEvents;
        myDB.add = createEvent;
        myDB.updateR = updateRegisterStatus;
        myDB.delete = deleteEvent;

        return myDB;
    }
    const myDB = new MyFireStoreHandler();
    export { myDB };
    ```
    - Explain: Since the myDB object is instantiated only once and exported as an instance, all modules importing myDB will always use the same object. Thus, it follows the Singleton pattern.
    - Counter Example:
    ```
        // In src/db/MyFirestoreDB.js
    function MyFireStoreHandler() {
        //...
        myDB.fetch = fetchEvents;
        myDB.add = createEvent;
        myDB.updateR = updateRegisterStatus;
        myDB.delete = deleteEvent;

        return myDB;
    }
    export { MyFireStoreHandler };

    ```

2. Factory
    - Example:
    ```
    // In Textbox.jsx
    function Textbox({ type, title, onEnter, defaultText, item }){
        const validType = type === "normal" || type === "time" ? type : "normal";

        const types = {
            normal: <TextboxNormal title={title} onEnter={onEnter} defaultText={defaultText} item={item} />,
            time: <TextboxTime title={title} onEnter={onEnter} />
        };
        return types[validType];
    }

    // In CreateEventPage.jsx
    function CreateEventPage() {
        //...
        return (
            //...
                    <Textbox type="time" title="End Time"onEnter={setEnd} />
                    <Textbox type="normal" title="Location" defaultText="Enter location..." item={clocation} onEnter={setLocation}/>
            //...
        );
    }
    ```
    - Explain: The Textbox component will return different types of Textbox components based on the type prop, following the Factory design pattern.
    - Counter Example:
    ```
    // No Textbox.jsx, and 
    // In CreateEventPage.jsx
    function CreateEventPage() {
        //...
        return (
            //...
                    <TextboxTime title="End Time"onEnter={setEnd} />
                    <TextboxNormal title="Location" defaultText="Enter location..." item={clocation} onEnter={setLocation}/>
            //...
        );
    }
    ```

3. Module
    - Example:
    ```
    // In EventFinderPage.jsx
    function EventFinderPage() {
        //...
    }
    export default EventFinderPage;

    // In main.jsx
    import EventFinderPage from './pages/EventFinderPage.jsx'
    ```
    - Explain: EventFinderPage is a indenpendent module to handel EventFinderPage logic and has single responsibility. It is exported as a module which can be used by others, such as main.jsx
    - Counter Example:
    ```
    // No EventFinderPage module
    // In main.jsx:
    function EventFinderPage() {
        //...
    }

    createRoot(document.getElementById('root')).render(
        //...
    )
    ```