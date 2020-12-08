//If-else
var nama = "Jhon";
var peran = "Werewolf";

if(nama.length >= 1){
    if(peran === "Penyihir"){
        console.log(`Selamat datang di dunia werewolf, ${nama}`);
        console.log(`Halo Penyihir ${nama}, Kamu dapat melihat siapa yang menjadi werewolf`);
    } else if(peran === "Guard"){
        console.log(`Selamat datang di dunia werewolf, ${nama}`);
        console.log(`Halo Guard ${nama}, kamu akan melindungi temanmu dari serangan werewolf`);
    } else if(peran === "Werewolf"){
        console.log(`Selamat datang di dunia werewolf ${nama}`);
        console.log(`Halo Werewolf ${nama}, kamu akan memakan mangsa setiap malam!`);
    } else {
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game`);
    }
} else {
    console.log(`Nama harus diisi`);
}

console.log('\n');


//Switch Case

var hari = 21;
var bulan = 12;
var tahun = 2020;

switch(bulan) {
    case 1:
        console.log(`${hari} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${hari} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${hari} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${hari} April ${tahun}`);
        break;
    case 5:
        console.log(`${hari} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${hari} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${hari} Juli ${tahun}`);
        break;
    case 8:
        console.log(`${hari} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`${hari} September ${tahun}`);
        break;
    case 10:
        console.log(`${hari} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${hari} November ${tahun}`);
        break;
    case 12:
        console.log(`${hari} Desember ${tahun}`);
        break;
    default:
        console.log(`Input bulan salah`);
        break;
}