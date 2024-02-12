
import React from 'react';

import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from './Footer';

import notes from '../notes';

function App() {

    const [noteList, setNoteList] = React.useState([
        {
            key: 0,
            title: "Note title",
            content: "Note content",
        }
    ]);
    const [noteId, setNoteId] = React.useState(0);

    function addNote(title, content) {
        if (title || content) {
            setNoteList(noteValue => {
                setNoteId(idValue => idValue + 1);
                return [...noteValue, {
                    key: (noteId+1),
                    title: title,
                    content: content,
                }];
            });
        }
    }

    function removeNote(key) {
        setNoteList(prevValue => prevValue.filter(item => item.key != key));
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {noteList.map(note => 
            <Note 
                key={note.key}
                id={note.key}
                title={note.title} 
                content={note.content} 
                onDelete={removeNote}
            />)}
            <Footer />
        </div>
    );
}

export default App;
