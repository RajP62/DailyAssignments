function isValidPass(str){
    if(str.length<6){
        console.log('Password should be minimum 6 digits')
        return false;
    }
    else if(!includesNum(str)){
        return false;
    }
    else if(!containSmallNUpper(str)){
        return false;
    }
    else if(!containSymbol(str)){
        return false;
    }

    return true;

}

function includesNum(str){
    for(let i=0; i<str.length; i++){
        if(Number(str[i])%1===0){
            return true;
        }
    }
    console.log("Number is missing");
    return false;

}

function containSmallNUpper(str){
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let flagLower = false;
    let flagUpper = false;
    
    for(let i=0; i<str.length; i++){
        for(let j=0; j<26; j++){
            if(str[i]===lower[j]){
                flagLower = true;
            }
            if(str[i]===upper[j]){
                flagUpper = true;
            }
        }
    }
    if(!flagLower){
        console.log(`Doesn't contain lowercase character`);
    }
    if(!flagUpper){
        console.log(`Doesn't contain uppercase character`);
    }
    return (flagLower&&flagUpper);

}

function containSymbol(str){
    // requres symbol !@#$%^&*(),.<>/';:"][{}\|?
    let checkWith =`!@#$%^&*(),.<>/';:"][{}\|?`;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<checkWith.length; j++){
            if(str[i]===checkWith[j]){
                return true;
            }
        }
    }
    console.log(`Doesn't contain a unique character`);
    return false;
}

module.exports =  {isValidPass}