function angkaPalindrome(num) {
    var palindrome = false
    
    while (palindrome === false){
        num = num + 1;
        palindrome = true
        //fungsi penentu benar dan salah
        for (var i = 0; i < num.toString().length / 2; i++) {
            if (num.toString()[i] !== num.toString()[num.toString().length - 1 - i]) {
                palindrome = false
            }
        }  
    }

    return num;
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001