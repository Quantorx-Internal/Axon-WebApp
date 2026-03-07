export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-100 group">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
        />
        <span
          className={`text-gray-800 ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onRemove(todo.id)}
        className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100
                   transition-opacity text-sm font-medium"
      >
        Remove
      </button>
    </li>
  );
}
