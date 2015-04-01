import React from 'react';
import EventHandler from '../../src/event-handler';
import StateMixin from '../../src/state-mixin';

import m from 'most';
import t from 'transducers-js';

class StateMixinComponent extends React.Component {

  constructor() {

    this._onChange = EventHandler.create();
    this._onKeyDown = EventHandler.create();

    this.state = {

      value: '',
      out: false
    };

    this._valueState = (

      this._onChange
        .transduce(t.comp(

          t.map(event => event.target.value),
          t.filter(value => !!Number(value) || value === ''),
          t.map(value => ({ value }))
        ))
    );

    this._focusOutState = (

      this._onKeyDown
        .filter(event => event.keyCode === 9)
        .map(() => ({ out: true }))
    );

    StateMixin.call(this);
  }

  getStateStream() {

    return m.merge(this._valueState, this._focusOutState);
  }

  render() {

    const style = this.state.out ? { borderColor: '#00ff00' } : null;

    return (

      <div>

        <label>StateMixin </label>
        <input onChange={this._onChange}
               onKeyDown={this._onKeyDown}
               value={this.state.value}
               style={style} />

      </div>
    );
  }
}

React.render(<StateMixinComponent />, document.body);
