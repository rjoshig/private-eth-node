function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}

==================
var x = myFunction(4, 3);    // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;            // Function returns the product of a and b
}

//strings
var x = "John Doe";
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

var x = 123;
x.toString();      
Boolean(10 > 9)   



if (hour < 18) {
    greeting = "Good day";
}

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

typeconversion
typeof "John"                 // Returns "string" 
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"





switch(expression) {
    case x:
        code block
        break;
    case y:
        code block
        break;
    default:
        code block
}


var i;
for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
}

while (i < 10) {
    text += "The number is " + i;
    i++;
}






try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
} 
finally {
    Block of code to be executed regardless of the try / catch result
}

If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
This code example will declare a global variable carName, even if the value is assigned inside a function.


myFunction();

// code here can use carName 

function myFunction() {
    carName = "Volvo";
}





var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
personalbar.firstName

Variable and function names written as camelCase
Global variables written in UPPERCASE (We don't, but it's quite common)
Constants (like PI) written in UPPERCASE


==========================GETH EXAM
const http = require('http');
var fs = require('fs');
var net = require('net');

var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.IpcProvider('/home/davide/Documents/Ether/5th/geth.ipc', net)); 

console.log(web3.version);

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end(web3.version+' '+console.log(web3.currentProvider)+' '+console.log(web3.eth.accounts)+' '+web3.contentProvider);


});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`+web3.eth.accounts[0]);
});
    
    , pseudoElt)








   # get vslue from html

    document.getElementById('textbox_id').value
    document.getElementsByClassName('class_name')[whole_number].value
    https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript








// content of index.js
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})