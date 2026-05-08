function palindrome(str){

    // let revsed = ''

    // for (let i=0;i<str.length;i++){
    //     revsed = str[i]+revsed
    // }

    // return str == revsed? true:false;



    const reverse = str.split('').reverse().join('')

    return str== reverse? true: false

}

console.log(palindrome('mudipa'))
console.log(palindrome('racecar'))
