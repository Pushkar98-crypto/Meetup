import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupPage from './Pages/Newmeetup';
import FavoritesPage from './Pages/Favorites';
import MainNavigation from './Components/layout/MainNavigation';

import './App.css';

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
      <Route exact path="/" element={<AllMeetupsPage/>}/>
      <Route exact path="new-meetup" element={<NewMeetupPage/>}/>
      <Route exact path="fav" element={<FavoritesPage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
