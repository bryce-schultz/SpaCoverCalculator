function generate_result()
{
    let type = retrieve('cover-type');

    switch (type)
    {
        case 'standard':
            standard_bifold();
            break;
    }

    add_packet_contents();
}

function navigate_back()
{
    window.location.pathname = '/src/pages/packet-info/index.html';
}

function set_model_name(name)
{
    set('model-name', name);
}

function set_model_color(color)
{
    set('model-color', color);
}

function set_customer_info(
    name = '', 
    street = '', 
    city = '', 
    state = '', 
    zip = '',
    email = '')
{
    set('customer-address', 
        name + '<br>' + 
        street + '<br>' +
        city + ' ' + 
        state + ', ' +
        zip + '<br><br>' + 
        email
    );
}

function set(id, value)
{
    document.getElementById(id).innerHTML = value;
}

function create_column(title)
{
    let area = find('build-info');
    let container = create_element('div');
    container.setAttribute('class', 'info-column');
    container.setAttribute('id', 
    title.toLowerCase().replace(/\s+/g, ''));

    container.innerHTML = '<h2>' + title + '</h2><hr>';
    area.appendChild(container);
}

function append_column(title, line, value = '')
{
    let container = find(
        title.toLowerCase().replace(/\s+/g, ''));
    container.innerHTML += 
    '<p>' + line + 
    ' ' + 
    value + '</p>';
}

function generate_title(model, length, width, airs)
{
    if (airs)
    {
        return model 
            + ': <b><i>A</i>irs</b> - ' + 
            length + '" x ' + 
            width + '"';
    }

    return model + ' - ' + 
        length + '" x ' + 
        width + '"';
}

