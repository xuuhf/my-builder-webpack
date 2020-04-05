'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './image/logo.jpg';
import './search.less';

class Search extends React.Component {
    render() {
        return  <div className="search_text">
                    Search text<img src={ logo }></img>
                </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)