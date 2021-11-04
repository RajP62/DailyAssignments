function isValidSudoku(sudoku){
    // for testing row
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            // for columns
            for(let k=0; k<9; k++){
                if(k===j){
                    continue;
                }
                if(sudoku[i][j]===sudoku[i][k]){
                    return false;
                }
            }
            // for rows
            for(let k=0; k<9; k++){
                if(k===i){
                    continue;
                }
                if(sudoku[k][j]===sudoku[i][j]){
                    return false;
                }
            }
            // for inner matrices
            let r = Math.floor(i/3)*3;
            let c = Math.floor(j/3)*3;
            for(let k=0; k<3; k++){
                for(let l=0; l<3; l++){
                    if((r+k===i) && (l+c===j)){
                        continue;
                    }
                    if(sudoku[r+k][l+c]===sudoku[i][j]){
                        return false;
                    }
                }
            }

        }
    }

    return true;
}

module.exports = {isValidSudoku}