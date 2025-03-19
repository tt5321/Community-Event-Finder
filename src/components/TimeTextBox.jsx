import { useState } from "react";

/* Use ChatGPT for generateing the handler functions for this module (see References_AIuse.md prompt #2) */
/**
 * A component used in CreateEventPage for time entries, it will combine all the time entries into a string
 * @module TimeTextBox
 * @param {String} title
 * @param {Function} onEnter
 * @returns {{JSX.Element}}
 */
function TimeTextBox({ title, onEnter}) {
    const [inputValues, setInputValues] = useState({
        year: "",
        month: "",
        day: "",
        hr: "",
        min: ""
    });

    /**
     * A function to inputValues
     * @param {Object} e 
     */
    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputValues((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    /**
     * A function to combine year, month, day, hr, min into a string and call parent component's state setter function when time submit button is clicked
     * @param {Object} e 
     */
    function handleSubmit(e) {
        e.preventDefault();
        const timeString = `${inputValues.year}/${inputValues.month}/${inputValues.day} ${inputValues.hr}:${inputValues.min}`;
        onEnter(timeString);
      };

    // Renders year, month, day, hr, min text boxes and a button to submit the time
    return (
        <div className="custom-label">
            <label className="keyword">{title}: </label>
            <form className="form-group"onSubmit={handleSubmit}>
                <input type="text" placeholder="Year" name="year" value={inputValues.year} onChange={handleInputChange} />
                <input type="text" placeholder="Month" name="month" value={inputValues.month} onChange={handleInputChange} />
                <input type="text" placeholder="Day" name="day" value={inputValues.day} onChange={handleInputChange} />
                <input type="text" placeholder="Hr" name="hr" value={inputValues.hr} onChange={handleInputChange} />
                <input type="text" placeholder="Min" name="min" value={inputValues.min} onChange={handleInputChange}/>
                <button className="timebutton" type="submit">submit time</button>
            </form>
    </div>
    );
}

export default TimeTextBox;