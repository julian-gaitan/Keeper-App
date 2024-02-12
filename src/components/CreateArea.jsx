import React from "react";

function CreateArea(props) {

    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    return (
        <div>
            <form onSubmit={(e) => {
                    props.onAdd(title, content);
                    setTitle("");
                    setContent("");
                    e.preventDefault();
                }}>
                <input name="title" placeholder="Title" value={title}
                    onChange={(e) => {
                        const value = e.target.value;
                        setTitle(value);
                    }}
                />
                <textarea name="content" placeholder="Take a note..." rows="3" value={content}
                    onChange={(e) => {
                        const value = e.target.value;
                        setContent(value);
                    }}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
