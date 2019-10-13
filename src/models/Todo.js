class Todo {
  constructor({ id, content = '', completed = false }) {
    this.id = id || (new Date().getTime());
    this.content = content;
    this.completed = completed;
  }

  getId() {
    return this.id;
  }

  getContent() {
    return this.content;
  }

  isCompleted() {
    return this.completed;
  }
}

export default Todo;
