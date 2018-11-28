// array dengan input baru //
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,1)
    input.splice(1,0,'Roman Alamsyah Elsharawy')
    input.splice(2,1)
    input.splice(2,0,'Provinsi Bandar Lampung')
    input.splice(4,1)
    input.splice(4,0,'Pria')
    input.splice(5,0,'SMA Internasional Metro')
    console.log(input)
}

dataHandling2(input);


// display nama bulan dalam array //
var tanggal = input[3].split('/')
var bulan = tanggal[1];
var stringBulan = bulan.toString()
switch (stringBulan) {
    case '01':
        bulan = 'Januari'
        break;
    case '02':
        bulan = 'Februari'
        break;
    case '03':
        bulan = 'Maret'
        break;
    case '04':
        bulan = 'April'
        break;
    case '05':
        bulan = 'Mei'
        break;
    case '06':
        bulan = 'Juni'
        break;
    case '07':
        bulan = 'Juli'
        break;
    case '08':
        bulan = 'Agustus'
        break;
    case '09':
        bulan = 'September'
        break;
    case '10':
        bulan = 'Oktober'
        break;
    case '11':
        bulan = 'November'
        break;
    case '12':
        bulan = 'Desember'
        break;
    default:
        bulan = 'invalid month'
}

console.log(bulan);


// display tanggal secara descending //
var tanggalSort = tanggal;

function sortDesTanggal (a,b) {
    return b-a
} 
tanggal.sort(sortDesTanggal);

console.log(tanggalSort);


// display tanggal yang sudah di join (-) //
var date = input[3].split('/')
console.log(date.join('-'));


// membatasi nama sebanyak 15 karakter //
var arr2 = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
var nama = arr2[1].toString()

if (nama.length > 15){
    console.log(nama.slice(0,15))
} else {
    console.log(nama)
}