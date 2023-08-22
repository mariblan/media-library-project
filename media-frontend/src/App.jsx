import './App.css';
import { media, sections } from './assets/media.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/RoutingComponents/Home';
import Films from './components/RoutingComponents/Films';
import Film from './components/RoutingComponents/Film';
import Series from './components/RoutingComponents/Series';
import Serie from './components/RoutingComponents/Serie';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route
              path={'/'}
              element={<Home media={media} sections={sections} />}
            ></Route>
            <Route
              path={'/films'}
              element={<Films media={media} sections={sections} />}
            ></Route>
            <Route path={'/films/:id'} element={<Film media={media} />} />
            <Route
              path={'/series'}
              element={<Series media={media} sections={sections} />}
            >
              <Route
                path={':id'}
                element={<Serie media={media} sections={sections} />}
              />
            </Route>
            <Route
              path={'/series/:id'}
              element={<Serie media={media} sections={sections} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
