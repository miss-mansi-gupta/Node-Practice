import { useState, useEffect } from 'react'
import axios from "axios"

const App = () => {
  const [notes, setNotes] = useState([])

  // console.log("hello integration")

  function fetchNotes() {
    axios.get('https://node-practice-yhph.onrender.com/api/notes')
      .then((res) => {
        setNotes(res.data.notes)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements
    axios.post('https://node-practice-yhph.onrender.com/api/notes', {
      title: title.value,
      description: description.value
    })
      .then(res => {
        console.log(res.data.notes)
        fetchNotes()
      })
  }

  function handleDeleteNote(noteId) {
    console.log(noteId)
    axios.delete('https://node-practice-yhph.onrender.com/api/notes/'+noteId)
    .then(res => {
      console.log(res.data)
      fetchNotes()
    })
  }

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter title" name="title" id="" />
        <input type="text" placeholder="Enter description" name="description" id="" />
        <button>Create note</button>
      </form>
      <div className="notes">
        {
          notes.map((note, idx) => {
            return <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => {handleDeleteNote(note._id)}}>Delete</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
