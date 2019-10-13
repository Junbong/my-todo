import TodoActions from '../actions/TodoActions';
import Todo from '../models/Todo'

const initialState = {
  todos: [
    new Todo({ content: 'Test1' }),
    new Todo({ content: 'Test2', completed: true }),
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TodoActions.CREATE_TODO: {
      const newTodos = state.todos;
      newTodos.push(new Todo({
        id: new Date().getTime(),
        content: action.payload.content,
      }));
      return {
        ...state,
        todos: newTodos,
      }
    }

    case TodoActions.REMOVE_TODO: {
      return {
        ...state,
      }
    }

    case TodoActions.COMPLETE_TODO: {
      return {
        ...state,
      }
    }

    default:
      return state;
  }
}
