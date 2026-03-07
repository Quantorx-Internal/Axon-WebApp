import { useTodoViewModel } from '../../viewmodels/useTodoViewModel';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import TodoFilter from '../components/TodoFilter';

export default function TodoPage() {
  const {
    todos,
    filter,
    activeCount,
    hasCompleted,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
  } = useTodoViewModel();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700 mb-1">Axon</h1>
          <p className="text-gray-500 text-sm">MVVM Todo App</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <TodoInput onAdd={addTodo} />

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              {activeCount} item{activeCount !== 1 && 's'} left
            </span>
            <TodoFilter current={filter} onChange={setFilter} />
          </div>

          {/* List */}
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              {filter === 'all'
                ? 'No todos yet. Add one above!'
                : `No ${filter} todos.`}
            </p>
          ) : (
            <ul className="space-y-2">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onRemove={removeTodo}
                />
              ))}
            </ul>
          )}

          {/* Footer */}
          {hasCompleted && (
            <div className="mt-4 text-right">
              <button
                onClick={clearCompleted}
                className="text-sm text-gray-400 hover:text-red-500 transition-colors"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>

        {/* Architecture note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Built with React + Tailwind CSS &middot; MVVM Pattern
        </p>
      </div>
    </div>
  );
}
