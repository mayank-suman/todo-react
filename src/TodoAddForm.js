import React from 'react';
import PropTypes from 'prop-types';

import { getNewTodo } from './store';

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todo: '' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.todo && this.state.todo !== nextState.todo;
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    // ADD THIS LINE
    if(!this.state.todo) return;
    var t = getNewTodo(this.state.todo);

    window.sessionStorage.setItem('todos', JSON.stringify(this.props.items.concat([t])));

    this.props.onAfterAdd();

    document.getElementById('todo').value = '';
  }

  render() {
    return (
      <form className="TodoAddForm" onSubmit={ event => this.onSubmit(event) }>
        <label htmlFor="todo">New todo:</label>
        <input type="text" name="todo" id="todo" value={ this.state.todo } onChange={ (event) => this.setState({ todo: event.target.value })} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

TodoAddForm.propTypes = {
  onAfterAdd: PropTypes.func,
  items: PropTypes.array,
};

export default TodoAddForm;