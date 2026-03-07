const FILTERS = ['all', 'active', 'completed'];

export default function TodoFilter({ current, onChange }) {
  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3 py-1 rounded-md text-sm font-medium capitalize transition-colors ${
            current === f
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
