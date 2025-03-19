import '../styles.css';
import { useState } from 'react';

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
    const [currentOpt, setCurrentOpt] = useState(item);

    /**
     * A handler function to update current selected option and call parent's function to update the change
     * @param {Object} e 
     */
    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setCurrentOpt(selectedValue);
        onSelectChange(selectedValue);
    };

    // Render a dropdown select box with a title
    return (
        <label className="custom-label">
        <span className="keyword">{keyword}</span>
        <select name="selectedFilter" className="custom-select" value={currentOpt} onChange={handleChange} >
            <option value={keyword} disabled>{keyword}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
      </label>
    );
}

export default Selectbox;