# Mars_Rover

<h1>How To Run The app</h1>
1- create instant from Mars_Rover class Counstractor with new arguments or work with default vlaue.(in main.js file) </br>
         <b>Note-1: the arguments are (location coordinates, direction, commands) of Rover. </b> </br>
         <b>Note-2: there is attached test cases file you can you if you want </b> </br></br>

2- use live server extension to run the app 
3-in the opend browser window press f12 to open console so you can see the result.
         
         
<h1>How To Run unit test</h1>
1- in terminal use -> npm i jest </br>
2- in rover.js change "export" word to "module.exports ="  </br>
3- in terminal write npm test to see the result  </br>



<h1>Code Structure</h1>

1- the given string of commands is splitd into array each index is a single command.  </br>
2- then looping on the this array and read the current index command, there is 2 cases:  </br>
    if the command was L or R so we will use the rotate function. </br>
    else we will use the move function.
