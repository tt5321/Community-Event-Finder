function TextBox({ title, defaultText, item, onEnter }) {
    return (
        <div className="custom-label">
            <label className="keyword">{title}: </label>
            <form>
                <input className="custom-textbox" type="text" placeholder={defaultText} value={item} onChange={(e) => onEnter(e.target.value)}/>
            </form>
        </div>
    );
}

export default TextBox;