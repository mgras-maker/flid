# FLID - Fundacja Ludzie-Innowacje-Design

Website for the Foundation for People-Innovation-Design, featuring a modern, minimalistic design with creative animations and responsive layout.

## Features

- **Modern Design** - Clean, minimalistic UI with focus on content
- **Dark/Light Mode** - Customizable theme based on user preference
- **Responsive Layout** - Mobile-first approach that works on all devices
- **Animations** - Subtle motion using Framer Motion for enhanced UX
- **Project Management** - Display projects and publications from JSON data

## Technologies

- React 19 with React Router
- Vite build tool
- Framer Motion for animations
- Styled Components for styling
- Responsive design

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `/src` - Source code
  - `/components` - Reusable UI components
  - `/contexts` - React context providers
  - `/data` - JSON files with project data
  - `/hooks` - Custom React hooks
  - `/pages` - Application pages
  - `/styles` - Global styles

## Adding Content

### Projects

Add new projects by updating the `src/data/projectsData.js` file.

### Publications

Add new publications by updating the `src/data/publicationsData.js` file.

## License

This project is licensed under the MIT License
