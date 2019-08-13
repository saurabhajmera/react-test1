import React from 'react';
import './App.css';
import ClockComponent from "./clock-component";
import {ToggleComponent} from "./toggle-component";

const Welcome: Function = (props: { name: string }) => {
  return <h1>Hello {props.name}</h1>
};

export class App extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        const name: string = "Saurabh";
        return (
            <div className="App">
                <div className="content">
                    <Welcome name="Mintu"/>
                    <ClockComponent name={name}/>
                    <ClockComponent name="Nirvaan"/>
                    <ToggleComponent/>
                </div>
            </div>
        );
    }
}

