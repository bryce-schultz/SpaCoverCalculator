function generate_result()
{
    let type = retrieve('cover-type');

    console.log(type);

    switch (type)
    {
        case 'standard':
            standard_bifold();
            break;
    }
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

    container.innerHTML = title + ': <br>';
    area.appendChild(container);
}

function append_column(title, line, value = '')
{
    let container = find(
        title.toLowerCase().replace(/\s+/g, ''));
    container.innerHTML += 
    line + 
    ' ' + 
    value + 
    '<br>';
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

    create_column('Overview');
    append_column('Overview', 'Back rail:');
    append_column('Overview', 'Front rail:');
    append_column('Overview', 'Length w/o bubble:');
    append_column('Overview', 'Total length:');

    create_column('Coupler Side');
    append_column('Coupler Side', 'Changle:');
    append_column('Coupler Side', 'Spreader:');
    append_column('Coupler Side', 'Struts:');

    create_column('Complimentary Side');
    append_column('Complimentary Side', 'Changle:');
    append_column('Complimentary Side', 'Spreader:');
    append_column('Complimentary Side', 'Struts:');

    console.log(cover);
}