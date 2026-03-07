# Axon WebApp

A React + Tailwind CSS web application built with the **MVVM (Model-View-ViewModel)** design pattern.

## Architecture

```
src/
├── models/          # Data structures & business entities
├── services/        # Data access, API calls, persistence logic
├── viewmodels/      # Custom hooks bridging Models/Services ↔ Views
└── views/
    ├── components/  # Reusable UI components
    └── pages/       # Page-level view compositions
```

| Layer       | Responsibility                                  | Example               |
| ----------- | ----------------------------------------------- | --------------------- |
| **Model**   | Plain data classes, no UI awareness              | `TodoModel.js`        |
| **Service** | CRUD operations, localStorage/API calls          | `TodoService.js`      |
| **ViewModel** | React hooks exposing state + actions to views  | `useTodoViewModel.js` |
| **View**    | JSX components, only consumes ViewModel output   | `TodoPage.jsx`        |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling

## License

MIT
