import logo from './logo.svg';
import './App.css';
import ImageComp from './components/ImageComp';
import UserComp from './components/UserComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import HOCComp from './components/HOCComp';
import ClickCounterComp from './components/ClickCounterComp';
import HoverCounterComp from './components/HoverCounterComp';
import CompLifeCycleComp from './components/CompLifeCycleComp';
import MyComp from './components/MyComp'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ImageComp/> */}
      {/* <ErrorBoundaryComp>
          <UserComp user="Anto"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
          <UserComp user="Ganesh"/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
          <UserComp user="Rajool"/>
      </ErrorBoundaryComp> */}
      {/* <ClickCounterComp/>
      <HoverCounterComp/>
      <HOCComp/> */}
      <CompLifeCycleComp newColor='green'/>
      <MyComp fname="Anto" age="23" gender="male"/>
    </div>
  );
}

export default App;
