import { useState } from "react";

/* Use ChatGPT for generateing the handler functions for this module (see References_AIuse.md prompt #2) */
/**
 * A component used in CreateEventPage for time entries, it will combine all the time entries into a string.
 * Implement Module design patterns.
 * @module TextboxTime
 * @param {String} title
 * @param {Function} onEnter
 * @returns {{JSX.Element}}
 */
function TextboxTime({ title, onEnter }) {
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
        // Check validility of the input values
        const checkValue = (value, type) => {
          if (value === undefined  || value === "") {
            return false;
          } else {
            const intValue = parseInt(value);
            if (Number.isNaN(intValue)) {
              return false;
            }
            switch (type) {
              case "y":
                break;
              case "m":
                if (intValue < 1 || intValue > 12) {
                  return false;
                }
                break;
              case "d":
                if (intValue < 1 || intValue > 31) {
                  return false;
                }
                break;
              case "hr":
                if (intValue < 0 || intValue > 23) {
                  return false;
                }
                break;
              case "min":
                if (intValue < 0 || intValue > 59) {
                  return false;
                }
                break
            }
            return true;
          }
        };

        if (!checkValue(inputValues.year, "y") || !checkValue(inputValues.month, "m") || !checkValue(inputValues.day, "d") || !checkValue(inputValues.hr, "hr") || !checkValue(inputValues.min, "min")) {
          alert("Please enter all the fields and enter valid values!\n\nValid inputs:\n\tmonth(1~12)\n\tday(1~31)\n\thr(0~23)\n\tmin(0~59)");
        } else {
          const timeString = `${inputValues.year}/${inputValues.month}/${inputValues.day} ${inputValues.hr}:${inputValues.min}`;
          alert("submit time successfully!");
          onEnter(timeString);
        }
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

export default TextboxTime;