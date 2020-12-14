//Soal 1 - array to object
let arrayToObject = arr => {
    let now = new Date();
    let thisYear = now.getFullYear();

    if(arr.length <= 0){
        console.log(`Error! Array tidak ada`);
    } else {
        arr.map((item, i) => {
            let obj = {};
            let year = thisYear - item[3];

            obj.firstName = item[0];
            obj.lastName = item[1];
            obj.gender = item[2];
            obj.age = isNaN(year) || year < 1 ? "Invalid Birth Year" : year;

            let nama = `${i + 1}. ${obj.firstName} ${obj.lastName} :`;

            console.log(nama);
            console.log(obj);
        })
    }
}


var people = [
    ["Bruce", "Banner", "male", 1975],
    ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);

var people2 = [
    ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]
];
arrayToObject(people2)

arrayToObject([])

console.log('\n');



//Soal 2 - shopping time

let shoppingTime = (memberId, money) => {
    if(!memberId){
        return `Mohon maaf, toko X hanya berlaku untuk member saja`;
    } else if(money < 50000){
        return `Mohon maaf, uang tidak cukup`;
    } else {
        let obj = {};
        let listPurchased = [];
        let changeMoney = money;
        let sepatu = {item: 'Sepatu stacattu',harga: 1500000};
        let zoro = {item: 'Baju Zoro',harga: 500000};
        let hn = {item: 'Baju H&N', harga: 250000};
        let uniklooh = {item: 'Sweater Uniklooh', harga: 175000};
        let casing = {item: 'Casing Handphone', harga: 50000};

        for(let i = 0; changeMoney >= 50000; i++){
            if(changeMoney >= sepatu.harga){
                listPurchased.push(sepatu.item);
                changeMoney -= sepatu.harga;
            } else if(changeMoney >= zoro.harga){
                listPurchased.push(zoro.item);
                changeMoney -= zoro.harga;
            } else if(changeMoney >= hn.harga){
                listPurchased.push(hn.item);
                changeMoney -= hn.harga;
            } else if(changeMoney >= uniklooh.harga){
                listPurchased.push(uniklooh.item);
                changeMoney -= uniklooh.harga;
            } else if(changeMoney >= casing.harga){
                listPurchased.push(casing.item);
                changeMoney -= casing.harga;
            }
        }
        obj.memberId = memberId;
        obj.money = money;
        obj.listPurchased = listPurchased;
        obj.changeMoney = changeMoney;

        return obj;
    }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());


console.log('\n');

//Soal 3 - Naik angkot
let naikAngkot = listPenumpang => {
    let rute = ["A", "B", "C", "D", "E", "F"];
    let arr = [];
    
    listPenumpang.map(x => {
        let asal = x[1];
        let tujuan = x[2];

        let hargaAsal;
        let hargaTujuan;
        for(let j = 0; j <= rute.length; j++){
            if(rute[j] == asal){
                hargaAsal = j;
            } else if(rute[j] == tujuan){
                hargaTujuan = j;
            }
        }
        let harga = (hargaTujuan - hargaAsal) * 2000;
        
        let obj = {};
        obj.penumpang = x[0];
        obj.naikDari = x[1];
        obj.tujuan = x[2];
        obj.bayar = harga;
        arr.push(obj);
    })

    return arr;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));