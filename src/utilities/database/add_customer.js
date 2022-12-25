import 
{ 
    customer_last_name 
} from "../../constants/tables";
import getDatabase from "./get_database";

export default function addCustomer(customer)
{
    let db = getDatabase();

    insertCustomer(customer, db);

    db.close();
}

function insertCustomer(customer, db)
{
    const query = 
    'INSERT INTO ' + 
    customer_table + 
    '(first_name, last_name, email, address, city, state, zipcode)' +
    'VALUES' +
    '(`' + 
    customer.first_name +
    '`, ' + 
    customer.last_name +
    '`, ' + 
    customer.email +
    '`, ' + 
    customer.address +
    '`, ' + 
    customer.city +
    '`, ' + 
    customer.state +
    '`, ' + 
    customer.zip +
    '`);';

    db.exec(query);
}

export function getCustomerID(customer, db)
{

}