function taxCal(income,savings){
    let grossTax = 0;
    let rebate = 0;
    if(income>=1000000){
        grossTax+= ((income-1000000)*3/10)+(500000*1/5)+(250000*1/10);
        rebate+= (savings*1/10);
        if(rebate>50000){
            rebate = 50000;
        }
    }
    else if(income>=500000 && income<1000000){
        grossTax+= ((income-500000)*1/5)+(250000*1/10);
        rebate+= (savings*3/10);
    }
    else if(income>=250000 && income<500000){
        grossTax+= (income-250000)*1/10;
        rebate+= (savings*1/2);
    }
    let netPayable = grossTax-rebate;
    return netPayable;
    
}

module.exports = {taxCal};