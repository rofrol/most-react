import React from 'react';
import most from 'most';

const StateMixin = function() {

  const stateStream = this.getStateStream();

  stateStream
    .observe(this.setState.bind(this));
};

export default StateMixin;
