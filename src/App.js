import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupPage from './Pages/Newmeetup';
import FavoritesPage from './Pages/Favorites';
import Layout from './Components/layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      
      <Routes>
      <Route exact path="/" element={<AllMeetupsPage/>}/>
      <Route exact path="new-meetup" element={<NewMeetupPage/>}/>
      <Route exact path="fav" element={<FavoritesPage/>}/>
      </Routes>

      </Layout>
    
    
  );
}

export default App;
