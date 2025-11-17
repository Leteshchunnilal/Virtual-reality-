class baze{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","grey");
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("src","brownstuff.jpg");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}