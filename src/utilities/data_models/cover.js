export default class Cover
{
    constructor
    ({
        id,
        customer_id,
        type,
        model,
        length,
        width,
        corner_radius,
        radius,
        size_difference,
        color,
        airs, 
        in_ground
    }
    )
    {
        this.id = id;
        this.customer_id = customer_id;
        this.type = type;
        this.model = model;
        this.length = length;
        this.width = width;
        this.corner_radius = corner_radius;
        this.radius = radius;
        this.size_difference = size_difference;
        this.color = color;
        this.airs = airs;
        this.in_ground = in_ground;
    }

    addCover(cover)
    {
        this.covers.push(cover);
    }
}