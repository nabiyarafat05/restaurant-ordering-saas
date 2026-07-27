# FoodOrder — Multi-Tenant Restaurant Ordering Platform

**VibeAthon 6.0 — Team Quantum Coders**

A restaurant ordering platform with QR code ordering, real time updates, and a management dashboard  built for VibeAthon 6.0's "Smart Restaurant Management System" problem statement.

---

## 🙏 Attribution

This project's original codebase and structure were created by **[roshanx0](https://github.com/roshanx0)**, released under the **MIT License**.

Our team used this as our technical foundation. In line with the license terms and with confirmation from the VibeAthon 6.0 organizing team that a licensed open-source base is acceptable when clearly credited and extended, we built on top of it as described below.

- **License:** MIT License (see `LICENSE` file in this repo)

---

## ✅ What Our Team Added / Changed

- Fixed configuration and environment setup issues (Supabase connection, environment variables) to get the project running reliably for our deployment
- Deployed the application live for our team's submission
- An original AI-powered menu recommendation feature using the **Gemini API**


---

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Real-time)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **QR Generation:** qrcode.react
- **PDF Export:** jsPDF + html2canvas
- **AI Integration:** Google Gemini API 
- **Deployment:** Vercel

---

## 🚀 Features

- Multi-tenant architecture — separate dashboard per restaurant
- QR code ordering — customers scan to view menu and order
- Real-time order and menu availability updates
- Admin panel for managing restaurant registrations
- Restaurant dashboard — orders, menu, bills, reports
- Mobile responsive design
- AI-powered menu recommendations

---

## 📦 How to Run Locally

\`\`\`bash
git clone https://github.com/nabiyarafat05/restaurant-ordering-saas
cd restaurant-ordering-saas
npm install

# Create a .env file with:
# VITE_SUPABASE_URL=your_project_url
# VITE_SUPABASE_ANON_KEY=your_anon_key

npm run dev
\`\`\`

---

## 👥 Team — Quantum Coders

| Name | Role |
| Nabiya | Lead Developer — setup, deployment, configuration, integration |
| Nabiya Rafat | AI Integration |
| Adya Srivastava | Image Processing / Support |
| Nirjara | Testing and Documentation|


---

## 🔗 Live Application

https://restaurant-ordering-saas-fktx4vzj1-nabiyarafat05s-projects.vercel.app

---
