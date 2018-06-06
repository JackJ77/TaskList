import React from 'react';
import Button from './Button';

const ManageTasks = (props) => {

    return (
      <div>
        <Button handleClick={props.onAdd} type='Add' />
        <Button handleClick={props.onRemove} type='Remove' />
        <Button handleClick={props.onClear} type='Clear' />
      </div>
    );
};

export default ManageTasks;
