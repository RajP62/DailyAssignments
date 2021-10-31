var {time} = require('./timetest.js');

function test(str,func){
    console.log(str);
    func();
}

test('it should give 0days, 0hours, 5minutes, 0seconds',()=>{
    let res_time = time(300000);
    console.log(res_time);
});
console.log("------------------")
test('it should give 0days, 12hours, 45minutes, 23seconds',()=>{
    let res_time = time(45923838);
    console.log(res_time);
});
console.log("------------------")
test('it should give 8days, 15hours, 35minutes, 33seconds',()=>{
    let res_time = time(747333733);
    console.log(res_time);
});
console.log("------------------")
test('it should give 0days, 6hours, 36minutes, 17seconds',()=>{
    let res_time = time(887777888);
    console.log(res_time);
});
console.log("------------------")
test('it should give 9690days, 18hours, 26minutes, 23seconds',()=>{
    let res_time = time(837282383883);
    console.log(res_time);
});