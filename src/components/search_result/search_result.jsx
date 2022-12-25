import { Icon } from '@iconify/react';
import userIcon from '@iconify/icons-mdi/user';
import roundEmail from '@iconify/icons-ic/round-email';

import './search_result.css';

export default function SearchResult(
{
  id,
  first_name,
  last_name,
  email,
  address,
  city,
  state,
  zipcode
})
{
  return (
    <li className='list-item'>
      <div className='list-content-wrapper'>
        <div className='info-section user-info-section'>
          <div className='icon-info name-section'>
            <Icon icon={userIcon}/>
            { first_name } { last_name }
          </div>
          <div className='icon-info email-section'>
            <Icon icon={roundEmail} />
            { email }
          </div>
        </div>
        <div className='info-section location-info-section'>
          { address } { city }, { state }. { zipcode }
        </div>
        <div className='button-section'>
          <button className='green-button'>View Covers</button>
        </div>
      </div>
    </li>
  );
}