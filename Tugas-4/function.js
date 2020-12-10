//Soal 1
function teriak(){
    return "Halo Sanbers!";
}

console.log(teriak());

console.log('\n');

//Soal 2
let kalikan = (param1, param2) => param1 * param2;

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);


console.log('\n');

//Soal 3
let introduce = (name, age, address, hobby) => {
    return `Nama Saya ${name}, umur Saya ${age} tahun, alamat Saya di ${address}, dan Saya punya hobi yaitu ${hobby}!`
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);