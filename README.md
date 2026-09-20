# Tanvir Toha — Portfolio Website

A modern, responsive personal portfolio for **Tanviruzzaman Toha**, Android Platform Engineer at
Softify BD Ltd. Built with **React 19** and **Vite**, and deployed to GitHub Pages.

🔗 **Live site:** https://tanviruzzaman.github.io/toha_portfolio/

## About

I build production mobile platforms for ISP and education clients. I'm the lead contributor on a
white-label Android platform that ships **1,000+ separately branded apps** to Google Play from a
single Java codebase, along with the build tooling, release automation, and payment/hardware
integrations that keep it shipping.

- 📍 Narayanganj, Dhaka, Bangladesh
- 💼 [LinkedIn](https://www.linkedin.com/in/tanvir-toha-506806306)
- 💻 [GitHub](https://github.com/Tanviruzzaman)
- 📧 toha@softifybd.com

## Featured work

- **ISP Digital — White-label ISP Platform.** One Java codebase shipping 1,000+ separately branded,
  separately signed apps to Google Play; three role-based apps in one binary (subscriber, ISP admin,
  MAC reseller). 9 payment gateways behind a common abstraction, real-time MikroTik bandwidth
  monitoring over SignalR, and Bluetooth ESC/POS + Sunmi thermal receipt printing.
- **Edufy — School Management Platform.** A 135K-LOC Flutter school ERP with 40+ modules shipping as
  300 white-label apps; Admin/Teacher/Student roles, feature-first architecture (Riverpod, Dio,
  go_router) with token interceptor, session invalidation and encrypted storage, and 5-language i18n
  including RTL.
- **Release Automation Pipeline.** Python + Fastlane tooling (keystore generation, flavor
  scaffolding, resource generation, batched Gradle builds, direct Play API publishing) that turns a
  300-app release into a single unattended run.
- **Build-time Firebase Config Resolver.** A Gradle task that auto-selects the correct
  `google-services.json` from 37 Firebase projects per `applicationId` and fails the build on an
  unregistered app.

## Tech stack

- **Framework:** React 19
- **Build tool:** Vite
- **Styling:** CSS3 with CSS variables (light/dark theme, responsive grid & flexbox)
- **Deployment:** GitHub Pages via GitHub Actions

## Project structure

```
src/
├── components/    # Navigation, Hero, About, Skills, Projects, Contact, Footer
├── styles/        # Per-component CSS
├── assets/        # Images and resume
├── App.jsx
└── main.jsx
public/            # Static assets (favicon, images, resume.pdf)
```

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

## Deployment

Every push to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which lints, builds, and deploys the site to GitHub Pages.

The Vite `base` is set to `/toha_portfolio/` in `vite.config.js` to match the repository name.

## License

Released under the MIT License.
