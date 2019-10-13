import React, { Component } from 'react'
import { connect } from 'react-redux';
import classNames from 'classnames';

import './App.css'

class App extends Component {
  render() {
    const { todos } = this.props;
    console.log(todos);

    return (
      <div className="TodoWrapper">
        { todos.map(todo => (
          <div
            className={classNames('Todo', {
              "Incompleted": !todo.isCompleted(),
            })}
          >
            { todo.getContent() }
          </div>
        )) }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.TodoReducer.todos,
})

export default connect(
  mapStateToProps,
)(App)
