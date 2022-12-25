import Topbar from "../../components/topbar/topbar";
import SearchBar from "../../components/search_bar/search_bar";
import getCustomers from "../../utilities/database/get_customers";

import './open_existing.css';
import SearchResult from "../../components/search_result/search_result";
import { useState, useEffect } from "react";

export default function OpenExisting()
{
  const [list_items, setListItems] = useState([]);

  const searchDatabase = async (query) =>
  {
    const customers = await getCustomers(query);
    console.log(customers);

    let items = customers.map((item) => 
      <SearchResult 
        key={ item.id } 
        first_name={ item.first_name } 
        last_name={ item.last_name }
        email={ item.email }
        address={ item.address }
        city={ item.city }
        state={ item.state }
        zipcode={ item.zipcode } 
      />
    );

    items.push(items[0]);

    setListItems(items);
  };

  useEffect(()=>{
    searchDatabase('');
  }, []);

  return (
    <div id='page-container'>
      <Topbar/>
      <div id='page-content'>
        <div className='flex center-content p80-width p100-height'>
          <div id='form-wrapper'>
            <div id='top-form'>
              <SearchBar onSearch={ searchDatabase }/>
            </div>
            <div id='form-results'>
              <ul id='result-list'>
                { list_items }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}