function navigate_back()
{
    window.location.pathname = '/src/pages/customer-info/index.html'
}

function navigate_cover(type)
{
    save('cover-type', type);
    window.location.pathname = '/src/pages/configure/' + type + '/index.html';
}