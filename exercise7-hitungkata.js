function hitungJumlahKata(kalimat) {
    var spasi = 1 //untuk menghitung kata pertama//

    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            spasi += 1
        }
    } return spasi;
}


// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5