import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      task: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Todo List</legend>
          <label>
            Enter a task:
            <input
              type='text'
              name='task'
              placeholder='Enter a task to do...'
              value={this.task}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={() => this.props.addTodo(this.state.task)}>
            Add Todo
          </button>
          <button onClick={this.props.clearCompleted}>Clear completed</button>
        </fieldset>
      </form>
    );
  }
}

export default TodoForm;
