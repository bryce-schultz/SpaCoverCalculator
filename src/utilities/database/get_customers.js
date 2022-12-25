import hasWhiteSpace from "../string_manipulation/has_whitespace";
import 
{ 
    customer_table, 
    customer_first_name, 
    customer_last_name 
} from "../../constants/tables";

import sendAsync from '../../utilities/database/renderer';

export default function getCustomers(name)
{
    let name_query_part = '';

    if (hasWhiteSpace(name))
    {
        name_query_part = 
        customer_first_name + 
        ' LIKE \'%' + 
        name +
        '%\'';
    }
    else
    {
        name_query_part = 
        customer_first_name + 
        ' + \' \' + ' +
        customer_last_name +
        ' LIKE %' + 
        name +
        '%';
    }

    

    const query = 
    'SELECT * FROM ' + 
    customer_table + 
    ' WHERE ' + name_query_part;

    console.log(name_query_part, query);

    let customers = sendAsync(query).then((result) => {return result});

    return customers;
}