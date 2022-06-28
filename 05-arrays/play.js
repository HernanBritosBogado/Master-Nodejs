const person = {
  name: 'Hernan',
  age: 24,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['box', 'futbol','voley'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
