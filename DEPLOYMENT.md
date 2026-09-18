# GitHub Pages Deployment Guide

## Deployment Instructions

### Step 1: Prepare Your Images and Resume

1. **Add your images:**
   - Place your profile image as `public/toha1.jpg`
   - Place your secondary image as `public/toha2.jpg`
   - Recommended image size: 400x400px for profile images

2. **Add your resume:**
   - Place your resume PDF as `public/resume.pdf`

### Step 2: Update Personal Information

Edit the following files to add your contact details:

1. **src/components/About.jsx**
   - Update your email address
   - Customize the description

2. **src/components/Contact.jsx**
   - Update your email address
   - Verify LinkedIn and GitHub URLs

3. **src/components/Hero.jsx**
   - Update subtitle and description if needed

### Step 3: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Tanviruzzaman/toha_portfolio.git
git push -u origin main
```

### Step 4: Create gh-pages Branch

```bash
git checkout -b gh-pages
git push origin gh-pages
```

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

Or manually:

```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Step 6: Configure GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select `gh-pages` as the source branch
4. Save and wait for deployment

Your portfolio will be live at: `https://Tanviruzzaman.github.io/toha_portfolio/`

## Customization Tips

### Change Color Theme
Edit `:root` CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #2563eb;  /* Change this color */
  --secondary-color: #1e40af;
  /* ... other variables */
}
```

### Update Projects Section
Edit `src/components/Projects.jsx` and replace the `projects` array with your actual projects.

### Add More Sections
1. Create a new component in `src/components/`
2. Create corresponding CSS in `src/styles/`
3. Import and add to `src/App.jsx`

## Troubleshooting

**Images not loading:**
- Ensure images are in `public/` folder with correct filenames
- Check browser console for error messages

**Styles not loading:**
- Clear browser cache (Ctrl+Shift+Del)
- Rebuild with `npm run build`

**Deploy not working:**
- Verify git configuration
- Check that `gh-pages` branch exists
- Ensure repository name is correct in vite.config.js base path

## Technologies Used

- React 19
- Vite
- CSS3
- GitHub Pages
- Firebase (performance monitoring ready)

Enjoy your portfolio! 🚀
