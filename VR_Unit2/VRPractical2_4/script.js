let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  

  rocket= new Rocket(0,8,0);
  for(let i = 0; i < 120; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
     rocket = new Rocket(x, 5 , z);
     
     }
  
 for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let cloud1 = new cloud(x, 8 , z);
    }

  });
