import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Clicktracker from './Pages/Clicktracker';
import Counttracker from './Pages/Counttracker';
import TodoItems from './Pages/TodoItems';
import TodoPage from './Pages/TodoPage';
import todos from './Assets/data'

function App() {
  return (
    <div className="App">
      {/* <h1>Learning React nested routes</h1> */}
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/click' element={<Clicktracker/>}/>
            <Route path='/count' element={<Counttracker/>}/>
            <Route path='/todo' element={<TodoItems/>}/>
            <Route path='/todos/:id' element={<TodoPage todos={todos}/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;