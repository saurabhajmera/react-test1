import React from "react";

interface FormattedComponentProp {
    timestamp:string;

}

export class FormattedComponent extends React.Component<FormattedComponentProp>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <h2>{this.props.timestamp}</h2>
        );
    }
}
