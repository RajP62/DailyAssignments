var {isValidPass} = require('./validpass.js');

function test(str,func){
    console.log(str);
    func();
}

function expect(a){
    function toBe(b){
        if(a===b){
            console.log('Success');
        }
        else{
            console.log(`Expected : ${a}, result : ${b}`);
        }
    }
    return {toBe};
}

expect(isValidPass('Hey!amRaj213')).toBe(true);
expect(isValidPass('U4pJI9mb')).toBe(false);
expect(isValidPass('D;1Si]7!')).toBe(true);
expect(isValidPass('a11Black$')).toBe(true);
expect(isValidPass('n!LoveMyPiano')).toBe(false);
expect(isValidPass('jelly22fi$h')).toBe(false);
expect(isValidPass('Karm@beatsDogm@')).toBe(false);
expect(isValidPass('i7ovemydog!!')).toBe(false);
expect(isValidPass('Dog.lov3r')).toBe(true);
expect(isValidPass('C@ts-and-Dogs-Living-together')).toBe(false);