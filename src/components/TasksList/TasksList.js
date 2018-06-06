import React from 'react';

const listStyle = {
  listStyle: 'none',
  fontSize: '18px',
  lineHeight: '30px'
}

const TasksList = (props) => {
  const tasks = props.tasks.map(task => {
    return (
      <li key={task}>
        Task number {task}
      </li>
    );
  });

    return (
      <ul style={listStyle}>
        {tasks}
      </ul>
    );
};

export default TasksList;
