const fstat = require("fs");
const fs = require("fs");

const genders = ["male", "female"];

const maleNames = ["John", "Andrzej", "Pierr", "Katsu"];

const femaleNames = ["Samantha", "Olga", "Namiye", "Iwona"];

const lastNames = ["Smith", "Rybakow", "Kawada", "Kowalski"];

function randChoice(arr) {
  index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const people = [];

function petla() {
  for (let i = 0; i <= 20; i++) {
    let gender = randChoice(genders);
    let isMale = gender === 'male';
    let firstName = randChoice(isMale ? maleNames : femaleNames);
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let age = Math.floor(Math.random() * 99)+1;

    people.push({
      gender,
      firstName,
      lastName,
      age
    });
  }
}
petla()

console.log(people)

const data = JSON.stringify(people) 

fs.writeFile('people.json', data , (err) => {
    if (err) throw err;
    console.log('File has been succesfully generated! Check people.json');
});
