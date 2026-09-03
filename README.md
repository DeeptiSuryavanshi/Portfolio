# 🚀 Deepti Suryavanshi - Production Developer Portfolio

A world-class, interactive developer portfolio engineered with modern React 19, TypeScript, Tailwind CSS, Motion, and Three.js. Crafted with the design language of Apple, Linear, and Vercel.

Live Preview: [https://deeptisuryavanshi.dev](https://deeptisuryavanshi.dev)

---

## ✨ Features & Architecture

* **Interactive Terminal (`>_`)**: Functional shell supporting `help`, `about`, `skills`, `projects`, `experience`, `contact`, `resume`, `clear`, `theme`, and auto-completion with Tab.
* **Command Palette (`Ctrl + K` / `⌘K`)**: Fast keyboard-driven navigation, search, and action executor.
* **Full-Screen Aurora & 3D Particle Starfield**: Three.js WebGL canvas background with mouse parallax and glowing ambient meshes.
* **Interactive IDE Simulation**: Live Python AST code runner in the hero section.
* **Featured Projects Showcase**: Detailed modals with problem statement, architecture, measured impact, and source code links:
  1. *GitHub PR Review Automation Tool* (Python AST, FastAPI, GitHub Actions)
  2. *Fog Computing IoT Load Balancer* (SimPy, Edge scheduling, Latency optimization)
  3. *AI Decision Intelligence Platform* (Google Gemini API, Explainable reasoning)
  4. *Executive BI Tableau Dashboard* (Deloitte Simulation, Churn & CLV analysis)
* **GitHub Activity Heatmap**: Interactive 52-week contribution matrix, language distribution, and real-time commit stream.
* **Live System Widgets**: Real-time India (IST) clock, persistent visitor counter, and "Now Playing" ambient lofi synth audio.
* **Dark & Light Mode**: Seamless theme switching with high contrast and WCAG AA accessibility.
* **ATS Resume Generator & Download**: One-click printable PDF document generation with celebratory confetti.
* **EmailJS Ready Contact Form**: Validation and direct transmission with toast feedback.
* **SEO & Metadata**: JSON-LD Structured Data, Open Graph tags, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Tech Stack

* **Core**: React 19, Vite, TypeScript
* **Styling**: Tailwind CSS v4, Glassmorphism, CSS Variables
* **Motion & 3D**: Motion (`motion/react`), Three.js WebGL
* **Icons**: Lucide React
* **Effects**: Canvas Confetti, Web Audio API
* **Email**: EmailJS (`@emailjs/browser`)

---

## 📦 Local Installation & Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/deeptisuryavanshi/developer-portfolio.git
   cd developer-portfolio
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure Environment Variables (Optional):**
   Copy `.env.example` to `.env`:
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   Fill in optional EmailJS credentials if you wish to route form submissions directly to your inbox:
   * `VITE_EMAILJS_SERVICE_ID`
   * `VITE_EMAILJS_TEMPLATE_ID`
   * `VITE_EMAILJS_PUBLIC_KEY`

4. **Start Development Server:**
   \`\`\`bash
   npm run dev
   \`\`\`
   Open `http://localhost:3000` in your browser.

5. **Type Check & Lint:**
   \`\`\`bash
   npm run lint
   \`\`\`

6. **Production Build:**
   \`\`\`bash
   npm run build
   \`\`\`

---

## 🚀 Deployment Guide (Vercel)

1. Push your repository to **GitHub**.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `developer-portfolio` repository.
4. **Build Settings**:
   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
   * **Install Command**: `npm install`
5. **Environment Variables**:
   Add any optional variables from `.env` (`VITE_EMAILJS_*`).
6. Click **Deploy**. Your portfolio is live with automated CI/CD!

---

## 📄 License

MIT © Deepti Suryavanshi
