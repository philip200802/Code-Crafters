# Philip Adegboyega - Portfolio Redesign

A minimal, professional full-stack web developer portfolio built with React, Vite, and Tailwind CSS.

## Features

- ✨ Clean, minimal design inspired by modern developer portfolios
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with Vite
- 🎨 Tailwind CSS for styling
- 🧩 Modular React component architecture
- 🔗 Smooth navigation with hash-based routing
- 📧 Contact form functionality
- 🎯 SEO-optimized with meta tags

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **CSS Processing**: PostCSS
- **Linting**: Oxlint

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

The development server will start at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   ├── Hero.jsx            # Hero section with CTAs
│   ├── About.jsx           # About me section
│   ├── Skills.jsx          # Skills by category
│   ├── Projects.jsx        # Project portfolio grid
│   ├── Github.jsx          # GitHub profile section
│   ├── Contact.jsx         # Contact form and info
│   └── Footer.jsx          # Footer with links
├── data/
│   ├── projects.js         # Projects data
│   └── skills.js           # Skills data
├── App.jsx                 # Main component
├── App.css                 # App styles
├── index.css               # Global styles with Tailwind
└── main.jsx                # Entry point
```

## Customization

### Projects
Edit `src/data/projects.js` to add or modify projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Short description",
    image: "/image/project.jpg",
    technologies: ["React", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  // ... more projects
];
```

### Skills
Edit `src/data/skills.js` to update skill categories:

```javascript
const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "Firebase"],
  tools: ["Git", "GitHub", "Vercel"]
};
```

## Design Features

- **Color Scheme**: Minimal with teal accent (#00685F)
- **Typography**: Clean sans-serif with strong hierarchy
- **Spacing**: Generous whitespace for readability
- **Animations**: Subtle transitions and hover effects
- **Accessibility**: Semantic HTML, proper contrast, keyboard navigation

## Performance

- Lightweight bundle with Vite
- Optimized images in public folder
- CSS purging with Tailwind
- Fast development hot reload

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

Connect your GitHub repository to Netlify for automatic deployments.

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## Contact

- **Email**: adegboyegaphilip401@gmail.com
- **Phone**: +234 (0) 7064136432
- **Location**: Ogbomoso, Oyo State, Nigeria
- **GitHub**: [@philip200802](https://github.com/philip200802)

## License

© 2026 Philip Adegboyega. All rights reserved.
