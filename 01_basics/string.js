const name = "rudradev"
const repoCount = 3

console.log(name +  repoCount);
console.log(`${name} has ${repoCount} repositories`); // called string interpolation

const gameName =new String("hello to my new learning codes"); 

console.log(gameName[1]);

console.log(gameName.__proto__); // object is accesabel by this


console.log(gameName.length); // length is a property of string

console.log(gameName.toUpperCase()); // toUpperCase is a method of string


console.log(gameName.charAt(2)); // charAt is a method of string

console.log(gameName.indexOf('to')); // indexOf is a method of string   

const newString = gameName.substring(0,4);
console.log(newString);

const anotehrString = gameName.slice(-2,4);
console.log(anotehrString);

// hwo can we remove the unwanted spaces from the string which also saves the space and increases the accuricy of he program
const newwStringOne = "    rudradev              " 
console.log(newwStringOne);
console.log(newwStringOne.trim()); //here hwo its done

const url = "https://www.google.com/rudradev%20singh";
console.log(url.replace('%20','-')); // here we can replace the spaces with the -
console.log(url.includes('google')); // here we can check if the string contains the google or not hai to true nahi to false

// convert the string to hte 

console.log(gameName.split('-'));





