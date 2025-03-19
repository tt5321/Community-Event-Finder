import { useState } from "react";

/* Use ChatGPT for generateing the handle functions */
function TimeTextBox({ title, onEnter}) {
    const [inputValues, setInputValues] = useState({
        year: "",
        month: "",
        day: "",
        hr: "",
        min: ""
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputValues((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    function handleSubmit(e) {
        e.preventDefault();
        const timeString = `${inputValues.year}/${inputValues.month}/${inputValues.day} ${inputValues.hr}:${inputValues.min}`;
        onEnter(timeString);
      };

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