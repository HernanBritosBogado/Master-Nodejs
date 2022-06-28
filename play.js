/*

let & const
arrow function, object "this", scope

*/

const person = {
  name : "Hernan",
  age:24,
  greet: () => {
    console.log('Hi, I am '+ this.name);
  },
  /* greet: function(){
    console.log('Hi, I am '+ this.name);
  } */
  /* greet2() {
    console.log('Hi, I am '+ this.name);
  } */
};

/*
Method map
*/
const hobbies = ["Box","Futbol","voley","Athletic"];

//person.greet();
//console.log(person);
//console.log(hobbies.map(hobby =>  "Hobbie: " + hobby ));
//console.log(hobbies);

/*

*/
hobbies.push("Programming");
console.log(hobbies);
