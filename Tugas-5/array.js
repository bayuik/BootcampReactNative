//Soal 1 - Range
let range = (startNum, finishNum) => {
    let result = [];
    if(startNum == null || finishNum == null){
            result.push(-1)
    } else if(startNum < finishNum) {
        for(startNum; startNum <= finishNum; startNum++){
            result.push(startNum);
        }
    } else if(startNum > finishNum){
        for(startNum; startNum >= finishNum; startNum--){
            result.push(startNum);
        }
    }
    return result;
}

console.log(range(1, 10));
console.log(range(1));
console.log(range(11,18));
console.log(range(54,50));
console.log(range());

console.log('\n');

//Soal 2 - Range with step
let rangeWithStep = (startNum, finishNum, step) => {
    let result = [];
    if(startNum == null || finishNum == null){
        result.push(-1)
    } else if(startNum < finishNum) {
        for(startNum; startNum <= finishNum; startNum+=step){
            result.push(startNum);
        }
    } else if(startNum > finishNum){
        for(startNum; startNum >= finishNum; startNum-=step){
            result.push(startNum);
        }
    }
    return result;
}

console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep(5, 2, 1));
console.log(rangeWithStep(29, 2, 4));

console.log('\n');


//Soal 3 - Sum of range
let sum = (startNum, finishNum, step) => {
    let result = [];
    if(startNum == null || finishNum == null){
        result.push(startNum != null ? startNum : 0);
    } else if(startNum < finishNum) {
        for(startNum; startNum <= finishNum; step == null ? startNum++ : startNum+=step){
            result.push(startNum);
        }
    } else if(startNum > finishNum){
        for(startNum; startNum >= finishNum; step == null ? startNum-- : startNum-=step){
            result.push(startNum);
        }
    }

    let hasil = 0;
    for(number of result){
        hasil+=number;
    }
    return hasil;
}

console.log(sum(1,10));
console.log(sum(5, 50, 2));
console.log(sum(15,10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());

console.log('\n');


//Soal 4 - Array multidimensi
let dataHandling = element => {
    element.map(x => {
        console.log(`Nomor ID: ${x[0]} \nNama Lengkap: ${x[1]} \nTTL: ${x[2]} ${x[3]} \nHobi: ${x[4]} \n`)
    })
}

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);

console.log('\n');


//Soal 5 - Balik kata
let balikKata = str => {
    let balik = '';
    for(let i = str.length - 1; i >= 0; i--){
        balik+=str[i];
    }
    return balik;
}

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));

console.log('\n');


//Soal 6 - Metode Array

let dataHandling2 = element => {
    element.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung")
    element.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(element);

    let methode2 = element[3].split('/');
    let methode = element[3].split('/');
    let month = parseInt(methode2[1]);
    switch(month){
        case 1:
            console.log('Januari');
            break;
        case 2:
            console.log('Februari');
            break;
        case 3:
            console.log('Maret');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('Mei');
            break;
        case 6:
            console.log('Juni');
            break;
        case 7:
            console.log('Juli');
            break;
        case 8:
            console.log('Agustus');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('Oktober');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('Desember');
            break;
    }

    let methode3 = methode2.sort((a,b) => b - a);
    console.log(methode3);

    let methode4 = methode.join("-");
    console.log(methode4);

    let methode5 = element[1].slice(0,15);
    console.log(methode5);
}


dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])