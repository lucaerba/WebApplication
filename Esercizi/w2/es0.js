'use strict';


function f(strings){
    
    strings.forEach(element => {
        if(element.lenght<2) console.log(" ")
        else if(element.lenght<3) console.log(element+element)
        else if(element.lenght<4) console.log(element+element[element.lenght-1])
        console.log(element.slice(0,2)+element.slice(-2));
    });
}

var strings = ["spring", "it", "cat", "manuel"]
console.log(strings)
f(strings)


