import React from 'react';
import './App.css';
import ClockComponent from "./clock-component";

const Welcome: Function = (props: { name: string }) => {
  return <h1>Hello {props.name}</h1>
};

const App: React.FC = () => {
  const name:string = "Saurabh";
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}

      {/*</header>*/}
      <div className="content">
        <Welcome name="Mintu"/>
        <ClockComponent name={name}/>

      </div>
    </div>
  );
};

export default App;
