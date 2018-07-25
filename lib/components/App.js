import React from 'react';

import DataApi from '../DataApi';
import {
    data
} from '../testData';

const api = new DataApi(data);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors(), //would be async in real life.
        };
    }

    render() {
        return ( 
            <div>Test React App Component</div>
        );
    }
}

export default App;