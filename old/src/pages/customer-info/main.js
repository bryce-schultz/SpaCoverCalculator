// function to add states to the state selector
function addStates(input)
{
    let state_input = document.getElementsByTagName("select");
    for (let i = 0; i < state_input.length; i++)
    {
        if (state_input[i].name == input)
        {
            for (let j = 0; j < states.length; j++)
            {
                let option = document.createElement('option');
                option.setAttribute('value', j);
                option.append(states[j]);
                state_input[i].appendChild(option);
            }
        }
    }
}

// save the customer info between page changes
function saveCustomerInfo()
{
    let first_name = find('first-name').value;
    let last_name = find('last-name').value;
    let email = find('email').value;
    let address = find('address').value;
    let city = find('city').value;
    let state = find('state').selectedIndex;
    let zipcode = find('zipcode').value;

    let customer_info = new CustomerInfo(
        first_name, 
        last_name, 
        email, 
        address, 
        city, 
        state, 
        zipcode
    );

    save('customer_info', customer_info);
}

// load the customer info
function loadCustomerInfo()
{
    let customer_info = retrieve('customer_info');

    if (customer_info == undefined) return;

    let first_name = find('first-name');
    let last_name = find('last-name');
    let email = find('email');
    let address = find('address');
    let city = find('city');
    let state = find('state');
    let zipcode = find('zipcode');

    first_name.value = customer_info.first_name;
    last_name.value = customer_info.last_name;
    email.value = customer_info.email;
    address.value = customer_info.address;
    city.value = customer_info.city;
    state.selectedIndex = customer_info.state;
    zipcode.value = customer_info.zipcode;
}

// navigate to the previous page
function navigate_back()
{
    saveCustomerInfo();
    window.location.pathname = '/src/pages/start-screen/index.html'
}

function navigate_forward()
{
    saveCustomerInfo();
    window.location.pathname = '/src/pages/cover-type/index.html'
}

function clear_form()
{
    find('first-name').value = "";
    find('last-name').value = "";
    find('email').value = "";
    find('address').value = "";
    find('city').value = "";
    find('state').selectedIndex = -1;
    find('zipcode').value = "";
}

// add the states to the select named "state"
addStates('state');