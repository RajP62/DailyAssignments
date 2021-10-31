function expect(a){
    function toEqual(b){
        if(a.length===b.length){
            for(let i=0; i<a.length; i++){
                if(a[i]!=b[i]){
                    return false;
                }
            }
        }
        else{
            return false;
        }
        if(Object.keys(a).length===Object.keys(b).length){
            for(k in a){
                if(a[k] !== b[k]){
                    return false;
                }
            }
        }
        else{
            return false;
        }
        return true;
    }
    return {toEqual};
}

console.log(expect([4,5,3,5,5]).toEqual([4,5,3,4,5]));
console.log(expect([4,5,3,5,5]).toEqual([4,5,3,5,5]));
console.log(expect({a:'14',b:null}).toEqual({b:null,a:'14'}));
console.log(expect({h:54,b:54,n:'43',x:66}).toEqual({n:'43',x:66,h:54,b:54}));
console.log(expect([4,5]).toEqual([4,5,3,4,5]));
console.log(expect({shashi:'Not attempted'}).toEqual({rajesh:90,nick:80,jack:33,shashi:'Not attempted'}));