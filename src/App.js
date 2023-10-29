import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<ProjectList/>}/>
          <Route path='/projects/:projectID' element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;