// Print Odds 1 - 20
console.log(" "); 
console.log("Print Odds 1 - 20"); 

for (var i = 1; i <=20; i++) {
    if(i%2 != 0) {
        console.log(i); 
    }
}




// Deacrising Multiples of 3
console.log(" "); 
console.log("Decreasing Multiples of 3"); 
for (var i = 100; i >= 0; i--) {

    if(i%3 == 0) {
        console.log(i); 
    }
}




// Print the Sequence
console.log(" "); 
console.log("Print the Sequence"); 

for (var i = 4; i >= -3.5; i-=0.5) {
    console.log(i); 
}




// Sigma
console.log(" "); 
console.log("Sigma");

var sum = 0; 

for (var i = 1; i <=100; i++) {
    sum += i; 
}

console.log(sum); 



// Factorial
console.log(" "); 
console.log("Factorial");

var facto = 1; 

for (var i = 1; i <=12; i++) {
    facto *= i; 
}

console.log(facto); 