# MostReact
>  [ReactJS](http://facebook.github.io/react/) bindings for [Most.js](https://github.com/cujojs/most)

# Installation

Install this module with npm: 

```
npm install most-react
```

# Usage

MostReact provides a set of utilities to work with Most.js and React:

- The `EventHandler` helper

# EventHandler

The `EventHandler` helper allows to create Most.js push-stream that can be injected as callback for React event handler. To create a handler use the create function of `EventHandler`.

```
let onClick = EventHandler.create();
```

Example:

```
import React from 'react';
import { EventHandler } from 'most-react';

let Button = React.createClass({

    componentWillMount() {

        let onClick = EventHandler.create();

        this._onClick = onClick.handler;

        onClick.stream.forEach(console.log.bind(console));
    },

    render() {

        return <button onClick={this._onClick} />
    }
});
```
