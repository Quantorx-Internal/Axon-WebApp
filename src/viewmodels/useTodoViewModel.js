import { useState, useCallback } from 'react';
import { TodoService } from '../services/TodoService';

/**
 * useTodoViewModel - ViewModel hook that exposes state and actions to the View.
 * The View never touches the Service or Model directly.
 */
export function useTodoViewModel() {
  const [todos, setTodos] = useState(() => TodoService.getAll());
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  const addTodo = useCallback((title) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTodos(TodoService.create(trimmed));
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(TodoService.toggle(id));
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos(TodoService.remove(id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos(TodoService.clearCompleted());
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  return {
    todos: filteredTodos,
    filter,
    activeCount,
    hasCompleted,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
  };
}
