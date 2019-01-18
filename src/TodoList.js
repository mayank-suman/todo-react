import React from 'react';
import PropTypes from 'prop-types';

import TodoCount from './TodoCount';

import { sort } from './store';

class TodoList extends React.Component {
  render() {
    const items = sort(this.props.items);

    // ADD THIS LINE
    //const totalComplete = items.filter(item => item.isComplete === true).length;

    return (
      <div>
        <TodoCount items={ items } />
        <ul className="TodoList">
          {this.renderListItems() }
        </ul>
      </div>
    );
  }

    // ADD THIS LINE
  renderListItems() {
    let self = this;
    const items = sort(this.props.items);
    return items.map((item, itemIndx) => {
      return (<li key={itemIndx} className={(item.isComplete ? '' : 'in') + 'complete'} onClick={() => {
        item.isComplete = item.isComplete ? false : true;
        window.sessionStorage.setItem('todos', JSON.stringify(items));
        if (typeof self.props.onChange === 'function') {
          self.props.onChange();
        }
      }}>
        {item.isComplete ? <span>&#10003; <s>{item.text}</s></span> : item.text}
      </li>);
    });
  }
}

TodoList.propTypes = {
  onChange: PropTypes.func,
};

export default TodoList;