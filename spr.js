
//spread operators
let x=[6,7,8,9]
let b =[1,2,3,4,5]
console.log(...b,...x); 

function rest(a,c,...b)
{
    console.log(a,b,c)
}
rest(1,2,3,4,5)