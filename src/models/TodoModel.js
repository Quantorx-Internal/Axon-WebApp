/**
 * Todo Model - Pure data structure representing a todo item.
 */
export class TodoModel {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.createdAt = new Date();
  }

  toggle() {
    return new TodoModel(this.id, this.title, !this.completed);
  }
}
