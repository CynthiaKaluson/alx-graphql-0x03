# ReactGuard: Error Handling Implementation

This project implements React Error Boundaries in a Next.js application with Sentry integration for error monitoring.

## 🎯 Project Tasks Completed

### ✅ Task 0: ErrorBoundary Component
- Created class-based ErrorBoundary component with TypeScript
- Implemented `getDerivedStateFromError` and `componentDidCatch` lifecycle methods
- Added fallback UI with error recovery functionality

### ✅ Task 1: Application Integration
- Wrapped the entire application in `_app.tsx` with ErrorBoundary
- Provides global error handling across all pages

### ✅ Task 2: Error Testing Component
- Created `ErrorProneComponent` that throws errors on button click
- Integrated test component in homepage for easy testing
- Demonstrates error boundary functionality

### ✅ Task 3: Sentry Integration
- Installed and configured Sentry for error monitoring
- Updated ErrorBoundary to log errors to Sentry
- Created Sentry configuration files for client and server

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
Run the development server:

bash
npm run dev
Test Error Boundaries:

Open http://localhost:3000

Click "Trigger Error" button

Observe error boundary fallback UI

Click "Try again?" to recover

📁 File Structure
text
alx-rick-and-morty-app/
├── components/
│   ├── ErrorBoundary.tsx          # Main error boundary (Tasks 0 & 3)
│   └── ErrorProneComponent.tsx    # Test component (Task 2)
├── pages/
│   ├── _app.tsx                   # App wrapper (Task 1)
│   └── index.tsx                  # Homepage with test
├── sentry.client.config.ts        # Sentry browser config
├── sentry.server.config.ts        # Sentry server config
├── next.config.js                 # Next.js + Sentry config
├── .env.local.example             # Environment template
└── README.md                      # This file
🔧 Configuration
Sentry Setup (Optional)
Create account at sentry.io

Create new project and get DSN

Copy .env.local.example to .env.local

Add your DSN: NEXT_PUBLIC_SENTRY_DSN=your_dsn_here

🧪 Testing
Visit the homepage and:

Click "Trigger Error" to simulate a component error

Observe the error boundary catching the error

See the fallback UI with error message

Click "Try again?" to reset and continue

📊 Error Handling Flow
Error Occurs: Component throws error during render

Error Caught: ErrorBoundary catches the error

State Update: getDerivedStateFromError sets error state

Error Logged: componentDidCatch logs to console and Sentry

Fallback UI: User sees friendly error message

Recovery: User can retry with "Try again?" button

🛠 Technologies Used
Next.js 13

React 18 with Error Boundaries

TypeScript

Sentry for error monitoring
