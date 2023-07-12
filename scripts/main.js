// main.js is where you import javascript functions
import { getNotes } from "./noteProvider";
import noteListComponent from "./noteList.js";
import noteFormComponent from "./noteForm.js";

//call functions that need to run on page load?
getNotes()
noteListComponent()
noteFormComponent()