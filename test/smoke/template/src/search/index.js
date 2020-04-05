'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../../common'
import {a} from './tree-shaking'
import logo from './image/logo.jpg';
import './search.less';

class Search extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            Text: null
        }
    }
    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }

    render() {
        const { Text } = this.state
        return  <div className="search_text">
                    {
                        Text ? <Text/> : null
                    }
                    {funcA} Search text
                    <img src={ logo } onClick={this.loadComponent.bind(this)}>
                    </img>
                </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)