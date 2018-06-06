import React, { Component } from 'react';
import ManageTasks from './ManageTasks/ManageTasks';
import TasksList from './TasksList/TasksList';
import './App.css';

class App extends Component {
  state = {
    tasks: []
  }

  handleAdd = () => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, prevState.tasks.length + 1]
    }));
  }

  handleRemove = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.slice(0, prevState.tasks.length - 1)
    }));
  }

  handleClear = () => {
    this.setState({
      tasks: []
    });
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div className="App">
        <ManageTasks
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
          onClear={this.handleClear}/>
          <TasksList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
