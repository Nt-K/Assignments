// For Each

var numbers = ['65', '44', '12', '4'];
numbers.forEach(function(value,index){
    console.log("numbers = " +value);
});

console.log("*************************");

var items = ["apple", "orange", "cherry"];
items.forEach(function(value,index){
    console.log("items = " +value);
});

console.log("*************************");

//isArray

var hobbies = ['Sing', 'Dance'];
var isArry = Array.isArray(hobbies);
console.log(isArry);

console.log("*************************");

var numbers = ['23', '45', '56', '77', '90'];
var isArry = Array.isArray(numbers);
console.log(isArry);

console.log("**************************");

hobbies.push('WatchingMovies','Badminton', 'Cricket');   //push
console.log("Hobbies after push = " +hobbies);

hobbies.push('78','34', '56');                 //push
console.log("Hobbies after push = " +numbers);

console.log("**************************");

hobbies.pop();                                      //pop
console.log("Hobbies after pop = " +numbers);

hobbies.pop();                                     //pop
console.log("Hobbies after pop = " +hobbies);

console.log("**************************");

hobbies.unshift('Cook','Walk');
console.log("Hobbies after unshift = " +hobbies);      //unshift

hobbies.unshift('45','67');
console.log("Hobbies after unshift = " +numbers);      //unshift

console.log("*************************");

hobbies.shift();
console.log("Hobbies after shift = " +hobbies);         //shift

numbers.shift();
console.log("Hobbies after shift = " +numbers);         //shift

console.log("***************************");

var hasHobbies= hobbies.includes('sleeping');            // includes
console.log(hasHobbies);

var hasNumbers= numbers.includes('Dancing');            // includes
console.log(hasNumbers);

console.log("***************************");

hobbies.splice(2,0,'read','writ');         // splice
console.log(hobbies);   

numbers.splice(2,0,'56','45');             // splice
console.log(numbers); 

console.log("****************************");

var hobbies = hobbies.slice(0,1);          // slice
console.log(hobbies);
console.log(hobbies);

var numbers = numbers.slice(0,1);         // slice
console.log(numbers);
console.log(numbers);

console.log("***********************************");

var joinHobbies = hobbies.join(' ');                    // join
console.log(joinHobbies);

var joinNumbers = numbers.join(' ');                    // join
console.log(joinNumbers);

console.log("***********************************");

var indexHobbies = hobbies.indexOf('Singing');          // indexOf
console.log(indexHobbies);

var indexNumbers = numbers.indexOf('45');          // indexOf
console.log(indexNumbers);


console.log("***********************************");

var numbers = [10, 20, 30, 40];                          // Map
var nanNumbers = numbers.map((val, index) => {
     val = val + 10;
     return val;
});
console.log("Old Array = "+numbers);
console.log("*****************************");
console.log("New Array = "+nanNumbers);


var Hobbies = ['Dancing', 'Singing', 'Gaming'];                          // Map
var nanHobbies = hobbies.map((val, index) => {
     val = val + 10;
     return val;
});
console.log("Old Array = "+hobbies);
console.log("****************************");
console.log("New Array = "+nanHobbies);


console.log("*****************************");

var newFilterArray =numbers.filter((val,index)=>{       // Filter 
    return val>30;
});
console.log("Old Array Without Filter=" +numbers);
console.log("*****************************");
console.log("New Array With Filter = " +newFilterArray);

console.log("*****************************");

var newFilterArray = hobbies.filter((val,index)=>{       // Filter
    return val>30;
});
console.log("Old Array Without Filter=" +hobbies);
console.log("*****************************");
console.log("New Array With Filter = " +hobbies);




