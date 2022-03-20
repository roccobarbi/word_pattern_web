import React from 'react';
import InputOptions from "./InputOptions";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {optionsVisible: true};
    }

    render() {
        let options;
        let button;
        if (this.state.optionsVisible) {
            button = <button onClick={() => {
                this.setState({
                    optionsVisible: false
                })
            }}>
                Hide Options
            </button>
            options = <InputOptions />;
        } else {
            button = <button onClick={() => {
                this.setState({
                    optionsVisible: true
                })
            }}>
                Show Options
            </button>
            options = "";
        }
        return <div className="contents">
            <div>InputField</div>
            <div>{button}</div>
            <div>{options}</div>
        </div>
    }
}

export default InputField