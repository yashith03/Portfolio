# 🚀 Modern Glassmorphism Portfolio

A premium, high-performance developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Featuring a custom-built GitHub contribution graph, dynamic project showcases, and a sleek bento-style design.

![Portfolio Preview](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=600&fit=crop)

## ✨ Features

- **💎 Modern Aesthetic**: Full glassmorphism design system with smooth gradients and backdrop blurs.
- **📊 Live GitHub Graph**: Custom-themed, pixel-perfect GitHub contribution graph fetching real-time data via GraphQL.
- **📱 Responsive Layout**: Fully optimized for mobile, tablet, and desktop screens.
- **🎭 Smooth Animations**: Powered by Framer Motion for staggered entrances, hover effects, and modular transitions.
- **📂 Dynamic Data**: Project and personal information centralized in a single JSON schema for easy updates.
- **🚀 Performance-First**: Built with Vite for rapid development and optimized production bundles.

## 🛠 Tech Stack

- **Frontend**: [React 18](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Fetching**: GitHub GraphQL API
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (Latest LTS recommended)
- A GitHub Personal Access Token (PAT)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/yashith03/Portfolio.git

# Enter the directory
cd Portfolio

# Install dependencies
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

### 4. Run Locally
```bash
npm run dev
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── ui/           # Reusable atomic components (Cards, Buttons, etc.)
│   ├── sections/     # Main page sections (Hero, Projects, TechStack)
├── data/
│   └── portfolio.json # The source of truth for all content
├── lib/
│   ├── useGithubContributions.ts # API logic for GitHub activity
│   └── usePortfolioData.ts       # Hook to access global portfolio data
├── App.tsx           # Main application entry
└── main.tsx          # React hydration
```

## 📈 GitHub Graph Configuration

The repository includes a highly customized `GithubContributionGraph` component. To update the displayed user:
1. Open `src/App.tsx`
2. Change the `username` prop:
   ```tsx
   <GithubContributionGraph username="yashith03" />
   ```
---

Designed with ❤️ to showcase art through engineering.
