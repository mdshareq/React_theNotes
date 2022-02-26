import React, { useState } from "react";

export default function AddNote({ handelAddNote }) {
  const [noteText, setNoteText] = useState("");
  const charLimit = 250;

  const handelChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handelSaveClick = () => {
    if (noteText.trim().length > 0) {
      handelAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        wrap="hard"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handelChange}
      />

      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handelSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
