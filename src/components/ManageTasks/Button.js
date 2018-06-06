import React from 'react';

const btnStyle = {
  backgroundColor: '#00dcff',
  margin: '10px',
  padding: '5px 15px',
  border: 'none',
  borderRadius: '2px',
  color: '#fff'
};

const Button = (props) => {
  return (
    <button
        onClick={props.handleClick}
        style={btnStyle}
        type="button"> {props.type}
    </button>
  );
};

export default Button;
