import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>APP</p>}/>
          <Route path='/about' element={<p>about</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;