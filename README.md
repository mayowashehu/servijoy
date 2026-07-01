# ServiJoy

ServiJoy is a React + Vite frontend for a modern service marketplace. It aims to connect customers with local service providers, manage bookings, and support separate user, vendor, and admin experiences.

## What this project is about

- A public marketing website with pages for Home, About, Services, How It Works, Become a Vendor, FAQ, and Service details.
- A customer/vendor dashboard protected behind authentication for booking management, service exploration, favorites, wallet, disputes, notifications, messages, and settings.
- An admin panel with protected routes for managing users/vendors, services, orders, disputes, analytics, and platform settings.
- A polished UI built with Tailwind CSS, custom theme tokens, framer-motion animations, and responsive dashboard layouts.

## Key features

- Public pages:
  - Home page with service search, featured sections, testimonials, and vendor sign-up information.
  - Services page with searchable categories and service cards.
  - Individual service detail pages with reviews and related services.
  - Vendor list and booking form flows.
  - Login / signup and forgot-password support.

- Authentication / authorization:
  - `src/context/AuthContext.jsx` manages user state, login, register, admin login, logout, and password reset.
  - Protected customer/vendor dashboard routes in `src/App.jsx` using `ProtectedRoute`.
  - Admin-only routes guarded by `src/Admin/AdminRoute.jsx`.

- Dashboard experience:
  - `src/layouts/DashboardLayout.jsx` provides responsive sidebar navigation, theme toggling, header, and footer.
  - Vendor dashboard pages include service management, booking requests, booking calendar, earnings, and dispute management.
  - User dashboard pages include explore services, my bookings, favorites, wallet, disputes, messages, notifications, and settings.

- Admin experience:
  - `src/Admin/layout/AdminDashboardLayout.jsx` handles admin sidebar and header layout.
  - Admin pages include dashboard overview, user/vendor management, service management, order management, dispute management, analytics, and settings.

## Project structure

- `src/App.jsx` — root application, route definitions, preloader, public/dashboard/admin route layout.
- `src/main.jsx` — app entrypoint.
- `src/context/AuthContext.jsx` — authentication provider and hooks.
- `src/layouts/DashboardLayout.jsx` — user/vendor dashboard layout.
- `src/Admin/layout/AdminDashboardLayout.jsx` — admin dashboard layout.
- `src/components/` — reusable UI components, home sections, service sections, auth sections, dashboard pieces.
- `src/pages/` — top-level pages for marketing, auth, dashboard, and service details.
- `src/mock/` — mock API data for local vendor examples.
- `src/lib/` — UI utilities and theme helpers.
- `src/index.css` — global styles and Tailwind imports.

## Important routes

- Public:
  - `/`
  - `/about`
  - `/services`
  - `/how-it-works`
  - `/become-a-vendor`
  - `/faq`
  - `/service/:service`
  - `/vendor-list`
  - `/login-signup`
  - `/verify-email`
  - `/forgot-password`

- Dashboard (authenticated users):
  - `/dashboard`
  - `/dashboard/manage-services`
  - `/dashboard/booking-requests`
  - `/dashboard/explore-services`
  - `/dashboard/bookings`
  - `/dashboard/favorites`
  - `/dashboard/wallet`
  - `/dashboard/disputes`
  - `/dashboard/notifications`
  - `/dashboard/messages`
  - `/dashboard/settings`
  - `/dashboard/calendar`
  - `/dashboard/earnings`
  - `/dashboard/vendor-disputes`
  - `/dashboard/book/:serviceName`

- Admin:
  - `/admin/login`
  - `/admin/dashboard`
  - `/admin/users`
  - `/admin/services`
  - `/admin/orders`
  - `/admin/disputes`
  - `/admin/analytics`
  - `/admin/settings`

## Tech stack

- React 18
- Vite
- Tailwind CSS + DaisyUI + tailwindcss-animate
- React Router DOM
- Axios for backend requests
- Framer Motion for animated page transitions
- React Hook Form and react-datepicker for forms
- Chart.js / Recharts for analytics displays
- Socket.IO client support available in dependencies

## Environment setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file if needed.

3. The project expects a backend API URL via `VITE_BACKEND_URL`.
   Example in `.env`:

   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. Start development server:

   ```bash
   npm run dev
   ```

5. Build for production:

   ```bash
   npm run build
   ```

6. Preview production build:

   ```bash
   npm run preview
   ```

## Notes

- The frontend currently relies on backend endpoints for authentication and user actions.
- `src/context/AuthContext.jsx` is the main auth integration point with login, register, admin login, logout, and password reset.
- The dashboard and admin routes are gated by authentication state.
- Mock data is used for vendor listing examples in `src/mock/Api.js`.

## Recommended next steps

- Confirm or implement the backend API to support login, registration, logout, and forgot-password flows.
- Verify the admin login endpoint and admin access guard.
- Review `src/components` for additional reusable UI patterns and brand styling.
- Update the homepage title in `index.html` for your brand.

---

ServiJoy is built to be a marketplace front end with separate customer/vendor paths and a strong admin control panel, laid out with modern Tailwind-driven styles and protected routing.
