
const gc = document.querySelector("#js-game_canvas");
const c = gc.getContext("2d");
const fpsTime = 1000/60;




gc.addEventListener('click',(event) =>
{
    console.log(event);
}
);

const player = new GameObject(0,0,10,10);

const GameObjects =[player];
player.update = function ()
{

    this.transform.x +=1;
};

var timePass = 0.0;
setInterval(()=>
{   c.fillStyle ="white";
    c.fillRect(0,0,gc.width,gc.height);
    GameObjects.forEach((item,index)=>
    {
        //let r = Math.random() * 255;
       // let g = Math.random() * 255;
       // let b = Math.random() * 255;
       // Math.
       // let randColor = Math.rgb(r,g,b);
        c.fillStyle= "blue";
        
        let {x ,y ,width ,height} = item.transform;
        c.fillRect(x,y,width,height);
        item.update();
       // console.table(item);

    });
  
},fpsTime);


