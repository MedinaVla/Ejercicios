const { readFileSync } = require('fs');

const readTextFile = (filename) => {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    try {
        const result = eval(arr.join(' '))
        return result;

    } catch (error) {
        console.log('ERROR :>> ', error);
    }
}




const result = readTextFile('./example.txt');
console.log('result :>> ', result);