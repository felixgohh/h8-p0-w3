function palindrome(str) {
    var re = /[\W_]/g; 
    
    var lowRegStr = str.toLowerCase().replace(re, '');
       
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    
    if (lowRegStr === reverseStr){
        return true
    } else {
        return false
    }
}

console.log(palindrome('katak'));
