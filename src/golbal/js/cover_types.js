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
    fabric_color = 'mineral';

    constructor(
        length, 
        width, 
        corner_radius, 
        size_difference, 
        airs, 
        inground,
        fabric_color)
    {
        super();
        this.length = length;
        this.width = width;
        this.corner_radius = corner_radius;
        this.size_difference = size_difference;
        this.airs = airs;
        this.inground = inground;
        this.fabric_color = fabric_color;
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