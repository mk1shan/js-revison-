function reverse(str){

    let reversed = '' 

    // for (let i=0; i < str.length; i++){
        
    //     reversed = str[i] + reversed
    // }

    for (let char of str){
        reversed = char+ reversed
    }


    return reversed 

}

console.log(reverse('mudipa kishan'))
