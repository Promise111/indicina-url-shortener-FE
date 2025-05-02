# URL Shortener

A modern URL shortening application built with React, TypeScript, and Material UI.

## Features

- Create shortened URLs from long links
- View and manage all created short URLs
- Responsive design for desktop and mobile devices
- Modern UI with Material Design components

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **UI Library**: Material UI 7
- **State Management**: React Query
- **Routing**: React Router 7
- **HTTP Client**: Axios
- **Notifications**: Notistack

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   VITE_BACKEND_BASE_URL=http://localhost:8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── api/            # API client and service functions
├── components/     # Reusable UI components
├── pages/          # Page components
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.