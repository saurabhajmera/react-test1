import * as React from "react";

interface IToggleComponentState {
    isToggleOn:boolean;

}


export class ToggleComponent extends React.Component<any,IToggleComponentState>{

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {isToggleOn: true};
    }

    public handleClick = () => {
        this.setState((currentState) => {
            return {isToggleOn:!currentState.isToggleOn};
        });
    };

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
