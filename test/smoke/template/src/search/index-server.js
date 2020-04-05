'use strict';

// import React from 'react';
const ReactDOM = require('react-dom');
const logo = require('./image/logo.jpg')
require('./search.less')

const React = require('react')


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

module.exports = <Search/>