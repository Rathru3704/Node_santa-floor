const fs = require('fs');  // fs: file system module

const santaFloor = () => {
    console.time('Runtime');  // console.time(label)

    fs.readFile('./2015_day01_santa.txt', (err, data) => {  // fs.readFile is asynchronous
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