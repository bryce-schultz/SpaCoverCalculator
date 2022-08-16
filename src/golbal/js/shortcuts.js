const states = [
    '',
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CZ',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'GU',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VI',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
];

function find(id)
{
    return document.getElementById(id);
}

function save(key, object)
{
    sessionStorage.setItem(key, JSON.stringify(object));
}

function create_element(element_name)
{
    return document.createElement(element_name);
}

function retrieve(key)
{
    return JSON.parse(sessionStorage.getItem(key));
}

let unimplemented_buttons = document.getElementsByClassName('unimplemented');
for (let i = 0; i < unimplemented_buttons.length; i++)
{
    unimplemented_buttons[i].setAttribute('title', 'Unimplemented');
}

$('.checkbox').on('click', function(){
    if ($(this).is('.checked')){
      $(this).removeClass('checked');
      $(this).width();  // required to restart the animations after changing class
      $(this).addClass('unchecked');
    }else{
      $(this).removeClass('unchecked');
      $(this).width();  // required to restart the animations after changing class
      $(this).addClass('checked');    
    }
});

$('.color-image').on('click', function() {
    $('.color-image').removeClass('color-selected');
    $('#custom-color-input').val('');
    $(this).addClass('color-selected');
});