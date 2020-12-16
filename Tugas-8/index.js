let readBooks = require('./callback');

let books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
];

let time = 10000;
let i = 0;

let call =  _ => {
    if(i < books.length){
        readBooks(time, books[i], sisa => {
            time = sisa;
            i++;
            call();
        })
    } else {
        readBooks(time, books[0], sisa => {
            time = sisa;
        })
    }
}

call();