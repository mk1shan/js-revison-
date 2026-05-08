// function reverse(str){

//     let reversed = '' 

//     // for (let i=0; i < str.length; i++){
        
//     //     reversed = str[i] + reversed
//     // }

//     // for (let char of str){
//     //     reversed = char+ reversed
//     // }


//     // return reversed 

// }


function reverse(str){
    const strarray = str.split('');

    strarray.reverse()

    return strarray.join('')
}


console.log(reverse('mudipa kishan'))
