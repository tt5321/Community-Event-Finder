# Community-Event-Finder
A community event finder that allows users to filter events based on event type, mode, duration, and related topics, and displays the results on a web page.

# Setting up
1. Download the zip file and unzip
2. Install modules
    ```
    git clone 
    ```
3. To start running the application:
    ```
    npm run dev
    ```
4. Visit the http://localhost:5173/

# Using the application
- On the Home Page (EventFinderPage):
    - Click "+ Create New Event" button to create an new event (jumps to the CreateEventPage)
    - Click "- Delete Event(s)" button to delete events (jumps to the DeleteEventPage)
    - Use the select boxes to select the filter criterias
        - Event Type (option examples: "Social Event", "Workshop", "Lecture", "Networking Event", "Club Event", "Leisure Acticity", "Others")
        - Event Mode (option examples: "In-person", "Virtual", "Both")
        - Topics (option examples: "CS", "Engineer", "Privacy)
        - Duration (<=time in minutes, e.g. select 60 means to find events with duration less than or equal to 60 min)
    - Click "Filter" button to filter events (displayed in the events table)
        - note: the displayed events are sorted in ascending order based on start time and it will display all times events with start time after now
    - Click checkboxes of each event to update the registration status
        - note: checked = registered & unchecked = unregistered; the status will be updated to the backend datastore
- On the CreateEventPage:
    - Use the text entry boxes and select boxes to create an event
        - For time entries, please fill every element ("Year", "Month", "Day", "Hr", "Min") and click "submit time" after finish entries
    - Click the "Submit" button to create this event, which will be updated to the backend datastore if succeeded
        - note: if any field is not filled, an alert pops up and the event will not be created
    - Click the "Back to Home" to go back to the Home page
- On the DeleteEventPage:
    - Use the search box to search for events that contains the "search words" (case sensitive), the filtered events will be displayed immediately
    - Use the "Select" checkbox to selete event(s) to be deleted
    - Click the "Delete" button to delete the selected events, this will update the backend datastore
    - Click the "Back to Home" to go back to the Home page

# CRUD operations
- Create: create an event
- Read: fetch and display events from the firestore
- Update: click the "registered" checkbox to update the registration status for events and updates to the firestore
- Delete: delete selected events

# Implementation of functional programming
- Using funtions instead of classes, and all components are created with functions
- No global variables and loose functions, only one export per file
- Use states and state setters to update states without mutability to the original data, e.g.
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
- Use high order functions, e.g.
```
// In Selectbox.jsx: parameter "onSelectChange" is a function
/**
 * A component used in FilterBar and CreateEventPage for drop-down selection
 * @module Selectbox
 * @param {String} keyword 
 * @param {Array} options 
 * @param {String} item
 * @param {Function} onSelectChange
 * @returns {{JSX.Element}}
 */
function Selectbox({keyword, options, item, onSelectChange}) {
    //...
}
```

# Key Files
- docs/: documentation files
    - Business requirements
    - Jsdocs
    - References_AIuse.md：reference & ai use during code implementation process
- src/: code
    - components/: contains defined components used in pages (each component in one file as one module)
    - db/: contains the firestore handler module
    - pages/: contains the Home page (EventFinderPage), CreateEventPage, DeleteEventPage components
    - main.jsx: entry point
    - styles.css: css styles used by all the components
- README.md

# Deployment
- Deployed on GitHub Pages

# Video
- Youtube Link: 

# Mockups & Diagram
- Mockups & React Hierarchy: https://www.figma.com/design/L13WAOoRMawlsu2mxm0Vnz/Project2-Community-Event-Finder?node-id=0-1&t=i65rLGUAfrD2dtqb-1
- Diagram: https://lucid.app/lucidchart/fee285ff-907f-4b1a-bc3a-cbdeb1ef7adb/edit?viewport_loc=-140%2C-583%2C2319%2C1119%2C0_0&invitationId=inv_0e014ad7-cf66-48f7-bc70-d5075f094c5b

# Other Notes
1. On the home page, the design was intended to show only the filtered events within the next 7 days. However, since the data set is small now, so I displayed all the filtered events from now.
2. I do not have time to implement the optional timeline feature in design.
3. For the "Topics" select box for the purpose of filter, the options for select box were intended to attain from the datastore. Due to time limit, currently I just hardcoded some options.

# Author
Tiantian Ma