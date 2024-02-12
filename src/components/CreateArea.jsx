import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);

    function handleClick(e) {
        props.onAdd(title, content);
        setTitle("");
        setContent("");
        e.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isActive && 
                <input name="title" placeholder="Title" value={title}
                    onChange={(e) => {
                        const value = e.target.value;
                        setTitle(value);
                    }}
                />}
                <textarea name="content" placeholder="Take a note..." rows={isActive ? "3" : "1"} value={content}
                    onChange={(e) => {
                        const value = e.target.value;
                        setContent(value);
                    }}
                    onFocus={(e) => setIsActive(true)}
                />
                {isActive && <Zoom in={true}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>}
                {/* <button><AddIcon  /></button> */}
            </form>
        </div>
    );
}

export default CreateArea;
