'use strict';

const all_courses = 'Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti, Eros Fani';
console.log(all_courses);

var splitted_courses = all_courses.split(',');

console.log(splitted_courses);
for(let i=0; i<splitted_courses.length; i++){
    splitted_courses[i] = splitted_courses[i].trim();
}

console.log(splitted_courses);
const acronyms = [];
splitted_courses.forEach(element => {
    let acro = ""
    element.split(" ").forEach(element2 => {
        acro += element2[0].toUpperCase();
    });
    acronyms.push(acro);
});


console.log(acronyms);

function compare_len(a, b){
    return a.length - b.length;
}
acronyms.sort(compare_len)

console.log(acronyms)

const compare_len2 = (a,b) => {return a.length-b.length};
const compare_len3 = (a,b) =>  a.length-b.length;

setTimeout(console.log(1, new Date()), 2000)
setTimeout(()=>{console.log(1, new Date())}, 2000)