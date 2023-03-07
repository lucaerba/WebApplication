'use strict';

const scores = [18,22,24,30,26,21,23];

var new_scores = [...scores];
//find min
var min = 31;
var min_pos = 0;
var i=0;
var old_avg =0;
new_scores.forEach(x=>{
    old_avg += x;
    if(x<min){ 
        min=x
        min_pos=i
    }
    i++
});
new_scores.splice(min_pos, 1)

min_pos = 0;
i=0;
min = 32;
new_scores.forEach(x=>{
    if(x<min){ 
        min=x
        min_pos=i
    }
    i++
});
new_scores.splice(min_pos, 1)

var new_avg = 0;
new_scores.forEach(x=>{
    new_avg += x
})
new_avg /= new_scores.length;
new_avg = Math.round(new_avg);
old_avg /= scores.length;
old_avg = Math.round(old_avg)

console.log(new_avg+" "+old_avg);
