# Community-Event-Finder
A community event finder that allows users to filter events based on event type, mode, duration, and related topics, and displays the results in chronological order on a web page.

# Visit Deployed Website (public)
Visit: https://tt5321.github.io/Community-Event-Finder/

# Setting Up in Development Mode (local)
1. Download the zip file and unzip
2. Install modules
    ```
    npm install
    ```
3. To start running the application:
    ```
    npm run dev
    ```
4. Visit the http://localhost:5173/Community-Event-Finder/

# Using The Application
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

# CRUD Operations
- Create: create an event
- Read: fetch and display events from the firestore
- Update: click the "registered" checkbox to update the registration status for events and updates to the firestore
- Delete: delete selected events

# Key Files
- docs/: documentation files
    - Business requirements
    - Jsdocs
    - FunctionProammingExplain.md: explanation of use of functional programming
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

# Videos
- Demo Video: https://youtu.be/oZ8SIy5wWgc
- Supporting Video (functional programming response): https://youtu.be/2F9MQ3TXfIE

# Mockups & Diagram
- Mockups & React Hierarchy: https://www.figma.com/design/L13WAOoRMawlsu2mxm0Vnz/Project2-Community-Event-Finder?node-id=0-1&t=i65rLGUAfrD2dtqb-1
- Diagram: https://lucid.app/lucidchart/fee285ff-907f-4b1a-bc3a-cbdeb1ef7adb/edit?viewport_loc=-140%2C-583%2C2319%2C1119%2C0_0&invitationId=inv_0e014ad7-cf66-48f7-bc70-d5075f094c5b

# Link to Business Requirement
- Google Docs: https://docs.google.com/document/d/1qRCQSE9SHuTE6u9jNDf-xhhGAVm-m2gR0mIXiIU5IhY/edit?usp=sharing

# Other Notes
1. On the home page, the design was intended to show only the filtered events within the next 7 days. However, since the data set is small now, so I displayed all the filtered events from now.
2. I do not have time to implement the optional timeline feature in design.

# Author
Tiantian Ma
