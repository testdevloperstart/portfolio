import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MYIntro from './MyIntro';
import MyWork from './MyWork';
import MyProjects from './MyProjects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MYIntro/>
      <MyWork/>
      <MyProjects/>
    </div>
  );
}

export default App;
