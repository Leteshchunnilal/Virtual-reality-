class cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("color","white");
     cloud1.setAttribute("position","2 6 -10");
    cloud1.setAttribute("height","2");
    this.obj.append( cloud1 );

     let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("color","white");
     cloud2.setAttribute("position","2.7 6.1 -10");
    cloud2.setAttribute("height","2");
    this.obj.append( cloud2 );
  
     let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("color","white");
     cloud3.setAttribute("position","1.3 6.2 -10 ");
    cloud3.setAttribute("height","2");
    this.obj.append( cloud3 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}