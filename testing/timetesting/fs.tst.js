var {findSum} = require('./findSum.js');

function test(str,fn){
    console.log(str);
    fn();
}

function expect(x){
    function toBe(y){
       if(x===y){
           console.log('Success');
       }
       else{
           console.log(`Expected : ${y}, output : ${x}`);
       }
    }
    function toNotBe(y){
        if(x!==y){
            console.log('Success');
        }
        else{
            console.log(`Failed as both are Same`);
        }
    }

    return {toBe, toNotBe};
}

test('It should give 12', ()=>{
    let ans = findSum([[3,4,5]],1,3);
    if(ans===12){
        console.log('Success');
    }
    else{
        console.log(`Expected : ${12}, result : ${ans}`);
    }
});


test('It should give 34', ()=>{
    let ans = findSum([[6,3,5],[7,4,2],[6,98,4]],3,3);
    if(ans===135){
        console.log(`Success`);
    }
    else{
        console.log(`Expected : ${135}, result : ${ans}`);
    }
});

test('It should give 13', ()=>{
    let ans = findSum([[4,1,1],[1,1,1],[0,0,0],[1,1,1]],4,3);
    if(ans===13){
        console.log("Success");
    }
    else{
        console.log(`Expected : ${13}, result : ${ans}`)
    }
})

// Use of expect
expect(findSum([[-7,-3,-54],[-6,-4,-4],[-3,-5,-5]],3,3)).toNotBe(-91);

expect(findSum([[-6,-3,-5,-4,-6,54],[5,67,3,5,6,5]],2,6)).toBe(-56);

expect(findSum([[5.64,6.34,-6.323,-6.33]], 1,4)).toBe(-0.673);
expect(findSum([[-5,3.53,0,0,0.64],[6,3,2,4,7],[4/5,5/2,6,3,3]],3)).toBe(-0.673);
expect(findSum([[5.64,6.34,-6.323,-6.33]], 1,4)).toBe(-0.673);


