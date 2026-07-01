import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SuccessAnimation from "../pages/Dashboard/user/components/AvailableVendorsSections/SuccessAnimation";

const BookingForm = ({ vendor, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookingDateTime: null,
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateTimeChange = (date) => {
    setFormData((prev) => ({ ...prev, bookingDateTime: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.bookingDateTime || !formData.location) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    setSuccess(false);
    setFormData({ name: "", email: "", phone: "", bookingDateTime: null, location: "" });
    onClose();
  };

  const handleProceed = () => {
    navigate("/login-signup", { state: { bookingData: formData, vendor } });
  };

  const inputClass =
    "w-full bg-sj-surface border border-sj-line rounded-xl px-4 py-3 text-sj-ink placeholder:text-sj-muted/60 outline-none focus:border-sj-brass/40 transition-colors text-sm";

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-sj-card border border-sj-line rounded-2xl w-full max-w-sm relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sj-muted hover:text-sj-ink transition-colors p-1"
          aria-label="Close"
        >
          <FaTimes size={18} />
        </button>

        {success ? (
          <div className="text-center pt-2">
            <SuccessAnimation />
            <div className="mt-6">
              <p className="text-sj-muted mb-6 leading-relaxed text-sm">
                Thank you, {formData.name}! Your booking with {vendor.name} has been successfully
                submitted. To finalize your booking and connect with {vendor.name}, please log in
                or sign up.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 text-sj-muted hover:text-sj-ink transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProceed}
                  className="px-5 py-2.5 bg-sj-brass text-black font-bold rounded-full hover:brightness-110 transition-all text-sm"
                >
                  Proceed to Login / Sign Up
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <span className="sj-tag text-[11px] text-sj-brass">BOOK A VISIT</span>
            <h2 className="text-xl font-semibold font-display text-sj-ink">Book {vendor.name}</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <DatePicker
              selected={formData.bookingDateTime}
              onChange={handleDateTimeChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="yyyy-MM-dd HH:mm"
              placeholderText="Select booking date & time"
              className={inputClass}
            />
            <input
              type="text"
              name="location"
              placeholder="Service Location"
              value={formData.location}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-sj-brass text-black font-bold rounded-xl hover:brightness-110 transition-all disabled:opacity-60"
            >
              {loading ? "Processing..." : "Confirm Booking"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;