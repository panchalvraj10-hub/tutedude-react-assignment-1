import logo from './logo.svg';
import './App.css';
import Classcomponent from './component/classcomponent';
import Functioncomponent from './component/functioncomponent';

function App() {
  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <div className="container">
        <Classcomponent />
        <Functioncomponent />
      </div>
    </div>
  );
}

export default App;