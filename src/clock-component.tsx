import React from "react";
import {Subscription, timer} from "rxjs";

interface ClockComponentProps {
    name:string;
}
interface ClockComponentState {
    time:Date;

}
class ClockComponent extends React.Component<ClockComponentProps,ClockComponentState> {
    //Subscriptions
    private timerSubscription:Subscription|undefined;


    constructor(props: Readonly<ClockComponentProps>) {
        super(props);
        this.state = {time:new Date()};
    }

    componentDidMount(): void {
        this.timerSubscription = timer(1000,1000).subscribe(()=>{
           this.tick();
        });
    }

    componentWillUnmount(): void {
        if(this.timerSubscription){
            this.timerSubscription.unsubscribe();
        }
    }



    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <div>Hey {this.props.name}, the time is {this.state.time.toLocaleTimeString()}</div>
        );
    }

    private tick() {
        this.setState({time:new Date()});
    }
}

export default ClockComponent;
