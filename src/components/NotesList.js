import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList({ notes, handelAddNote, handelDeleteNote }) {
  return (
    <div className="notes-list">
      {notes &&
        notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handelDeleteNote={handelDeleteNote}
          />
        ))}
      <AddNote handelAddNote={handelAddNote} />
    </div>
  );
}
