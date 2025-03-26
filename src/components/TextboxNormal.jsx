/**
 * A component used in CreateEventPage and DeleteEventPage for text entry.
 * Implement Module design patterns.
 * @module TextboxNormal
 * @param {String} title
 * @param {String} defaultText
 * @param {String} item
 * @param {Function} onEnter
 * @returns {{JSX.Element}}
 */
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

export default TextboxNormal;