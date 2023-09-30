import React, { useContext } from 'react'
import NoteContext from '../Context/notes/noteContext';

const NoteItem = (props) => {
    const { deleteNote } = useContext(NoteContext);
    const { note, updateNote } = props;
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <div className='d-flex align-items-center'>
                            <h5 className="card-title">{note.title}</h5>
                            <div className="ml-auto">
                                <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note); }}></i>
                                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id); props.showAlert(' Note Deleted', 'success'); }}></i>
                            </div>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NoteItem
