function balikString(kata) {
    var stringBaru = ''
    for(var i = kata.length-1; i >= 0; i--){
     stringBaru += kata[i];   
    } return stringBaru;
}

// TEST CASE
console.log(balikString('hello'));