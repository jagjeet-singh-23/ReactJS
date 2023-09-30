import React, { useState } from "react";
import noteContext from "./noteContext";
// Boiler plate for using Context API
// Here we are making a state available to all components

const NoteState = (props) => {
  const host = 'http://127.0.0.1:5000'
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Add a new note
  const addNote = async (title, description, tag) => {
    try {
      // API call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authToken': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const note = await response.json();
      setNotes(notes.concat(note));
      
    } catch (error) {
      console.error(error);
    }
  }

  // Getting all notes
  const getNotes = async () => {
    try {
      // API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authToken': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error(error);
    }
  }

  // Deleting a note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authToken': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      const newNote = notes.filter((note) => { return note._id !== id });
      setNotes(newNote);
    } catch (error) {
      console.error(error);
    }
  }

  // Updating a note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authToken': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      const json = await response.json();
      console.log(json);
      // Logic to update the notes
      let newNote = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNote.length; index++) {
        const element = newNote[index];
        if (element._id === id) {
          newNote[index] = title;
          newNote[index] = description;
          newNote[index] = tag;
          break;
        }
      }
      setNotes(newNote);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;