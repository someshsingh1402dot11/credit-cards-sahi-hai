# Credit Cards Sahi Hai — MVP

A bank-first credit card comparison web application built according to the **Credit Cards Sahi Hai PRD (v5)**. It provides simple, day- and spend-specific card usage guidance for everyday Indian spenders across **American Express, Axis Bank, and HDFC Bank** without jargon or complex points math.

---

## 🚀 How to Run Locally

### Prerequisites
Make sure you have **Node.js (v18+)** and **npm** installed on your system.

### Steps to Run

1. **Open terminal** in this project directory:
   ```bash
   cd "/Users/somesh/Desktop/Ccredit card sahi hai"
   ```

2. **Install dependencies** (already installed in workspace, but if fresh):
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

### Other Helpful Commands
- **Build production bundle**: `npm run build`
- **Start production server**: `npm run start`
- **Update card & offer data**: `npm run convert-data` (reads `data/cards.csv` and compiles `data/cards.json`)

---

## 📁 How to Update Card Data Without Touching Code

All card and offer data is stored in [`data/cards.csv`](data/cards.csv).

1. Edit [`data/cards.csv`](data/cards.csv) using Microsoft Excel, Apple Numbers, Google Sheets, or any text editor.
2. Run the sync command:
   ```bash
   npm run convert-data
   ```
3. The script automatically updates [`data/cards.json`](data/cards.json) and [`data/offers.json`](data/offers.json). Next.js will instantly display the updated cards and offers!

---

## 🌟 MVP Feature Tour (4 Pages)

### 1. Homepage (`/`)
- **Hero Section**: Tagline *"Smart Spending, Maximum Rewards"*, value proposition, and primary CTA *"Explore Cards by Bank"*.
- **Bank Selector**: Quick 1-click entry points to HDFC, Axis, and Amex with card counts and lead booking tips.
- **Top Picks**: Curated highlights (Infinia, Axis Atlas, Amex Platinum Travel).
- **Week-at-a-Glance Cheat Sheet**: Implements PRD Appendix A.3 (flight bookings on MakeMyTrip for Monday through Sunday).
- **How It Works**: Clear 3-step explanation (Pick Bank → Compare Cards → Learn Usage).
- **Newsletter Signup**: Email-only, zero accounts or passwords, with instant client feedback.

### 2. Bank Overview (`/banks` & `/banks/[bankId]`)
- Dedicated sub-pages for **Amex** (`/banks/amex`), **Axis** (`/banks/axis`), and **HDFC** (`/banks/hdfc`), plus an all-banks overview at `/banks`.
- Each bank overview features:
  - 3–4 cards grid (e.g. Infinia, Diners Black, Regalia Gold, Millennia for HDFC; Atlas, Magnus, Horizon, ACE for Axis; Platinum Travel, Platinum Charge, Gold Card, SmartEarn for Amex).
  - Every card tile shows: **Name, Annual Fee, Key Reward Rate, and a high-visibility "Optimal Usage Tip" box**.
  - Usage tips derived verbatim from PRD Appendix A (day, platform, discount %, caps, and minimum spend).
  - "See Affiliate Link" CTA linking to the official bank application portal.
  - "Compare {Bank} Cards" CTA opening the comparison page pre-filtered to this bank.

### 3. Comparison Page (`/compare`)
- Side-by-side comparison table filterable in place by:
  - **Issuing Bank**: All Banks, HDFC Bank, Axis Bank, American Express.
  - **Category**: All Categories, Travel, Cashback, Dining.
- Columns: Card Name, Bank, Annual Fee, Reward Rate, Best For, Optimal Usage Tip, and Affiliate CTA.
- Responsive design: degrades to a clean card stack on mobile with **touch targets ≥ 48px**.
- Empty state: clean message with a "Reset All Filters" button when a bank/category pair has no cards.
- Coming Soon badges for Cashback & Dining tips per PRD Story 3 & Section 8.

### 4. About Page (`/about`)
- Mission: *"Demystify rewards for everyday Indians."*
- Problem statement & Personas: Mr Y (everyday spender) vs Mr X (card enthusiast).
- Founder's Note on authentic, unbiased advice.
- Transparency Disclosure: *"Affiliate links don't influence advice."*
- Simple contact form for feedback or reporting expired offers.

### 5. Universal Trust & Mobile Compliance
- **Footer on Every Page**: Features the 256-Bit SSL badge and the mandatory *"Confirm details with bank"* disclaimer.
- **Mobile Experience**: Responsive hamburger menu drawer, responsive layouts, and all interactive elements meet or exceed the **48px touch target** standard.

---

## 🎨 Design Specifications
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter
- **Primary Color**: `#2563EB` (Tailwind `blue-600`)
- **Background**: Pure clean `#FFFFFF` with slate accents
- **Strict Non-Goals**: No login, no payments, no calculators, no blog.
