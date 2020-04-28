const fs = require('fs');

const santaFloor = () => {
    console.time('Runtime')

    fs.readFile('./2015_day01_santa.txt', (err, data) => {
        const inst = data.toString();
        let floor = 0;
        for(let i = 0; i < inst.length; i++){
            if(inst[i] === '('){
                floor++;
            }
            if(inst[i] === ')'){
                floor--;
            }
            if(floor === -1){
                console.log(i + 1);
                return i + 1;
            }
        }
    })

    console.timeEnd('Runtime');
}
santaFloor();