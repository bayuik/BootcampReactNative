//Soal 1 - while
let i = 0;
while(i <= 21){
    if(i === 0){
        console.log('LOOPING PERTAMA');
    } else if(i % 2 === 0){
        console.log(`${i} - I love coding`);
    } else if(i > 20){
        let j = i;
        while(j > 0){
            if(j > 20){
                console.log('LOOPING KEDUA');
            } else if(j % 2 === 0){
                console.log(`${j} - I will become a mobile developer`);
            }
            j--;
        }
    }
    i++;
}

console.log('\n');

//Soal no 2 - for
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 2 === 1){
        console.log(`${i} - I Love Coding`);
    } else if(i % 2 === 1){
        console.log(`${i} - Santai`);
    } else {
        console.log(`${i} - Berkualitas`);
    }
}

console.log('\n');

//Soal 3 - Persegi panjang #
for(let i = 0; i < 4; i++){
    let hasil = '';
    for(let j = 0; j < 8; j++){
        hasil += "#";
    }
    console.log(hasil);
}


console.log('\n');

//Soal 4 - Membuat tangga
for(let i = 1; i <= 7; i++){
    let hasil = "";
    for(let j = 1; j <= i; j++){
        hasil += "#";
    }
    console.log(hasil);
}


console.log('\n');

//Soal 5 - Papan catur
for(let i = 1; i <= 8; i++){
    let hasil = "";
    for(let j = 1; j <= 4; j++){
        if(i % 2 === 1){
            hasil += " #";
        } else {
            hasil += "# ";
        }
    }
    console.log(hasil);
}