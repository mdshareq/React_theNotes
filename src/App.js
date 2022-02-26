import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  //Data
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Enter your notes...",
      date: "15/01/2021",
    },
  ]);

  //Search
  const [searchText, setSearchText] = useState("");

  //Dark-mode
  const [darkMode, setDarkMode] = useState(false);

  //Get data on 1st load- saved notes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //Local Storage
  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  //Adding Notes
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };
  //Delete Note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handelSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handelAddNote={addNote}
          handelDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
