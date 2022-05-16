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

let changeAgeOfSusanne = names.map(user => {
    if(user.name == 'Susanne'){
        user.age =22;
    } 
    return user;
}) 
console.log(changeAgeOfSusanne);

let numbers = [1,2,3,4,5,6,7];
let power2 = numbers.map(number => number * number);
console.log(power2);

let cart = [
    {
        product_id: 89898,
        product_name: 'Napkin red',
        product_price: 6.50,
        quantity: 10
    },
    {
        product_id: 123,
        product_name: 'Plastic forks',
        product_price: 1.25,
        quantity: 15
    }
];

/*let total = cart.map(
    product => product.product_price * product.quantity
).reduce((acc, current) => acc += current,0);*/

let total = cart.reduce((acc, current) =>
    acc += current.product_price * current.quantity,0
);
console.log(total);