function pasanganTerbesar(num) {
    var arr = num.toString().split("");
    // console.log(arr)
    var tampung = [];

    for (var i = 0; i < arr.length - 1; i++) {
        tampung[i] = Number(arr[i] + arr[i + 1]);
    }           
    // console.log(tampung)
    // console.log(tampung.length)

    var terbesar = tampung[0];
    
    for (var j = 1; j < tampung.length ; j++) {
        // console.log(tampung[j]);
        
        if (tampung[j] > terbesar) {
            terbesar = tampung[j]
        }
    }
    return terbesar;
}



//   TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99