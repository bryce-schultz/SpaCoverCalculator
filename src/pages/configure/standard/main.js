function navigate_back()
{
    saveStandardCoverInfo();
    window.location.pathname = '/src/pages/cover-type/index.html'
}

function loadStandardCoverInfo()
{
    let cover = retrieve('standard-cover-info');

    find('length').value = cover.length;
    find('width').value = cover.width;
    find('corner').value = cover.corner_radius;
    find('difference').value = cover.size_difference;
    if (cover.airs)
        $('#airs').addClass('checked')
    if (cover.inground)
        $('#inground').addClass('checked');
}

function clear_form()
{
    find('length').value = '';
    find('width').value = '';
    find('corner').value = '';
    find('difference').value = '';
    $('#airs').removeClass('checked')
    $('#inground').removeClass('checked');
}

function saveStandardCoverInfo()
{
    let length = find('length').value;
    let width = find('width').value;
    let corner = find('corner').value;
    let difference = find('difference').value;
    let airs = $('#airs').hasClass('checked');
    let inground = $('#inground').hasClass('checked');

    console.log(airs);

    let cover = new Standard(
        length, 
        width, 
        corner, 
        difference, 
        airs, 
        inground);
    
    save('standard-cover-info', cover);
}