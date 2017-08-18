import React from 'react';
import PropTypes from 'prop-types';

function Counter({ value, handleIncrementAsync, handleIncrement, handleDecrement }) {
  return (
    <div>
      <button onClick={handleIncrementAsync}>
        Increment after 1 sec
      </button>
      {' '}
      <button onClick={handleIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={handleDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  handleIncrementAsync: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default Counter;
