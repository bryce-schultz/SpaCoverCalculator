import 
{ 
    cover_table
} from "../../constants/tables";

import sendAsync from '../../utilities/database/renderer';

export default function getCovers(customer_id)
{
    const query = 
    'SELECT * FROM ' +
    cover_table +
    ' WHERE customer_id = ' +
    customer_id +
    ';';

    let covers = 
    sendAsync(query)
    .then
    (
        (result) => 
        {
            return result;
        }
    );

    return covers;
}