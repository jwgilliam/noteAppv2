// Import use notes and delete function from provider
import { useNotes, deleteNotes, editNotes } from "./noteProvider.js";
//import note component
import noteComponent from "./note.js";
//Write contentTarget and eventHub
const contentTarget = document.querySelector(".note-list-container")
const eventHub = document.querySelector(".container")
// write note list component (wrapper)
const noteListComponent = () => {
  // write logic for click events
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "show_notes_button") {
      const listOfNotes = useNotes()
      console.log(listOfNotes)
      render(listOfNotes)

    }

    if (clickEvent.target.id.startsWith("delete-note--")) {
      const [prefix, noteId] = clickEvent.target.id.split("--")
      // console.log(noteId)
      deleteNotes(noteId).then(() => {
        const newNotes = useNotes()
        render(newNotes)
      })
    }

    if (clickEvent.target.id.startsWith("edit-note--")) {
      const [prefix, noteId] = clickEvent.target.id.split("--")
      const editEvent = new CustomEvent("editButtonClicked", {
        detail: {
          noteId: noteId
        }
      })
      eventHub.dispatchEvent(editEvent)
      console.log(noteId)
    }

    eventHub.addEventListener("editButtonClicked", event => {
      const noteToEdit = event.detail.noteId
      const allNotes = useNotes()
      const selectedNote = allNotes.find(
        (currentNote) => {
          return currentNote.id === parseInt(noteToEdit, 10)
        }
      )
      document.querySelector("#note_id").value = selectedNote.id
      document.querySelector("#title_input").value = selectedNote.title
      document.querySelector("#body_input").value = selectedNote.body

    })



  })



  // Write function that maps individual objects from the database (render)
  const render = (notes) => {
    contentTarget.innerHTML = `
    <section class="note_card_container">
    <div class="note_card">
    ${notes.map(note => {
      return noteComponent(note)
    }).join("")
      }
    </div>
    </section>
    `
  }
}



//export list component 
export default noteListComponent
