function findSum(matrix,m,n){
    // m is row & n is col
    let sum = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            sum+= matrix[i][j];
        }
    }
    return sum;
}

module.exports = {findSum}