function standard_bifold()
{
    let cover = retrieve('standard-cover-info');
    let customer_info = retrieve('customer_info');

    let title = generate_title(
        'Standard Bifold', 
        cover.length, 
        cover.width, 
        cover.airs);

    let customer_name = customer_info.first_name + ' ' + 
    customer_info.last_name;
    
    set_model_name(title);

    set_model_color(cover.fabric_color);

    set_customer_info(
        customer_name,
        customer_info.address,
        customer_info.city,
        states[customer_info.state],
        customer_info.zipcode,
        customer_info.email);

    // Math section :(
    // the covers bubble
    let bubble = settings.standard.bubble;
    // difference in size between the comp and coupler
    let size_difference = cover.size_difference;
    // the corner_width corner_radius
    let corner_radius = cover.corner_radius;
    // cover width
    let width = cover.width;
    // cover length
    let length = cover.length;
    // size needed for the plastic corner_width piece
    let plastic_corner_bracket = 
    settings.standard.plastic_corner_bracket;
    // the space the corner_width takes from the back and side rails
    let corner_width = (corner_radius / Math.sqrt(2));

    let back_rail = width - (bubble.left + bubble.right + (corner_width * 2));
    let front_rail = width - (bubble.left + bubble.right);
    let length_without_bubble = length - (bubble.front * 2 + bubble.back * 2);

    let length_bubble = bubble.front + bubble.back;

    // coupler side
    let coupler_side_length = ((length / 2) + size_difference) - length_bubble;
    let coupler_side_rail = coupler_side_length - corner_width - plastic_corner_bracket;
    let coupler_changle = coupler_side_rail - 0.5;
    let coupler_spreader = 0;
    let coupler_struts = 0;

    // complimentary side
    let comp_side_length = ((length / 2) - size_difference) - length_bubble;
    let comp_side_rail = comp_side_length - corner_width - plastic_corner_bracket;
    let comp_changle = comp_side_rail - 0.5;
    let comp_spreader = 0;
    let comp_struts = 0;

    create_column('Overview');
    append_column('Overview', 'Front rail:', inches(front_rail));
    append_column('Overview', 'Back rail:', inches(back_rail));
    append_column('Overview', 'Length w/o bubble:', inches(length_without_bubble));
    append_column('Overview', '&nbsp');
    append_column('Overview', 'Total length:', inches(length));

    create_column('Coupler Side');
    append_column('Coupler Side', 'Side rail:', inches(coupler_side_rail));
    append_column('Coupler Side', 'Changle:', inches(coupler_changle));
    append_column('Coupler Side', 'Spreader:', inches(coupler_spreader));
    append_column('Coupler Side', 'Struts:', inches(coupler_struts));
    append_column('Coupler Side', '&nbsp');
    append_column('Coupler Side', 'Length:', inches(coupler_side_length));

    create_column('Complimentary Side');
    append_column('Complimentary Side', 'Side rail:', inches(comp_side_rail));
    append_column('Complimentary Side', 'Changle:', inches(comp_changle));
    append_column('Complimentary Side', 'Spreader:', inches(comp_spreader));
    append_column('Complimentary Side', 'Struts:', inches(comp_struts));
    append_column('Complimentary Side', '&nbsp');
    append_column('Complimentary Side', 'Length:', inches(comp_side_length));

    let print_width;
    let print_height;
    let required_height;
    let required_width;
    let scale;

    let canvas = new SVGCanvas(0, 0);
    canvas.parent('drawing');

    window.onresize = () =>
    {
        redraw();
    }

    this.redraw = function()
    {
        print_width = find('drawing-area').offsetWidth;
        print_height = find('drawing-area').offsetHeight;
        required_height = width + 30;
        required_width = length + 30;
        scale = Math.min(print_width / required_width, print_height / required_height);
        //scale = 2;
        log(print_width, required_width, print_height, required_height)
        log(print_width / required_width, print_height / required_height);

        log(width, (width + 30) * scale);

        document.getElementById('drawing').style.width = (length * scale + 30) + "px";
        document.getElementById('drawing').style.height = (width * scale + 30) + "px";

        canvas.resize((length * scale) + 30, (width * scale) + 30);
        canvas.clear();
        canvas.setOffset(0, 0);
        draw();
    }

    this.draw = function()
    {
        //big side of the cover
        canvas.setOffset(15, 15);
        canvas.createShape("outline");
        canvas.vertex(0, corner_width * scale);
        canvas.vertex(corner_width * scale, 0);
        canvas.vertex((comp_side_rail + (plastic_corner_bracket * 2) + coupler_side_rail + corner_width) * scale, 0);
        canvas.vertex((comp_side_rail + plastic_corner_bracket * 2 + coupler_side_rail + corner_width * 2) * scale, corner_width * scale);
        canvas.vertex((comp_side_rail + plastic_corner_bracket * 2 + coupler_side_rail + corner_width * 2) * scale, (back_rail + corner_width) * scale);
        canvas.vertex((comp_side_rail + plastic_corner_bracket * 2 + coupler_side_rail + corner_width) * scale, (back_rail + (corner_width * 2)) * scale);
        canvas.vertex(corner_width * scale, (back_rail + (corner_width * 2)) * scale);
        canvas.vertex(0, (back_rail + corner_width) * scale);
        canvas.endShape('CLOSE');

        //center line
        canvas.line(coupler_side_length * scale, 0, coupler_side_length * scale, front_rail * scale);
        
        //struts for big side
        canvas.line(coupler_side_length / 2 * scale, 0, coupler_side_length * scale, (front_rail / 2 - 1.5) * scale);
        canvas.line(coupler_side_length * scale, (front_rail / 2 + 1.5) * scale, coupler_side_length / 2 * scale, front_rail * scale);
        canvas.line(coupler_side_length / 2 * scale, front_rail * scale, 0, (front_rail / 2 + 1.5) * scale);
        canvas.line(0, (front_rail / 2 - 1.5) * scale, coupler_side_length / 2 * scale, 0);

        //struts for small side
        canvas.line((coupler_side_length + (comp_side_length / 2)) * scale, 0, (coupler_side_length + comp_side_length) * scale, (front_rail / 2 - 1.5) * scale);
        canvas.line((coupler_side_length + comp_side_length) * scale, (front_rail / 2 + 1.5) * scale, (coupler_side_length + (comp_side_length / 2)) * scale, front_rail * scale);
        canvas.line((coupler_side_length + (comp_side_length / 2)) * scale, front_rail * scale, coupler_side_length * scale, (front_rail / 2 + 1.5) * scale);
        canvas.line(coupler_side_length * scale, (front_rail / 2 - 1.5) * scale, (coupler_side_length + (comp_side_length / 2)) * scale, 0);

        //text for size measurements
        canvas.setOffset(0, 0);
        canvas.setTextSize(12);
        canvas.text(inches(corner_radius), (corner_width * scale) / 2, (corner_width * scale) / 2);
        canvas.text(inches(coupler_side_length), ((coupler_side_length * scale) / 2), 0);
        canvas.text(inches(comp_side_length), (coupler_side_length * scale) + ((comp_side_length * scale) / 2), 0);
        canvas.text(inches(front_rail), (coupler_side_length * scale) + 24, (front_rail / 2 * scale) + 12);
        canvas.text(inches(back_rail), 24, (front_rail / 2 * scale) + 12);
    }

    redraw();
}

function add_packet_contents()
{
    let area = find('packet-contents');
    let packet = retrieve('packet');
    area.innerHTML += '<p>Tie downs: ' + packet.tie_downs_count + '</p>';
    area.innerHTML += '<p>Cables: ' + packet.cables_count + '</p>';
    area.innerHTML += '<p>Quicklinks: ' + packet.quicklinks_count + '</p>';
    area.innerHTML += '<p>' + packet.other_name + ': ' + packet.other_count + '</p>';
}