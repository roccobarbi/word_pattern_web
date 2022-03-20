import React from 'react';
import './Results.css';

class ResultsList extends React.Component {
    render() {
        return <div className="contents">
            <hr/>
            <span className="results-title">Results</span>
            <hr/>
            <ul>
                {this.props.results.words.map(word => {
                    return <li key={word}>{word}</li>
                })}
            </ul>
        </div>
    }
}

export default ResultsList