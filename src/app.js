import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/home/home';
import Settings from './pages/settings/settings';
import ConfigureCover from './pages/configure_cover/configure_cover';
import OpenExisting from './pages/open_existing/open_existing';

function App() 
{
  return (
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='configure' element={ <ConfigureCover/> }/>
      <Route path='settings' element={ <Settings/> }/>
      <Route path='open' element={ <OpenExisting/>}/>
    </Routes>
  );
}

export default App;
