import './styles.css';
import { Entry } from './entry.js';

$(document).ready(function() {
  $("#entryForm").submit(function(event) {
    event.preventDefault();
    let titleInput = $("#titleEntry").val();
    let bodyInput = $("#bodyEntry").val();
    var newEntry = new Entry(titleInput, bodyInput);

    $("#titleDump").text(newEntry.title);
    $("#bodyDump").text("Body: "+ newEntry.body);
    $("#wordCount").text("Words: "+ newEntry.getWords(newEntry.body));
    $("#vowelCount").text("Vowels: "+ newEntry.getVowels(newEntry.body));
    $("#consonantCount").text("Consonants: "+ newEntry.getConsonants(newEntry.body));
    $("#teaser").text("Teaser: "+ newEntry.getTeaser(newEntry.body));
  });


});
