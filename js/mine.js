import {Mars_rover} from "./rover.js";

let myMars_rover = new Mars_rover([4,2], 'East', 'FLFFFRFLB');
let arr = myMars_rover.getCommands(myMars_rover.command)
for(let i =0 ; i < arr.length ; i++){
if(arr[i]=='L'|| arr[i]=='R'){
    myMars_rover.rotate(arr[i])
}
else{
    myMars_rover.move(arr[i])
}
}
console.log(`current rover location is ${myMars_rover.location} and it's direction is ${myMars_rover.direction} `);


