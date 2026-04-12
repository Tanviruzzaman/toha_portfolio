# 🚀 Quick Start Guide - Tanvir Toha Portfolio

Thank you for choosing this portfolio template! Follow these steps to customize and deploy your portfolio.

## 📋 Prerequisites

- Node.js (v18 or higher) - [Download](https://nodejs.org/)
- Git - [Download](https://git-scm.com/)
- GitHub Account - [Sign up](https://github.com/)

## ⚙️ Step 1: Initial Setup

```bash
# Navigate to your project
cd vite-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser to `http://localhost:5173` to see your portfolio!

## 🎨 Step 2: Customize Your Presence

### Add Your Images

1. Prepare two images (recommended 480x480 pixels minimum)
   - Profile photo for hero section
   - Secondary photo for about section

2. Place them in the `public/` folder:
   - `public/toha1.jpg` → Profile image
   - `public/toha2.jpg` → About section image

### Add Your Resume

Place your PDF resume in the public folder:
- `public/resume.pdf`

## ✏️ Step 3: Update Your Content

### 1. About Section
**File:** `src/components/About.jsx`

Update the bio paragraph and social links:
```jsx
<p>
  // Replace this with YOUR bio
  I'm a passionate full-stack developer...
</p>

// Update email
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### 2. Contact Section
**File:** `src/components/Contact.jsx`

Replace these with your actual contact information:
```jsx
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://www.linkedin.com/in/YOUR-PROFILE">LinkedIn URL</a>
<a href="https://github.com/YOUR-USERNAME">GitHub URL</a>
```

### 3. Skills Section
**File:** `src/components/Skills.jsx`

Add or modify skill categories:
```jsx
const skillCategories = [
  {
    category: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  }
]
```

### 4. Projects Section
**File:** `src/components/Projects.jsx`

Replace the demo projects with your actual projects:
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['Tech 1', 'Tech 2'],
    link: 'https://your-project-url.com',
    type: 'Featured'
  }
]
```

### 5. Hero Section (Optional)
**File:** `src/components/Hero.jsx`

Customize the headline:
```jsx
<h1 className="hero-title">
  Hi, I'm <span className="highlight">Your Name</span>
</h1>
<p className="hero-subtitle">
  Your Title | Your Skills
</p>
```

## 🎨 Step 4: Customize Colors (Optional)

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main color */
  --secondary-color: #1e40af;    /* Darker shade */
  --accent-color: #dbeafe;       /* Light accent */
  --text-dark: #1f2937;
  --text-light: #6b7280;
  /* ... other variables */
}
```

Common color combinations:
- **Professional Blue** (current): `#2563eb` / `#1e40af`
- **Vibrant Purple**: `#a855f7` / `#9333ea`
- **Modern Green**: `#10b981` / `#059669`
- **Tech Orange**: `#f97316` / `#ea580c`

## 🧪 Step 5: Test Your Portfolio

```bash
# Start development server
npm run dev

# Check for errors
npm run lint

# Build for production
npm run build

# Test production build locally
npm run preview
```

## 📤 Step 6: Deploy to GitHub Pages

### Option A: Automatic (Recommended)

1. **Create a new GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `portfolio`
   - Click "Create repository"

2. **Initialize Git and push**
   ```bash
   cd vite-project
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Create gh-pages branch**
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as source
   - Click Save

### Option B: Using GitHub Actions

1. GitHub Actions is configured in `.github/workflows/deploy.yml`
2. Every push to `main` will automatically build and deploy

Your portfolio will be live at: `https://YOUR-USERNAME.github.io/portfolio/`

## 📝 Environment Variables (For Firebase Integration)

Create a `.env.local` file for Firebase configuration (optional):

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🐛 Troubleshooting

### Images not showing?
- Check files are in `public/` folder
- Verify filenames match: `toha1.jpg`, `toha2.jpg`
- Clear browser cache (Ctrl+Shift+Delete)

### Styles look wrong?
- Run: `npm run build`
- Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### Deploy not working?
```bash
# Verify git config
git remote -v

# Check gh-pages branch exists
git branch -a

# Try manual deploy
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

### Port 5173 already in use?
```bash
# Use different port
npm run dev -- --port 3000
```

## 📚 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/              # CSS files
│   ├── Navigation.css
│   ├── Hero.css
│   └── ...
├── App.jsx              # Main app component
├── App.css              # Global styles
├── main.jsx
└── index.css

public/                  # Static files
├── toha1.jpg           # Your profile image
├── toha2.jpg           # Your secondary image
└── resume.pdf          # Your resume

index.html              # HTML entry point
vite.config.js         # Vite configuration
package.json           # Project dependencies
```

## 🚀 Performance Tips

1. **Optimize images**: Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
2. **Use modern image formats**: Convert to WebP for faster loading
3. **Lazy load sections**: Already built in for images
4. **Monitor with Firebase**: Set up Firebase Performance monitoring for production

## 🔗 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [GitHub Pages Guide](https://pages.github.com/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 💡 Next Steps

After deploying, consider:

1. **Add Analytics**: Integrate Firebase Analytics or Google Analytics
2. **Form Handling**: Set up email form submission (Formspree, EmailJS)
3. **Blog Section**: Add a blog with markdown support
4. **Dark Mode**: Implement theme toggle
5. **Multiple Languages**: Add i18n for multiple language support
6. **Testing**: Add unit tests with Jest
7. **Performance Monitoring**: Set up Firebase Performance monitoring

## 📞 Support

For issues:
1. Check [Troubleshooting](#-troubleshooting) section
2. Review official documentation
3. Check GitHub Issues and Discussions
4. Create a new issue with details and errors

## 📄 License

This portfolio template is open source under the MIT License.

---

**Happy coding! 🎉 Your portfolio is ready to impress!**
