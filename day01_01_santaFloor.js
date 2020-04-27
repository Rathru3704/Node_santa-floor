const fs = require('fs');

const santaFloor = () => {
    console.time('Runtime');

    fs.readFile('./santa.txt', (err, data) => {
        const inst = data.toString();
        let floor = 0;
        for(let i = 0; i < inst.length; i++){
            if(inst[i] === '('){
                floor++;
            }
            if(inst[i] === ')'){
                floor--;
            }
        }
        console.log(floor);
    })

    console.timeEnd('Runtime');
}
santaFloor();