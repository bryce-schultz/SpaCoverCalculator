import LargeSquareButton from '../../components/large_square_button/large_square_button';
import SettingsButton from '../../components/settings_button/settings_button';
import { Icon } from '@iconify/react';
import AddIcon from '@iconify/icons-material-symbols/add';
import OpenIcon from '@iconify/icons-ic/baseline-file-open';
import './home.css';

function next()
{
  alert("click");
}

function Home()
{
  return (
    <div id="container">
      <div id="content">
        <LargeSquareButton onClick={ next }>
          <Icon icon={AddIcon} width='3em'/>
          New Cover
        </LargeSquareButton>
        <LargeSquareButton>
          <Icon icon={OpenIcon} width='3em'/>
          Open Existing
        </LargeSquareButton>
      </div>

      <SettingsButton/>
    </div>
  );
}

export default Home;