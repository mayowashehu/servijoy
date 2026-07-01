import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import BecomeAVendorPage from "./pages/BecomeAVendorPage";
import ServicesPage from "./pages/ServicesPage";
import { useEffect, useState } from "react";
import FAQpage from "./pages/FAQpage";
import ScrollToTop from "./ScrollToTop";
import AuthPage from "./pages/AuthPage";
import ServicePage from "./pages/ServicePage";
import VendorList from "./components/VendorList";
import DashboardLayout from "./layouts/DashboardLayout";
import { AuthProvider, useAuth } from "./context/AuthContext";
import DashboardHome from "./pages/Dashboard/common/DashboardHome";
import ManageServicesPage from "./pages/Dashboard/vendor/ManageServicesPage";
import BookingRequestsPage from "./pages/Dashboard/vendor/BookingRequestsPage";
import ExploreServicesPage from "./pages/Dashboard/user/ExploreServicesPage";
import MyBookings from "./pages/Dashboard/user/MyBookingsPage";
import Favorites from "./pages/Dashboard/user/FavoritesPage";
import PaymentWallet from "./pages/Dashboard/user/PaymentWalletPage";
import DisputeManagement from "./pages/Dashboard/user/DisputeManagementPage";
import Notifications from "./pages/Dashboard/common/NotificationsPage";
import Messages from "./pages/Dashboard/common/MessagesPage";
import Settings from "./pages/Dashboard/common/SettingsPage";
import BookingCalendar from "./pages/Dashboard/vendor/BookingCalendarPage";
import EarningsAndPayouts from "./pages/Dashboard/vendor/EarningsAndPayoutsPage";
import VendorDisputeManagement from "./pages/Dashboard/vendor/VendorDisputeManagementPage";
import AvailableVendors from "./pages/Dashboard/user/AvailableVendorsPage";
import AdminDashboardHome from "./Admin/pages/AdminDashboardHome";
import UsersVendorsPage from "./Admin/pages/UsersVendorsPage";
import ServiceManagementPage from "./Admin/pages/ServiceManagementPage";
import OrderManagementPage from "./Admin/pages/OrderManagementPage";
import DisputeManagementPage from "./Admin/pages/DisputeManagementPage";
import AnalyticsPage from "./Admin/pages/AnalyticsPage";
import AdminSettingsPage from "./Admin/pages/AdminSettingsPage";
import { Toaster } from "react-hot-toast";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminAuthPage from "./Admin/pages/AdminAuthPage";
import AdminRoute from "./Admin/AdminRoute";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-sj-bg">
        <div className="w-10 h-10 border-2 border-sj-brass/30 border-t-sj-brass rounded-full animate-spin" />
      </div>
    );
  }

  return user ? children : <Navigate to="/login-signup" replace />;
}

function PageWrapper() {
  const location = useLocation();
  const hideNavAndFooterRoutes = ["/dashboard", "/admin", "/login-signup", "/forgot-password"];

  const shouldHideNavAndFooter = hideNavAndFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideNavAndFooter && <Navbar />}
      <ScrollToTop />
      <Toaster />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Routes location={location}>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/become-a-vendor" element={<BecomeAVendorPage />} />
            <Route path="/faq" element={<FAQpage />} />
            <Route path="/login-signup" element={<AuthPage />} />
            <Route path="/service/:service" element={<ServicePage />} />
            <Route path="/vendor-list" element={<VendorList />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Dashboard Routes */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="manage-services" element={<ManageServicesPage />} />
              <Route path="booking-requests" element={<BookingRequestsPage />} />
              <Route path="explore-services" element={<ExploreServicesPage />} />
              <Route path="bookings" element={<MyBookings />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="wallet" element={<PaymentWallet />} />
              <Route path="disputes" element={<DisputeManagement />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="messages" element={<Messages />} />
              <Route path="settings" element={<Settings />} />
              <Route path="calendar" element={<BookingCalendar />} />
              <Route path="earnings" element={<EarningsAndPayouts />} />
              <Route path="vendor-disputes" element={<VendorDisputeManagement />} />
              <Route path="book/:serviceName" element={<AvailableVendors />} />
            </Route>

            {/* Admin Routes (protected and nested) */}
            <Route path="/admin/login" element={<AdminAuthPage />} />
            <Route
              path="/admin/*"
              element={
                <AdminRoute>
                  <Routes>
                    <Route index element={<Navigate to="/admin/dashboard" replace />} />
                    <Route path="dashboard" element={<AdminDashboardHome />} />
                    <Route path="users" element={<UsersVendorsPage />} />
                    <Route path="services" element={<ServiceManagementPage />} />
                    <Route path="orders" element={<OrderManagementPage />} />
                    <Route path="disputes" element={<DisputeManagementPage />} />
                    <Route path="analytics" element={<AnalyticsPage />} />
                    <Route path="settings" element={<AdminSettingsPage />} />
                  </Routes>
                </AdminRoute>
              }
            />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const visits = parseInt(localStorage.getItem("visitCount") || "0", 10);
    const lastVisit = localStorage.getItem("lastPreloader");

    if (visits < 1 || !lastVisit || Date.now() - lastVisit > 3 * 24 * 60 * 60 * 1000) {
      setIsPreloading(true);
      localStorage.setItem("lastPreloader", Date.now());
    } else {
      setIsPreloading(false);
    }

    localStorage.setItem("visitCount", (visits + 1).toString());

    if (isPreloading) {
      const timer = setTimeout(() => setIsPreloading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isPreloading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
          className="min-h-screen flex flex-col justify-center items-center w-full h-full bg-sj-bg relative overflow-hidden"
        >
          <div className="absolute inset-0 sj-grid-bg pointer-events-none" />
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_50%,rgba(217,164,65,0.2),transparent_60%)] pointer-events-none" />

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-4xl xs:text-5xl sm:text-6xl font-semibold font-display mb-6 text-sj-ink"
          >
            Servi<span className="text-sj-brass">Joy</span>
          </motion.h1>

          <div className="relative z-10 w-8 h-8 border-2 border-sj-brass/30 border-t-sj-brass rounded-full animate-spin" />
        </motion.div>
      ) : (
        <AuthProvider>
          <Router>
            <PageWrapper />
          </Router>
        </AuthProvider>
      )}
    </>
  );
}

export default App;