// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

<<<<<<< HEAD:main/main.js
function disemvowel(str) {
  console.log(str.replace(/[aeiouAEIOU]/g, ''))
}


disemvowel('This is a troll attacking your comment section!')
=======


function disemvowel(str){
  return str.replace(/[aeiouAEIOU]/g, '');
}

console.log(disemvowel('This is a troll attacking your comment section!'));
>>>>>>> c079ceb59693c46fdfbd4107e8c55187035e7947:main.js
