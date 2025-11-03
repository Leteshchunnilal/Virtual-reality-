class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
   
    this.x=0;
    this.y=0; 
    this.z=0;
    
   let top = document.createElement("a-cone");
    top.setAttribute("position","0 0 -2");
    top.setAttribute("color","red");
    top.setAttribute("radius","0.25");
    top.setAttribute("height","2");
    this.obj.append( top );

    let middle = document.createElement("a-cylinder");
    middle.setAttribute("position","0 -2.5 -2");
    middle.setAttribute("color","black");
    middle.setAttribute("radius",".97");
    middle.setAttribute("height","3");
    this.obj.append( middle );

    let bottom = document.createElement("a-cone");
    bottom.setAttribute("position","0 -4.5 -2");
    bottom.setAttribute("color","orange");
    bottom.setAttribute("radius-bottom","-.4");
     bottom.setAttribute("height","3");
    bottom.setAttribute("rotation","-180 0 0");
    this.obj.append( bottom );
    
  

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  launch(){
    this.y += this.dy;
    this.obj.setAttribute(position,this.x,this.y,this.z);
  }
}