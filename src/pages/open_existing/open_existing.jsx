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
    let customers = await getCustomers(query);
    
    customers.sort((first, second) => 
    {
      if (first.first_name > second.first_name) 
      {
         return 1;
      }
      else if (first.first_name < second.first_name) 
      {
         return -1;
      }

      return 0;
    });

    let items = customers.map((item) => 
      <SearchResult 
        key={ item.id }
        id={ item.id } 
        first_name={ item.first_name } 
        last_name={ item.last_name }
        email={ item.email }
        address={ item.address }
        city={ item.city }
        state={ item.state }
        zipcode={ item.zipcode } 
      />
    );

      setListItems(items);
    };

    useEffect(()=>{
      searchDatabase('');
    }, []);

    return (
      <div id='page-container'>
        <Topbar/>
      <div id='page-content'>
        <div id='narrow-content'>
          <div id='form-wrapper'>
            <div id='top-form'>
              <SearchBar onSearch={ searchDatabase }/>
            </div>
            <div id='spacer'></div>
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