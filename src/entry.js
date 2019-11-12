export function Entry(title, body){
  // console.log("HEY ENTRY IMPORTED!");
  this.title = title;
  this.body = body;
}

Entry.prototype.getWords = function(body){
  var wordArray = body.split(" ");
  return wordArray.length;
};

Entry.prototype.getVowels = function(body){
  var charArray = body.split("");
  var countVowel = 0;
  var regex = /[aeiouAEIOU/s]/g;
  charArray.forEach(function(letter){
    if (letter.match(regex)){
      countVowel ++;
    }
  });
  return countVowel;
};

Entry.prototype.getConsonants = function(body){

  var charArray2 = body.toLowerCase().split("");
  var countConsonant = 0;
  var regex = /[qwrtpsdfghjklzxvbnm/s]/g;
  for (var i = 0; i < charArray2.length; i++){
    if (charArray2[i].match(regex)) {
      countConsonant ++;
    }
  }
  return countConsonant;
};

Entry.prototype.getTeaser = function(body){
  var wordArray = body.split(" ");
  var teaserWords = [];
  for (var i = 0; i < 8; i++){
    teaserWords.push(wordArray[i]);
  }
  teaserWords.push("...");
  return teaserWords.join(" ");
};

// /[^aeiouAEIOU\s]/g
