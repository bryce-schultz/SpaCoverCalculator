import { useNavigate, useLocation } from 'react-router-dom';
import { save, retrieve } from '../utilities/storage';

export function useNav()
{
    const navigate = useNavigate();
    const path_location = useLocation();

    function nav(location)
    {
        const path = location + '_back';
        save(path, path_location.pathname);
        console.log(path);
        navigate(location);
    }

    return nav;
}

export function useBack()
{
    const navigate = useNavigate();
    const path_location = useLocation();

    function back()
    {
        const path = path_location.pathname + '_back';
        const old_path = retrieve(path);
        console.log(old_path);
        navigate(old_path);
    }
    
    return back;
}