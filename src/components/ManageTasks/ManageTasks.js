import React from 'react';
import Button from './Button';

const ManageTasks = (props) => {

    return (
      <div>
        <Button onClick={props.onAdd} type='Add' />
        <Button onClick={props.onRemove} type='Remove' />
        <Button onClick={props.onClear} type='Clear' />
      </div>
    );
};

export default ManageTasks;
