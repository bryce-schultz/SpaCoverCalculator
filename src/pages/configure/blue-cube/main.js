function navigate_back()
{
    saveStandardCoverInfo();
    window.location.pathname = '/src/pages/cover-type/index.html';
}

function loadStandardCoverInfo()
{
    let cover = retrieve('standard-cover-info');

    if (cover == undefined) return;

    find('length').value = cover.length;
    find('width').value = cover.width;
    find('corner').value = cover.corner_radius;
    find('difference').value = cover.size_difference;
    if (cover.airs)
        $('#airs').addClass('checked')
    if (cover.inground)
        $('#inground').addClass('checked');

    switch (cover.fabric_color)
    {
        case 'Mineral':
            $('#color-mineral').addClass('color-selected');
            break;
        case 'Dove':
            $('#color-dove').addClass('color-selected');
            break;
        case 'Cinnamon':
            $('#color-cinnamon').addClass('color-selected');
            break;
        case 'Mink':
            $('#color-mink').addClass('color-selected');
            break;
        case 'Forest':
            $('#color-forest').addClass('color-selected');
            break;
        case '':
            break;
        default:
            $('#color-custom').addClass('color-selected');
            $('#custom-color-input').val(cover.fabric_color);
        break;
    }
}

function clear_form()
{
    find('length').value = '';
    find('width').value = '';
    find('corner').value = '';
    find('difference').value = '';
    $('#airs').removeClass('checked')
    $('#inground').removeClass('checked');
    $('.color-image').removeClass('color-selected');
    $('#custom-color-input').val('');
}

function getColor()
{
    let color = $('.color-image.color-selected h2').text();
    if (color == 'Custom')
    {
        color = $('#custom-color-input').val();
    }
    return color;
}

function saveStandardCoverInfo()
{
    let length = find('length').value;
    let width = find('width').value;
    let corner = find('corner').value;
    let difference = find('difference').value;
    let airs = $('#airs').hasClass('checked');
    let inground = $('#inground').hasClass('checked');
    let color = getColor();

    let cover = new Standard(
        length, 
        width, 
        corner, 
        difference, 
        airs, 
        inground,
        color);

    save('bluecube-cover-info', cover);
}

function drawDemo()
{
    let canvas = new SVGCanvas("100%", "100%");
    canvas.parent('drawing');
    canvas.setBackground('transparent');

    canvas.setStroke('#2f3136');

    let width = canvas.getWidth();
    let height = canvas.getHeight();

    canvas.line(0, 0, width/2, height/2);
}

drawDemo();

function navigate_forward()
{
    saveStandardCoverInfo();
    window.location.pathname = '/src/pages/packet-info/index.html';
}