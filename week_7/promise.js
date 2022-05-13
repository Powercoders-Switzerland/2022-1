let names = [{
    name: "Susanne",
    surname: 'Koenig',
    age: 88
},{
    name: "Mesut",
    surname: 'Asci',
    age: 88
}];
let allSurnames = names.map(user => user.name == 'Susanne' ? {...user, age:22 } : user);
console.log(allSurnames);

let numbers = [1,2,3,4,5,6,7];
let power2 = numbers.map(number => number * number);
console.log(power2);