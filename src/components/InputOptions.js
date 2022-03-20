import React from 'react';

class InputOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en',
            aca: true
        };
    }
    render() {
        return <div>
            InputOptions
        </div>
    }
}

export default InputOptions