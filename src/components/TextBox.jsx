import TextboxNormal from "./TextboxNormal.jsx";
import TextboxTime from "./TextboxTime.jsx"

/**
 * Textbox component used in CreateEventPage and DeleteEventPage for text entry.
 * Two different types: (1) normal textbox (2) time textbox.
 * Implement Factory design pattern.
 * @module Textbox
 * @param {String} type
 * @param {String} title
 * @param {String} defaultText
 * @param {String} item
 * @param {Function} onEnter
 * @returns {{JSX.Element}}
 */
function Textbox({ type, title, onEnter, defaultText, item }){
    const validType = type === "normal" || type === "time" ? type : "normal";
    const types = {
        normal: <TextboxNormal title={title} onEnter={onEnter} defaultText={defaultText} item={item} />,
        time: <TextboxTime title={title} onEnter={onEnter} />
    };
    return types[validType];
}

export default Textbox;