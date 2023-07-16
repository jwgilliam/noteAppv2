// Write note component function 
const noteComponent = (note) => {

  // Write html to model the component 
  return `
  <div class="note_object">
  <div class="note_title">${note.title}</div>
  <div class="note_body">${note.body}</div>
  <div>${new Date(note.date).toDateString('en-US') + " " + new Date(note.date).toTimeString().split("GMT")[0]}</div>
  <button id="edit-note--${note.id}">edit</button>
  <button id="delete-note--${note.id}">delete</button>
  
  </div>
  
  `

}
//I looked up and copied the date thing 


// Export note component function 

export default noteComponent