import React from 'react';
import EventHandler from '../../src/event-handler';

class Wrapper extends React.Component {

  constructor() {

    this.state = {

      ehClicks: 1
    };

    this._update = () => {

      let clicks = this.state.ehClicks;

      if (this.state.ehClicks < 3) {

          clicks = clicks + 1;
      }
      else {

        clicks = clicks - 1;
      }

      this.setState({ ehClicks: clicks },
        () => console.log('click'))
    };
  }

  render() {

    let ehComponents = [];

    for (let i = this.state.ehClicks; i-->0;) {

      ehComponents.push(<EventHandlerComponent key={i} update={this._update} />);
    }

    return (

      <div>
        {ehComponents}
      </div>
    );
  }
}

class EventHandlerComponent extends React.Component {

  componentWillMount() {

    this._onClick = EventHandler.create();

    this._onClick
        .forEach(this.props.update);
  }

  render() {

    return (

      <div>
        <label>EventHandler </label>
        <button onClick={this._onClick}>Click!</button>
      </div>
    );
  }
}

React.render(<Wrapper />, document.body);
