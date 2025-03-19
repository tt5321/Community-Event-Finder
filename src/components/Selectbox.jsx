import '../styles.css';
import { useState } from 'react';

function Selectbox({keyword, options, item, onSelectChange}) {
    const [currentOpt, setCurrentOpt] = useState(item);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setCurrentOpt(selectedValue);
        onSelectChange(selectedValue);
    };

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