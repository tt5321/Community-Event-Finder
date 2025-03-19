// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**
 * FireStoreHandler function that deals with Firestore API and provides interfaces to this app
 * @module MyFireStoreHandler
 * @returns {Object} -  keys = myDB.fetch, myDB.fetch, myDB.updateR, myDB.delete, values = corresponding functions
 */
function MyFireStoreHandler() {
    const myDB = {}
    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyA6o9uhDttQW6R52rgJE6g0FM5ALshCmCU",
    authDomain: "community-event-finder-29cdf.firebaseapp.com",
    projectId: "community-event-finder-29cdf",
    storageBucket: "community-event-finder-29cdf.firebasestorage.app",
    messagingSenderId: "122886015210",
    appId: "1:122886015210:web:b3c6fdbfec50a94ee22f93"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    /**
     * Asynchronous function to get all events
     * @returns {Array}
     */
    async function fetchEvents() {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const events = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Fectch events successfully!");
        return events;
      } catch (error) {
        console.error("Error fetching events:", error);
        return [];
      }
    };
    
    /**
     * Asynchronous function to create an event
     * @returns {void}
     */
    async function createEvent ({ eName, eMode, eType, eStart, eEnd, eLocation, eTopics, eRegister }) {
      const dur = (new Date(eEnd) - new Date(eStart)) / 60000;
      const eventData = {name: eName, mode: eMode, type: eType, start: eStart, end: eEnd, duration: dur, registered: eRegister, location: eLocation, topics: eTopics};
      try {
        const eventRef = doc(collection(db, "events"));
        await setDoc(eventRef, eventData);
        console.log("Create event successfully!");
      } catch (error) {
        console.error("Error adding event:", error);
      }
    };

    /**
     * Asynchronous function to update an event's registered field
     * @returns {void}
     */
    async function updateRegisterStatus ({ eid, estatus }) {
      try {
        const eventRef = doc(db, "events", eid);
        await updateDoc(eventRef, { registered: estatus });
        console.log("Update event status successfully:", eid, estatus);
      } catch (error) {
        console.error("Error updateing event:", error);
      }
    }

    /**
     * Asynchronous function to delete an event
     * @returns {void}
     */
    async function deleteEvent ({ eid }) {
     try {
      await deleteDoc(doc(db, "events", eid));
      console.log("Event deleted!");
     } catch (error) {
      console.error("Error deleting event:", error);
     }
    };


    myDB.fetch = fetchEvents;
    myDB.add = createEvent;
    myDB.updateR = updateRegisterStatus;
    myDB.delete = deleteEvent;

    return myDB;
}


const myDB = new MyFireStoreHandler();
export { myDB };