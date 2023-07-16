// Import save and edit functions from provider
import { saveNotes, editNotes } from "./noteProvider.js";

// Add eventHub and contentTarget
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".note-form-container")

// Add note form component
const noteFormComponent = () => {

  // build click events for button
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save_note_button") {
      const newNote = {
        //I had to look up this up
        title: document.querySelector("#title_input").value,
        body: document.querySelector("#body_input").value,
        date: Date.now()
      }
      saveNotes(newNote)
    }
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "edit_note_button") {
      const editedNote = {
        title: document.querySelector(".note_form_title").value,
        body: document.querySelector(".note_form_body").value,
        date: Date.now()
      }
      editNotes(editedNote)
    }
  })

  // build form(html) to be inserted with contentTarget (render method)
  const render = () => {
    contentTarget.innerHTML = `
    
    <div class="note_form">
    <div class="note_form_title">Title: <input type="text" id="title_input"></div>
    <div class="note_form_body">Body: <input type="text" id="body_input"></div>
    <button id="show_notes_button">Show notes</button>
    <button id="save_note_button">Save</button>
    
    </div>

    `
  }
  // Call render

  render()

}


// Export note form component 

export default noteFormComponent