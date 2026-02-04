# 🚀 Modern Glassmorphism Portfolio

A premium, high-performance developer portfolio for a **Software Engineering Undergraduate** specializing in **Full-Stack Development** and **Quality Assurance**. Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, focusing on reliability and automated validation.

![Portfolio Preview](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=600&fit=crop)

## ✨ Features

- **💎 Modern Aesthetic**: Full glassmorphism design system with smooth gradients, vibrant accents, and backdrop blurs.
- **📊 Live GitHub Graph**: Custom-themed, pixel-perfect GitHub contribution graph fetching real-time data via GraphQL.
- **🧪 Focused QA Section**: Dedicated showcase for Automation Testing (Selenium, Appium), Manual Testing, and QA practices.
- **� Learning & Certifications**: Chronological record of continuous learning, including Docker, Node.js, and Software Testing certifications.
- **�📱 Responsive Layout**: Fully optimized for mobile, tablet, and desktop screens with seamless navigation.
- **🎭 Smooth Animations**: Powered by Framer Motion for staggered entrances, hover effects, and modular transitions.
- **📂 Dynamic Data**: Project and personal information centralized in a structured JSON schema for easy updates.

## 🛠 Tech Stack

- **Frontend**: [React 18](https://reactjs.org/), [Next.js](https://nextjs.org/)
- **Languages**: TypeScript, JavaScript, Java, Python
- **Backend & Database**: Node.js, NestJS, Express.js, Prisma, PostgreSQL, MongoDB, Supabase
- **Mobile**: Expo (React Native)
- **Testing**: Jest, Selenium, Appium
- **DevOps**: Docker, GitHub Actions (CI/CD), Vercel
- **Styling**: Tailwind CSS, CSS3, HTML5
- **Animations**: Framer Motion
- **Design**: Figma

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
│   ├── ui/           # Reusable atomic units (Cards, Buttons, LiveStatus, etc.)
│   ├── sections/     # Main page content blocks (Hero, QA, Experience, Projects)
├── data/
│   └── portfolio.json # The single source of truth for all content
├── lib/
│   ├── useGithubContributions.ts # GraphQL logic for GitHub activity
│   └── usePortfolioData.ts       # Global state accessibility hook
├── types/
│   └── portfolio.ts  # Strong typing for the portfolio data structure
├── App.tsx           # Application layout and suspense entry
└── main.tsx          # React application root
```

## 📄 License

Individual/Personal use. Created by [Yashith Chandeepa](https://github.com/yashith03).

---

Designed with ❤️ to showcase art through engineering.
