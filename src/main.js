import './styles.css';
import { Entry } from './entry.js';

var title = "test title";
var body = "HEYYYYY this is a test of the Entry object.";
var newEntry = new Entry(title, body);

console.log(newEntry.getWords(body));
console.log(newEntry.getVowels(body));
console.log(newEntry.getConsonants(body));
console.log(newEntry.getTeaser(body));
