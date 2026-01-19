# Portfolio Project - Mehedi Haque (Anik)

> Professional portfolio website built with React, Styled Components, and Framer Motion

## 🎯 Project Overview

first time trying to build a portfolio website

**Status:** Phase 1 Complete ✅ (Foundation & Setup)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-project

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start development server (Vite HMR enabled)
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
portfolio-project/
├── src/
│   ├── data/                    # 📝 EDIT CONTENT HERE
│   │   ├── personalData.js      # Name, bio, tagline
│   │   ├── projectsData.js      # Project showcase
│   │   ├── skillsData.js        # Tech stack
│   │   ├── contactData.js       # Social links
│   │   └── achievementsData.js  # Certs, awards (future)
│   │
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Buttons, Cards, etc.
│   │   ├── layout/              # Sidebar, Menu, Footer
│   │   └── ui/                  # ProjectCard, SkillBadge, etc.
│   │
│   ├── sections/                # Main page sections
│   │   ├── Hero.jsx             # Landing section
│   │   ├── About.jsx            # Bio & skills
│   │   ├── Projects.jsx         # Project grid
│   │   ├── Skills.jsx           # Tech stack
│   │   └── Contact.jsx          # Links & CTA
│   │
│   ├── styles/                  # Styling system
│   │   ├── GlobalStyles.js      # CSS reset & base
│   │   ├── theme.js             # Colors, spacing, fonts
│   │   └── animations.js        # Framer Motion variants
│   │
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Helper functions
│   └── assets/                  # Images, resume, icons
│
├── public/                      # Static files
├── docs/                        # Documentation
└── tests/                       # Test files (future)
```

---

## 🎨 Design System

### Color Palette (Brittany Chiang Inspired)

```javascript
Primary:    #64ffda  // Bright green (accents, links)
Secondary:  #0a192f  // Dark navy (background)
Tertiary:   #112240  // Lighter navy (cards)
Text:       #ccd6f6  // Light gray (main text)
Text Alt:   #8892b0  // Muted gray (secondary text)
```

### Typography

- **Heading Font:** Inter
- **Body Font:** Inter
- **Monospace Font:** JetBrains Mono

### Breakpoints

```javascript
Mobile:   480px
Tablet:   768px
Laptop:   1024px
Desktop:  1280px
```

---

## ✏️ How to Update Content

### 1. Personal Information

**File:** `src/data/personalData.js`

```javascript
export const personalData = {
  name: "Your Name",
  tagline: "Your tagline",
  bio: { ... }
};
```

### 2. Add a New Project

**File:** `src/data/projectsData.js`

```javascript
{
  id: "project-4",
  title: "Your Project",
  description: "What it does",
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",
  live: "https://...",
  image: "/src/assets/images/projects/project4.jpg",
  featured: true,
  status: "completed"
}
```

### 3. Update Skills

**File:** `src/data/skillsData.js`

```javascript
frontend: [
  {
    name: "New Skill",
    level: "intermediate",
    icon: "skill-icon"
  }
]
```

### 4. Add Social Links

**File:** `src/data/contactData.js`

```javascript
social: [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    display: true
  }
]
```

**That's it!** Changes automatically reflect across the entire site. No code changes needed.

---

## 🏗️ Architecture Decisions

### Why Styled Components?
- Component-scoped CSS (no class name conflicts)
- Dynamic styling based on props
- Theme access via `props.theme`
- Better maintainability than global CSS

### Why Vite?
- 10-20x faster than Create React App
- Instant HMR (Hot Module Replacement)
- Optimized production builds
- Modern development experience

### Why Content-as-Data?
- **Easy updates:** Edit one JSON file, changes reflect everywhere
- **No code changes:** Non-technical people can update content
- **Maintainable:** Clear separation of content and presentation
- **Scalable:** Easy to add CMS later

### Why Framer Motion?
- Production-ready animations out of the box
- Declarative animation API
- Performance optimized (GPU-accelerated)
- Minimal bundle size impact (~50KB)

---

## 🎯 Development Roadmap

### ✅ Phase 1: Foundation (COMPLETE)
- [x] Project setup (Vite + React)
- [x] Folder structure
- [x] Theme configuration
- [x] Global styles
- [x] Animation system
- [x] Data files with content structure

### 📋 Phase 2: Core Components (NEXT)
- [ ] Sidebar navigation
- [ ] Mobile menu
- [ ] Hero section
- [ ] About section
- [ ] Projects section
- [ ] Skills section
- [ ] Contact section

### 📋 Phase 3: Enhancements
- [ ] Scroll animations
- [ ] Responsive design
- [ ] Custom hooks (useScrollSpy, useMediaQuery)
- [ ] Loading states
- [ ] Error boundaries

### 📋 Phase 4: Polish
- [ ] Image optimization
- [ ] SEO meta tags
- [ ] Favicon
- [ ] Accessibility (a11y)
- [ ] Performance optimization

### 📋 Phase 5: Deployment
- [ ] Production build
- [ ] Deploy to Netlify
- [ ] Custom domain (optional)
- [ ] Analytics (optional)

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

Auto-deploys on every Git push.

### Alternative Options
- **Vercel:** Similar to Netlify, great for React
- **GitHub Pages:** Free, requires `gh-pages` package

---

## 🎓 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI framework | 18.2+ |
| **Vite** | Build tool | 5.0+ |
| **Styled Components** | CSS-in-JS styling | 6.1+ |
| **Framer Motion** | Animations | 10.16+ |
| **ESLint** | Code quality | 8.55+ |

---

## 🔮 Future Enhancements

Easy to add later:

- **Contact Form:** Netlify Forms or EmailJS
- **Blog:** Add MDX support for markdown posts
- **CMS:** Netlify CMS or Sanity.io integration
- **Dark/Light Toggle:** Theme switching
- **Analytics:** Google Analytics or Plausible
- **i18n:** Multi-language support
- **Resume Timeline:** Work experience section
- **Testimonials:** Client/colleague reviews

---

## 📝 Key Principles

1. **Content as Data** - Edit JSON files, not components
2. **Mobile-First** - Designed for all screen sizes
3. **Accessibility** - Keyboard navigation, screen readers
4. **Performance** - Optimized images, lazy loading
5. **Maintainability** - Clean code, clear structure
6. **Extensibility** - Easy to add features

---

## 🐛 Known Issues

None yet! Report issues as you find them.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Design inspiration: [Brittany Chiang](https://brittanychiang.com)
- Icons: Will add icon library (React Icons or Lucide)
- Fonts: Google Fonts (Inter, JetBrains Mono)

---

## 📞 Contact

**Mehedi Haque (Anik)**
- GitHub: [Add your link]
- LinkedIn: [Add your link]
- Email: [Add your email]

---

**Built with ❤️ using React, Styled Components, and lots of learning**
