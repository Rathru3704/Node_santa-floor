const fs = require('fs');

const wrappingPaper = () =>{
    fs.readFile('./2015_day02_elvesPresent.txt', (err, data) => {
        const elvesPresent = data.toString().split('\r\n');

        const totalPaper = elvesPresent.reduce((total, _lwh) => {
            const lwh = _lwh.split('x');  // [length, width, height]
            const volume = lwh.reduce((v, dimension) => v * dimension);
            const area = lwh.reduce((sum, square) => sum + volume / square, 0);

            return total
                 + 2 * area
                 + volume / Math.max(...lwh);  // *** The spread operator is a shorter way of writing the apply solution to get the maximum of an array ***
        }, 0);
        console.log(totalPaper);
    })
}
wrappingPaper();