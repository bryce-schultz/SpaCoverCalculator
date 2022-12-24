import { Icon } from '@iconify/react';
import SettingsIcon from '@iconify/icons-bi/gear-fill';
import { useNavigate } from 'react-router-dom';

import './settings_button.css';

function SettingsButton()
{
    const navigate = useNavigate();

    const openSettings = () =>
    {
        navigate('/settings');
    }
    
    return (
        <button id="settings" onClick={ openSettings }>
            <Icon icon={SettingsIcon}/>
        </button>
    );
}

export default SettingsButton;