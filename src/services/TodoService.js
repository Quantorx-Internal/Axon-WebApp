import { TodoModel } from '../models/TodoModel';

const STORAGE_KEY = 'axon-todos';

/**
 * TodoService - Handles data persistence and business logic.
 * In a real app, this would call an API. Here it uses localStorage.
 */
export const TodoService = {
  getAll() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw).map(
      (t) => new TodoModel(t.id, t.title, t.completed),
    );
  },

  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  create(title) {
    const todos = this.getAll();
    const newTodo = new TodoModel(crypto.randomUUID(), title);
    const updated = [...todos, newTodo];
    this.save(updated);
    return updated;
  },

  toggle(id) {
    const todos = this.getAll().map((t) =>
      t.id === id ? t.toggle() : t,
    );
    this.save(todos);
    return todos;
  },

  remove(id) {
    const todos = this.getAll().filter((t) => t.id !== id);
    this.save(todos);
    return todos;
  },

  clearCompleted() {
    const todos = this.getAll().filter((t) => !t.completed);
    this.save(todos);
    return todos;
  },
};
