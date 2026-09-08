# Nagarjun Myakala — 3D Interactive Portfolio

An immersive, high-performance 3D portfolio website built for **Nagarjun Myakala**, AI Full Stack Developer & Data Analyst based in Hyderabad, India.

---

## 🌟 Features & Highlights

- **3D Spatial Navigation**: Built with React Three Fiber, Three.js, and GSAP. Visitors fly across spatial coordinates representing distinct portfolio zones (Hero Nexus, Profile, Skills Constellation, 3D Project Deck, Experience Timeline, Contact Beacon).
- **Interactive 3D Project Cards**: 4 featured projects arranged in a curved 3D gallery with dynamic hover tilts, neon edge highlights, and instant case study expansion.
- **Deep Case Study Modals**: Complete problem statement, technical approach, measurable business outcomes, and repository links powered by Framer Motion.
- **Accessible & High-Performance Fallback Mode**: Automatically detects low-power or mobile devices and offers an instant toggle between the 3D spatial world and a sleek, semantic 2D view.
- **Decoupled Data Architecture**: All content is stored in `src/data/portfolioData.ts` with strict TypeScript types, so updates never require touching 3D or layout code.
- **Dual Resume Profile Viewer**: Choose and download between specialized AI Full Stack Developer and Data Analyst resumes.
- **Working Contact Form**: Interactive glassmorphic modal with instant feedback, ready to connect with services like Formspree, Resend, or EmailJS.

---

## 🛠️ Tech Stack

- **Core**: React 18 + Vite + TypeScript
- **3D Graphics**: Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Animation & Transitions**: GSAP (Camera & spatial transitions) + Framer Motion (2D UI overlays)
- **Styling**: Tailwind CSS + Custom Glassmorphism & Cyber Glow utilities
- **State Management**: Zustand
- **Icons**: Lucide React

---

## 📁 Project Structure

```
PORTFILO1/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── public/
│   ├── favicon.svg
│   └── resumes/
│       ├── Nagarjun_Myakala_AI_FullStack.pdf
│       └── Nagarjun_Myakala_Data_Analyst.pdf
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── portfolio.ts           # TypeScript models & types
    ├── data/
    │   └── portfolioData.ts       # All portfolio content (editable)
    ├── store/
    │   └── usePortfolioStore.ts   # Zustand state & camera coordinate map
    ├── components/
    │   ├── canvas/
    │   │   ├── PortfolioCanvas.tsx# Master R3F canvas
    │   │   ├── CameraRig.tsx      # GSAP spatial camera controller
    │   │   ├── DataParticles.tsx  # Ambient particle stream & grid
    │   │   └── zones/
    │   │       ├── HeroZone.tsx   # 3D Gyroscopic AI Core & Typography
    │   │       ├── ProjectsZone.tsx# Curved 3D Project Arc
    │   │       ├── ProjectCard3D.tsx# Individual interactive 3D card
    │   │       ├── AboutZone.tsx  # Profile & stats
    │   │       ├── SkillsZone.tsx # 4 Skill orbs
    │   │       ├── ExperienceZone.tsx# Career timeline
    │   │       └── ContactZone.tsx# Beacon & social links
    │   └── ui/
    │       ├── Navbar.tsx         # Brand, zone pills, 3D/2D toggle
    │       ├── ZoneNavigation.tsx # Side dot navigator & keyboard shortcuts
    │       ├── ProjectModal.tsx   # Detailed case study modal
    │       ├── ResumeModal.tsx    # Dual resume viewer/downloader
    │       ├── ContactModal.tsx   # Working contact form
    │       ├── Accessible2DView.tsx# Semantic responsive 2D view
    │       └── LoadingScreen.tsx  # Futuristic boot sequence
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm / yarn

### Installation
```bash
# Clone the repository and navigate into the folder
cd PORTFILO1

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will launch at `http://localhost:5173/`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 Deploying to Vercel

1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## ✏️ Content Customization

To edit bio, projects, stats, or links, simply open:
👉 `src/data/portfolioData.ts`

Any edits there are immediately reflected across both the 3D scene and the 2D accessible view without needing to touch Three.js coordinates or shaders!
