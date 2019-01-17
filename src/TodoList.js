import React from 'react';
import PropTypes from 'prop-types';

import TodoCount from './TodoCount';

import { sort } from './store';

class TodoList extends React.Component {
  render() {
    const items = sort(this.props.items)
    let listItems = [];

    for (var index = 0; index < items.length; index += 1) {
      let item = items[index]

      listItems.push(
        <li
          key={index}
          className={ (item.isComplete ? '' : 'in') + 'complete' }
          onClick={ () => {
            item.isComplete = item.isComplete ? false : true;

            window.sessionStorage.setItem('todos', JSON.stringify(items));

            if (typeof this.props.onChange === 'function') {
              this.props.onChange();
            }
          } }
        >
          { item.isComplete ? <span>&#10003; <s>{ item.text }</s></span> : item.text }
        </li>
      );
    }

    // ADD LINE
    //const totalComplete = items.filter(item => item.isComplete === true).length;

    return (
      <div>
        <TodoCount items={ items } />
        <ul className="TodoList">
          { listItems }
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  onChange: PropTypes.func,
};

export default TodoList;