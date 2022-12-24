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
    fabric_color = 'Mineral';

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
        this.length = length | 0;
        this.width = width | 0;
        this.corner_radius = corner_radius | 0;
        this.size_difference = size_difference | 0;
        this.airs = airs | false;
        this.inground = inground | false;
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