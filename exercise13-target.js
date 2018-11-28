function targetTerdekat(arr) {
    var temp = 0;
    var jarak = 0;
    var tampung = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x' && temp === 'o') {
            tampung += jarak;
        } else if (arr[i] === 'o' && temp === 'x') {
            tampung += jarak;
        }

        if (arr[i] === 'x') {
            jarak = 1;
            temp = 'x'
        } else if (arr[i] === 'o') {
            jarak = 1;
            temp = 'o'
        } else {
            jarak += 1
        }


    } return tampung
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2