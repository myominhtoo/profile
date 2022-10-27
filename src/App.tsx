import { Routes ,Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <Routes>
      <Route path='/'  element={<HomePage />}  />
      <Route path='/about' element={<AboutPage /> }  />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />}  /> 
      <Route path='*' element={<HomePage /> } />
    </Routes>
  )
}
