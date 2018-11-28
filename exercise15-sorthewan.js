function groupAnimals(animals) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var simpan = [];
    var susun =[];

    for (var i = 0; i < alphabet.length; i++){
        for (var j = 0; j < animals.length; j++){
            if (alphabet[i] === animals[j][0]){
                simpan.push(animals[j])
            }
        } 
        if (simpan.length > 0){
            susun.push(simpan)
        }  
        simpan = []
    } return susun;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]