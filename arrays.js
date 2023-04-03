const userName = 'Maria';

console.log(userName.split(''), [...userName], Array.from(userName));

const words = ['one', 'two', 'three'];

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

const numbers = [1, 3, 1, 5, 2, 1, 4];

for (let n of numbers) {
    console.log(n);
}
