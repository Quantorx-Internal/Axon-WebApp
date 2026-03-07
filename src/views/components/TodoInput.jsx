import { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-indigo-500
                   text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg
                   hover:bg-indigo-700 transition-colors font-medium"
      >
        Add
      </button>
    </form>
  );
}
