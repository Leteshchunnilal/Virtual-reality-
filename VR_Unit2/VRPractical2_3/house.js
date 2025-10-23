class house{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let wall1 = document.createElement("a-box");
    wall1.setAttribute("color","grey");
     wall1.setAttribute("position","-2 1.5 0");
    wall1.setAttribute("height","2");
    this.obj.append( wall1 );

  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}