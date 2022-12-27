import 
{ 
    customer_table
} from "../../constants/tables";

import sendAsync from '../../utilities/database/renderer';

export default function getCustomers(name)
{
    const query = 
    'SELECT * FROM ' +
    customer_table +
    ' WHERE first_name || \' \' || last_name LIKE \'%' +
    name +
    '%\';';

    let customers = 
    sendAsync(query)
    .then
    (
        (result) => {return result}
    );

    return customers;
}