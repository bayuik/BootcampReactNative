//Soal 1 - Mengubah menjadi arrow function
const golden = () => {
    console.log("this is golden!");
}

golden();

console.log('\n');



//Soal 2 - ubah ke object literal
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName(){
            console.log(`${firstName} ${lastName}`);
        }
    }
}

newFunction("William", "Imoh").fullName();

console.log('\n');

//Soal 3 - Destructing
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation);

console.log('\n');

//Soal 4 - spreading
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);

console.log('\n');


//Soal - template literals
const planet = "earth";
const view = "glass";

var before = `Lorem ${view} dolor sit amet, 
consectetur adipiscing elit, ${planet} do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam`;

console.log(before);