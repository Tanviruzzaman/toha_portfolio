# Tanvir Toha - Portfolio Website

A modern, professional portfolio website built with **React** and **Vite**, showcasing skills in frontend development, Firebase, performance optimization, and testing.

## Features

✨ **Modern & Professional Design**
- Clean, user-friendly interface
- Light professional theme
- Fully responsive (desktop, tablet, mobile)
- Smooth scrolling and animations

📱 **Key Sections**
- **Hero**: Eye-catching landing section
- **About**: Personal introduction with highlights
- **Skills**: Organized skill categories
  - Frontend (React, JavaScript, HTML, CSS)
  - Backend & Databases (Firebase, Node.js)
  - Performance & Monitoring (Firebase Performance, Analytics, Crash Analytics)
  - Development Practices (Testing, Git, Layout Management)
- **Projects**: Featured project showcase
- **Contact**: Contact form and social links
- **Resume**: PDF download capability

🚀 **Built With**
- React 19
- Vite (Fast build tool)
- CSS3 with CSS Variables
- Responsive Grid & Flexbox
- GitHub Pages ready

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/
│   ├── Navigation.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Contact.css
│   └── Footer.css
├── App.jsx
└── App.css
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Tanviruzzaman/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

### Add Your Images

Place your images in the `public/` folder:
- `public/toha1.jpg` - Profile image for hero section
- `public/toha2.jpg` - Secondary image for about section

### Add Your Resume

Place your resume as `public/resume.pdf`

### Update Personal Info

Edit these files:
1. `src/components/About.jsx` - Add your bio and social links
2. `src/components/Contact.jsx` - Update email and contact info
3. `src/components/Hero.jsx` - Update subtitle and description if needed

### Customize Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main blue */
  --secondary-color: #1e40af;    /* Dark blue */
  --accent-color: #dbeafe;       /* Light blue */
  /* ... */
}
```

## Building for Production

```bash
# Build the project
npm run build

# Preview the built version
npm run preview
```

## Deployment to GitHub Pages

### Prerequisites
- Repository on GitHub
- GitHub account

### Steps

1. **Update repository name in vite.config.js:**
   ```javascript
   base: '/portfolio/'  // Change 'portfolio' to your repo name
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Select Pages section
   - Choose `gh-pages` branch as source
   - Save

Your portfolio will be live at: `https://Tanviruzzaman.github.io/portfolio/`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Performance Optimization

This portfolio is optimized for:
- ⚡ Fast loading (Vite)
- 📊 Firebase Analytics integration ready
- 🔍 SEO friendly structure
- ♿ Accessibility considerations

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Run ESLint
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: CSS3
- **Deployment**: GitHub Pages
- **Version Control**: Git

## Skills Highlighted

- ✅ React
- ✅ JavaScript (ES6+)
- ✅ HTML5 & CSS3
- ✅ Responsive Design
- ✅ Firebase (Performance, Analytics, Crash Analytics)
- ✅ Performance Optimization
- ✅ Caching Strategies
- ✅ Component Testing
- ✅ Git & Version Control

## License

This project is open source and available under the MIT License.

## Connect

- 💼 LinkedIn: [Tanvir Toha](https://www.linkedin.com/in/tanvir-toha-506806306)
- 💻 GitHub: [Tanviruzzaman](https://github.com/Tanviruzzaman)
- 📧 Email: your.email@example.com

---

Feel free to fork this portfolio template and customize it for your own use! 🚀
