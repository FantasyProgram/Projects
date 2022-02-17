
class Transform
{
    constructor(x , y ,width,height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

}

class GameObject
{
    constructor(x,y,width,height)
    {
       this.transform = new Transform(x,y,width,height);
    }
    update(){}
}



