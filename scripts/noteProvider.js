// Make empty array to put data into for later 
let notes = []
// Build method to set data into that array 
export const setNotes = (notesArray) => {
  notes = notesArray.slice()
}
// Build method to use the array after setting the data
export const useNotes = () => {
  useNotes = notes.slice()
}
// Build get method to retrieve data from the database
export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then(response => response.json)
    .then(setNotes)
}
// Build post method to save data to the database
export const saveNotes = (note) => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  }).then(getNotes)
}
// build delete method to remove data from the database
export const deleteNotes = (noteId) => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
    method: "DELETE"
  }).then(getNotes)
}
// build put method to edit data on the database
export const editNotes = (noteObject) => {
  return fetch(`http://localhost:8088/notes/${noteObject.id}` {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(noteObject)
  }).then(getNotes)
}