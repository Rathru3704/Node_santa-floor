const fs = require('fs');

const wrappingRibbon = () => {
    fs.readFile('./2015_day02_elvesPresent.txt', (err, data) => {
        const elvesPresent = data.toString().split('\r\n');

        const totalRibbon = elvesPresent.reduce((total, _lwh) => {
            const lwh = _lwh.split('x');
            const volume = lwh.reduce((v, dimension) => v * dimension);
            const smallPerimeter = lwh.reduce((sum, length) => sum + parseInt(length, 10), 0);

            return total
                 + 2 * (smallPerimeter - Math.max(...lwh))
                 + volume;
        }, 0);
        console.log(totalRibbon);
    })
}
wrappingRibbon();