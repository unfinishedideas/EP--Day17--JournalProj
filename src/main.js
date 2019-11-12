import './styles.css';
import { Entry } from './entry.js';

$(document).ready(function() {
  $("#entryForm").submit(function(event) {
    event.preventDefault();
    let titleInput = $("#titleEntry").val();
    let bodyInput = $("#bodyEntry").val();
    var newEntry = new Entry(titleInput, bodyInput);
    $("#titleDump").text(newEntry.title);
    $("#bodyDump").text(newEntry.body);
  })


})
