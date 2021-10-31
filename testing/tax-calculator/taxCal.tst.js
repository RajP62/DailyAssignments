var {taxCal} = require('./tax_calculator.js');

function expect(a){
    function toBe(b){
        if(a===b){
            console.log(`Success`);
        }
        else{
            console.log(`Expected : ${b}, result : ${a}`);
        }
    }

    return {toBe};
}

// wrong test cases are intentional to check whether it's working properly or not
expect(taxCal(1000000,100000)).toBe(115000);
expect(taxCal(250000,10000)).toBe(-5000);
expect(taxCal(500000,70000)).toBe(5000);
expect(taxCal(850000,100000)).toBe(65000);
expect(taxCal(2000000,500000)).toBe(200000);
expect(taxCal(1200000,400000)).toBe(145000);

