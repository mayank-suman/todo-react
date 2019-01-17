import React from 'react';
import PropTypes from 'prop-types';

class TodoCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    // add line
      totalComplete: props.items.filter(item => item.isComplete === true).length,
    };
  }

  render() {
    if (this.props.items.length === 0) {
      return null;
    }

    return (
      <p className="TodoCount">
        { this.state.totalComplete === this.props.items.length ? 'All todos complete, well done!' : (
          `${this.state.totalComplete} / ${this.props.items.length} complete`
        ) }
      </p>
    );
  }
}

TodoCount.propTypes = {
  onChange: PropTypes.func,
};

export default TodoCount;