export function Entry(title, body){
  console.log("HEY ENTRY IMPORTED!");
  this.title = title;
  this.body = body;
}

Entry.prototype.getWords = function(body){
  console.log(body);
  return "getWords called";
};

Entry.prototype.getVowels = function(body){
  console.log(body);
  return "getVowels called";
};

Entry.prototype.getConsonants = function(body){
  console.log(body);
  return "getConsonants called";
};

Entry.prototype.getTeaser = function(body){
  console.log(body);
  return "getTeaser called";
};
