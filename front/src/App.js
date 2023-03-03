import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Locations from './components/Locations/Locations';
import About from './components/About/About';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import EpisodeDetail from './components/EpisodeDetail/EpisodeDetail';
import LocationDetail from './components/LocationDetail/LocationDetail';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/character/:id' element={<CharacterDetail />} />
        <Route path='/detail/episode/:id' element={<EpisodeDetail />} />
        <Route path='/detail/location/:id' element={<LocationDetail />} />
      </Routes>
    </div>
  );
};

export default App;
