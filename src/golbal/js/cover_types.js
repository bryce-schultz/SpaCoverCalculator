class Cover
{
}

class Standard extends Cover
{
    length = 0; //retrieve('default-standard-cover').length;
    width = 0; //retrieve('default-standard-cover').width;
    corner_radius = 0;
    size_difference = 0;
    airs = false;
    inground = false;

    constructor(
        length, 
        width, 
        corner_radius, 
        size_difference, 
        airs, 
        inground)
    {
        super();
        this.length = length;
        this.width = width;
        this.corner_radius = corner_radius;
        this.size_difference = size_difference;
        this.airs = airs;
        this.inground = inground;
    }
    
}

class Plungie extends Cover
{

}

class Round extends Cover
{

}

class BlueCube extends Cover
{

}

class MultiPanel extends Cover
{

}