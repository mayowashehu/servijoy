# ServiJoy

## Overview

ServiJoy is a React + Vite frontend for a modern service marketplace. It's designed to connect customers with local service providers, manage the booking lifecycle, and support three distinct experiences — customer, vendor, and admin — within a single application.

This repository contains the **frontend application only**. It is built to integrate with a backend API for authentication and data; the UI, routing, and role-based access control are fully in place on the client side.

## Business Problem

Local service marketplaces (home services, repairs, personal services, etc.) typically struggle with three things: helping customers discover trustworthy providers, giving vendors a manageable way to handle bookings and earnings, and giving the platform owner visibility and control over the whole system. Most early-stage marketplace products either skip the admin/vendor side entirely or bolt it on later.

## Solution

ServiJoy addresses this by building all three experiences from the start:

- A public marketing site where customers can discover services and vendors
- An authenticated customer/vendor dashboard for managing bookings, favorites, wallet, and disputes
- A protected admin panel for managing users, vendors, services, orders, and platform-level disputes

## Features

**Public pages**
- Home page with service search, featured sections, and vendor sign-up information
- Services page with searchable categories and service cards
- Individual service detail pages with reviews and related services
- Vendor listing and booking form flows
- Login/signup, email verification, and forgot-password screens

**Authentication & authorization**
- Centralized auth context (`src/context/AuthContext.jsx`) handling login, registration, admin login, logout, and password reset
- Protected customer/vendor dashboard routes via a `ProtectedRoute` wrapper
- Separate admin route guard (`src/Admin/AdminRoute.jsx`)

**Customer / vendor dashboard**
- Responsive sidebar layout with theme toggling (`src/layouts/DashboardLayout.jsx`)
- Vendor-side: service management, booking requests, booking calendar, earnings, dispute management
- Customer-side: explore services, bookings, favorites, wallet, disputes, messages, notifications, settings

**Admin panel**
- Dedicated admin layout and sidebar (`src/Admin/layout/AdminDashboardLayout.jsx`)
- Dashboard overview, user/vendor management, service management, order management, dispute management, analytics, and platform settings

**Note on completeness:** the frontend currently expects a backend API (via `VITE_BACKEND_URL`) for authentication and data. Vendor listing data currently falls back to mock data (`src/mock/Api.js`) where a live backend isn't connected.

## Architecture Overview

ServiJoy is a client-rendered single-page application. Routing and layout composition happen in `src/App.jsx`, which defines three route groups — public, dashboard (customer/vendor), and admin — each wrapped in its own layout and access guard. Authentication state is managed centrally through React Context and consumed by route guards and UI components that need to know the current user's role. UI state (theme, sidebar, forms) is handled with local component state and React Hook Form; there is no global state management library in use beyond context.

## Tech Stack

- React 18
- Vite
- Tailwind CSS + DaisyUI + tailwindcss-animate
- React Router DOM
- Axios
- Framer Motion (page transitions)
- React Hook Form + react-datepicker
- Chart.js / Recharts (analytics displays)
- Socket.IO client (available in dependencies)

#
## Live Demo

https://servijoy-v1.vercel.app

## Repository

https://github.com/mayowashehu/servijoy

## Installation

```bash
# Clone the repository
git clone https://github.com/mayowashehu/servijoy.git
cd servijoy

# Install dependencies
npm install

# Configure environment variables
# Create a .env file with:
VITE_BACKEND_URL=http://localhost:5000

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Route definitions, layout composition
├── main.jsx              # App entry point
├── context/
│   └── AuthContext.jsx   # Auth provider and hooks
├── layouts/
│   └── DashboardLayout.jsx
├── Admin/
│   ├── layout/AdminDashboardLayout.jsx
│   └── AdminRoute.jsx
├── components/           # Reusable UI, home sections, dashboard pieces
├── pages/                 # Marketing, auth, dashboard, and service pages
├── mock/                  # Mock API data for local development
└── lib/                   # UI utilities and theme helpers
```

## Future Improvements

- Connect to and confirm a production backend API for authentication, bookings, and payments
- Replace mock vendor data with live API data
- Add automated tests for auth flows and protected routing
- Expand admin analytics with real data sources
- Update branding/metadata in `index.html` for production launch

## License

This project is currently unlicensed. All rights reserved unless a license is added.

## Contribution

This is a solo portfolio/client project and not currently open for external contributions. Feel free to open an issue if you spot a bug or have a suggestion.
