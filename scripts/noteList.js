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
