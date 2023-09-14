function printStarPattern() {
    let row = 10
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < i + 1; j++) {
            console.log("*");
        }
        console.log();
    }
}

printStarPattern();


function printPyramidStarPattern(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i; j++) {
            console.log(" ");
        }
        for (let j = 0; j <= i; j++) {
            console.log("*");
        }
        console.log();
    }
}

printPyramidStarPattern(5);

function printHollowDiamondStarPattern(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i - 1; j++) {
            console.log(" ");
        }
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                console.log("*");
            } else {
                console.log(" ");
            }
        }
        console.log();
    }
}

printHollowDiamondStarPattern(5);
