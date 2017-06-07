function MazeMaker() {
    
}


function theLongestPath(maze, startRow, startCol, moveRow, moveCol) {

    let mazeList = [];

    let visitedList = [];
    
    for(let mazeRow = 0; mazeRow < maze.length; mazeRow++) {

        let mazeRowList = [];
        let visitedRowList = [];
		
        for(let mazeCol = 0; mazeCol < maze[mazeRow].length; mazeCol++) {
            mazeRowList.push(maze[mazeRow][mazeCol]);
            visitedRowList.push(false);
        }

        mazeList.push(mazeRowList);
        visitedList.push(visitedRowList);
    }

    visitedList[startRow][startCol] = true;

    let endRow = mazeList.length - 1;
    let endCol = mazeList[0].length - 1;

    let movingCount = 0;

    for(let row = 0; row < mazeList.length; row++) {
        
        for(let col = 0; col < mazeList[row].length; col++) {
            let isMoved = false;
            if(visitedList[row][col]) {
                
                 for(let index = 0; index < moveRow.length; index++) {
                     
                     let nextRow = endRow > 0 ? row + moveRow[index] : row;
                     let nextCol = endCol > 0 ? col + moveCol[index] : col;
                     
                     if(nextRow < 0 || nextCol < 0 || nextRow > endRow || nextCol > endCol) {
                         continue;
                     }
                     
                     if(mazeList[nextRow][nextCol] === '.' && !visitedList[nextRow][nextCol]) {
                         visitedList[nextRow][nextCol] = true;
                         isMoved = true;
                         
                     }
                 }

                 if(isMoved) {
                
                    if(!visitedList[endRow][endCol]) {
                        movingCount++;
                    }
                }
            }

            
            
        }
    }

    // if(!visitedList[endRow][endCol]) {
    //     return -1;
    // } else {
    //     return movingCount;
    // }
    let result = movingCount;

    for(let row = 0; row < mazeList.length; row++) {
        for(let col = 0; col < mazeList[row].length; col++) {
            if(mazeList[row][col] === '.' && !visitedList[row][col]) {
                result = -1;
                break;
            }
        }
    }

    return result;
}