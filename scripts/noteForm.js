// Import save and edit functions from provider
import { saveNotes, editNotes } from "./noteProvider.js";

// Add eventHub and contentTarget
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".note-form-component")

// Add note form component
const noteFormComponent = () => {

  // build click events for button
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save_notes_button") {

    }
  })

  // build form(html) to be inserted with contentTarget (render method)
  const render = () => {
    contentTarget.innerHTML = `
    
    <div class="note_form">
    
    </div>

    `
  }
  // Call render

  render()

}


// Export note form component 

export default noteFormComponent