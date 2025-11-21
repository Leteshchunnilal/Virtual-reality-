/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "---ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
"-------o-o--t--ooo---t-----oo----t------ooo-----t---oo---t-----t-----t-----t",
"ttttttt--tttt--ttttttt--t--ttttttt--t--t--t--t--ttttttt--tttt--t--tttt--tttt",
"t--t--t-----t--ooooo-t--t----oooooo-t--t--t--t---oooo----t-----ooooo-------t",
"t--t--t--tttt--tttttttttt--tttt--t--t--t--t--tttt--t--t--ttttttt--t--ttttttt",
"t-----t--t--t--t-----t--t--t--t--t--t--t--t--t-----t--t--t-----t--t--------t",
"tttt--t--t--t--t--tttt--t--t--ttttttttttttt--ttttttt--t--t--ttttttt--tttt--t",
"t--t--t-----t--t-----t--------t-----------------t-----t--t-----t--t--t-----t",
"t--t--tttt--t--t--tttt--tttt-otttt--tttttttttt--tttttttttt--t--t--tttt--tttt",
"t-----t-----t--oooo-----t--------t-----t--t--------t--------t--t-----t-----t",
"tttt--t--tttt--tttt--t--tttttttttttttttt--t--tttt--tttt--t--ttttttt--t--t--t",
"t--------t--------t--t-----t-----------t-----t-o---t-----t--t--t--------t--t",
"t--ttttttt--ttttttt--ttttttt--tttt--t--tttttttttt--tttt--tttt--tttt--tttt--t",
"t--t-----t-----t-----t--------t--t--t--------------------t-----------t-----t",
"t--t--tttt--ttttttt--t--t--t--t--tttt--ttttttt--t--tttt--tttt--tttt--tttt--t",
"t--t--------t--t-----t--t--t-----t--------t--t--t--t--t--------t-----t--t--t",
"t--ttttttt--t--t--t--t--tttttttttt--tttt--t--tttt--t--t--tttt--t--t--t--tttt",
"t--t--t--------t--t--t--t--t--------t--------t-----t--------t--t--t-----t--t",
"t--t--ttttttttttttttttttt--t--tttt--t--t--t--tttt--tttt--tttttttttttttttt--t",
"t----oo-----t-----ooo---t-----t--t--t--t--t--t--------t--t-----t--------t--t",
"t--tttt--ttttttt--t--ttttttt--t--tttttttttt--t--tttt--tttt--ttttttt--tttt--t",
"t-----t--t--------t--t----ooooo-----t--------t--t-----t--t-----t-----t--t--t",
"ttttttt--t--t--t--t--tttt--tttttttttt--tttttttttttttttt--t--tttt--t--t--t--t",
"t---o-t-----t--t--t-----t--t--------t--t--------t--ooooo---oo--t--t-----t--t",
"t--tttttttttt--tttt--t--t--tttt--ttttttttttttt--t--t--ttttttt--ttttttt--t--t",
"t-----------t--t--t--t--------t--------t-----------t--t---ooo----t--------t",
"ttttttt--tttt--t--tttt--ttttttt--tttt--ttttttt--ttttttt--t--tttt--t--ttttttt",
"t--------t--t--t--t---oo---t-----t--------t-----t--t-----t--t-----t--------t",
"tttt--t--t--t--t--tttttttttt--tttttttttttttttt--t--tttt--tttt--tttt--ttttttt",
"t-----t-----------------------t-----t--t--t-----t--t-----t-----------t-----t",
"t--ttttttttttttt--t--tttt--t--tttt--t--t--ttttttt--t--ttttttttttttt--t--tttt",
"t-----t-----t-----t--t--t--t-------oo-----t--t--t--t--t-----------t--t-----t",
"t--t--tttt--tttttttttt--tttt--tttttttttt--t--t--t--tttt--ttttttt--t--t--tttt",
"t--t-----t--t-----t--t--ooo---t--t--------t--t-------oo--------t--t--------t",
"t--ttttttt--tttt--t--t--tttt--t--tttttttttt--t--ttttttt--t--ttttttt--tttt--t",
"t-----t--------t--t-----t--t-----ooooo----t------ooo--t--t----ooo----t-----t",
"ttttttt--ttttttt--t--tttt--ttttttttttttt--t--tttt--tttttttttttttttt--t--tttt",
"t--t-----t--------t--------------t--------------t--t--t--t-----------t-----t",
"t--tttt--tttt--ttttttttttttttttttt--tttttttttt--tttt--t--t--t--t--ttttttt--t",
"t--------t--ooo---ooo------oo--t-----oo----t-----t--oo---t--t--t--t-----t--t",
"t--tttttttttttttttt--tttttttttt--t--tttt--ttttttt--tttt--t--tttttttttt--t--t",
"t--ooo---t--------ooo--o--oooo---t--t-----t--oo-t--t--------t--------------t",
"t--ttttttttttttt--ttttttttttttt--tttt--t--tttt--tttttttttt--tttt--ttttttt--t",
"t--------------t--------t--t--------t--t--t--t--t-----t-----t-----t--------t",
"ttttttt--t--t--ttttttt--t--tttt--ttttttt--t--t--t--tttt--ttttttttttttt--tttt",
"t--t-----t--t--------------t--------t--------t-----t-----t----oo-oooo------t",
"t--tttt--tttttttttttttttttttttt--ttttttt--ttttttt--t--ttttttttttttt--ttttttt",
"t-----t-----t-----t--ooot--t-----t-----------t----ooooo--oo----t-----t--t--t",
"tttt--t--t--t--tttt--tttt--t--tttt--ttttttt--tttt--t--tttt--tttt--t--t--t--t",
"t--------t--------t-----------t--------t-----t-----t--t-----t-oo--t--------",
"ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt--"

];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
     
    if(cols[c] == "t"){
       new baze(c,3,r);
      }
      if(cols[c]=="o"){
        new Rock(c,3,r)
      }
    }
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
    }
  })