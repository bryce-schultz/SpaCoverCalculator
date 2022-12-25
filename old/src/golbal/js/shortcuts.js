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

let settings = {
    'standard': {
        'plastic_corner_bracket': 5,
        'bubble': {
            'front': 0.125,
            'right': 0.25,
            'back': 0.25,
            'left': 0.25
        }
    },
    'general': {
        'accuracy': 3,
        'number system': 'imperial',
        'number display': 'decimal'
    }
};

let log = console.log.bind(window.console);

function inches(num = 0)
{  
    if (settings.general['number system'] == 'metric')
    {
        let metric = 2.54 * num;
        let rounded_metric = roundto(metric, settings.general.accuracy);
        return rounded_metric + 'cm';
    }

    if (settings.general['number display'] == 'fraction')
    {
        let fraction = nearest16th(num);
        return fraction + '\"';
    }

    let rounded_num = roundto(num, settings.general.accuracy);
    
    return rounded_num += '\"';
}

function nearest16th(value)
{
    let whole = Math.floor(value);
    let result = roundto(((value / 0.0625) - (whole * 16)), 0);

    let fraction = result + '/' + 16;

    switch (result)
    {
        case 0:
            fraction = '';
            break
        case 2:
            fraction = '1/8';
            break;
        case 4:
            fraction = '1/4';
            break;
        case 6:
            fraction = '3/8';
            break;
        case 8:
            fraction = '1/2';
            break;
        case 10:
            fraction = '5/8';
            break;
        case 12:
            fraction = '3/4';
            break;
        case 14:
            fraction = '7/8';
            break;
        case 16:
            whole += 1;
            fraction = '';
            break;
    }

    if (fraction == '')
    {
        return whole;
    }

    return whole + ' ' + fraction;
}

function roundto(value, decimals) 
{
    return Number(value.toFixed(decimals));
}

function find(id)
{
    return document.getElementById(id);
}

function create_element(element_name)
{
    return document.createElement(element_name);
}

function save(key, object)
{
    sessionStorage.setItem(key, JSON.stringify(object));
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

$('.image').on('click', function() {
    $('.image').removeClass('color-selected');
    $('#custom-input').val('');
    $(this).addClass('color-selected');
});