function time(toConvert){
    let days = Math.floor(toConvert/ (1000 * 60 * 60 * 24));
    let hours = Math.floor((toConvert% (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minute = Math.floor(toConvert%(1000 * 60 * 60)/(1000 * 60));
    let seconds = Math.floor((toConvert%(1000 * 60))/1000);
    let res_time = `${days}Days, ${hours}Hours, ${minute}Minutes, ${seconds}Seconds`;
    return res_time;
}


module.exports = {time};