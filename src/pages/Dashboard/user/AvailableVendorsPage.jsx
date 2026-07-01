import React, { useState, useEffect } from "react";
import { Search, Sliders, Star, Clock, DollarSign } from "lucide-react";
import VendorFilters from "./components/AvailableVendorsSections/VendorFilters";
import axios from "axios";
import VendorDetailsModal from "./components/AvailableVendorsSections/VendorDetailsModal";
import BookingFlowModal from "./components/AvailableVendorsSections/BookingFlowModal";
import { useParams } from "react-router-dom";

const AvailableVendors = () => {
  const [loading, setLoading] = useState(true);
  let service = useParams();

  const serviceName = service.serviceName ? service.serviceName.split('-')[0] : "";

  const initialVendors = [
    {
      id: 1,
      name: "John's Plumbing",
      profileImage: "../../../assets/imgs/hero.webp",
      experience: 5,
      rating: 4.8,
      reviews: 120,
      pricing: "$50 - $100",
      description: "Expert plumbing services with quick response times.",
      categories: ["Plumbing", "Emergency", "Residential"],
      availability: "Same day",
      reviewsList: [
        { reviewer: "Alice", rating: 5, comment: "Great service!" },
        { reviewer: "Bob", rating: 4, comment: "Highly recommended." },
      ],
    },
    {
      id: 2,
      name: "Elegant Cleaning",
      profileImage: "../../../assets/imgs/hero.webp",
      experience: 7,
      rating: 4.6,
      reviews: 90,
      pricing: "$40 - $80",
      description: "Premium cleaning services for your home or office.",
      categories: ["Cleaning", "Residential", "Commercial"],
      availability: "Next day",
      reviewsList: [{ reviewer: "Charlie", rating: 5, comment: "Very thorough and friendly." }],
    },
    {
      id: 3,
      name: "Ace Electric",
      profileImage: "../../../assets/imgs/hero.webp",
      experience: 8,
      rating: 4.9,
      reviews: 150,
      pricing: "$60 - $120",
      description: "Reliable electrical repairs and installations.",
      categories: ["Electrical", "Emergency", "Residential"],
      availability: "Same day",
      reviewsList: [
        { reviewer: "David", rating: 5, comment: "Efficient and professional." },
        { reviewer: "Eva", rating: 4, comment: "Excellent work." },
      ],
    },
  ];

  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [activeVendor, setActiveVendor] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [filters, setFilters] = useState({
    categories: [],
    minRating: 0,
    availability: "all"
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [error, setError] = useState(null);

  const [bookingVendor, setBookingVendor] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      try {
        const serviceTypeParam = serviceName || "emergency";
        const response = await axios.get(`http://localhost:5000/api/vendors/service?serviceType=${serviceTypeParam}`);

        if (response.data.success && response.data.vendors && response.data.vendors.length > 0) {
          const transformedVendors = response.data.vendors.map(vendor => ({
            id: vendor.id,
            name: vendor.name || vendor.businessName || "Unnamed Vendor",
            profileImage: vendor.profileImage || "../../../assets/imgs/hero.webp",
            experience: vendor.experience || 0,
            rating: vendor.rating || 0,
            reviews: vendor.reviews || 0,
            pricing: vendor.pricing || "Not specified",
            description: vendor.description || "",
            categories: vendor.categories || [],
            availability: vendor.availability || "Not specified",
            reviewsList: vendor.reviewsList || [],
            vendorVerified: vendor.vendorVerified
          }));

          setVendors(transformedVendors);
          setFilteredVendors(transformedVendors);
        } else {
          setVendors(initialVendors);
          setFilteredVendors(initialVendors);
        }
      } catch (err) {
        console.error("Error fetching vendors:", err);
        setError("Failed to load vendors. Using default data instead.");
        setVendors(initialVendors);
        setFilteredVendors(initialVendors);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [serviceName]);

  useEffect(() => {
    let result = vendors;

    if (searchQuery) {
      result = result.filter((vendor) =>
        vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (filters.categories.length > 0) {
      result = result.filter((vendor) =>
        vendor.categories.some(cat => filters.categories.includes(cat))
      );
    }

    if (filters.minRating > 0) {
      result = result.filter((vendor) => vendor.rating >= filters.minRating);
    }

    if (filters.availability !== "all") {
      result = result.filter((vendor) => vendor.availability === filters.availability);
    }

    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price") {
      result = [...result].sort((a, b) => {
        const aPrice = a.pricing ? parseInt(a.pricing.split(" ")[0].replace("$", ""), 10) : 0;
        const bPrice = b.pricing ? parseInt(b.pricing.split(" ")[0].replace("$", ""), 10) : 0;
        return aPrice - bPrice;
      });
    } else if (sortBy === "experience") {
      result = [...result].sort((a, b) => b.experience - a.experience);
    } else if (sortBy === "reviews") {
      result = [...result].sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredVendors(result);
  }, [searchQuery, sortBy, vendors, filters]);

  const handleFilterChange = (query) => setSearchQuery(query);
  const handleSortChange = (sortOption) => setSortBy(sortOption);
  const handleFilterUpdate = (newFilters) => setFilters({ ...filters, ...newFilters });

  const handleViewDetails = (vendor) => {
    setActiveVendor(vendor);
    setIsDetailsModalOpen(true);
    if (!recentlyViewed.some(v => v.id === vendor.id)) {
      setRecentlyViewed(prev => [vendor, ...prev].slice(0, 3));
    }
  };

  const handleBookNow = (vendor) => {
    setBookingVendor(vendor);
    setIsBookingModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setActiveVendor(null);
    setIsDetailsModalOpen(false);
  };

  const handleCloseBookingModal = () => {
    setBookingVendor(null);
    setIsBookingModalOpen(false);
  };

  const handleToggleFilters = () => setShowFilters(!showFilters);

  return (
    <div className="relative min-h-screen bg-sj-bg py-8 px-4">
      {loading && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-sj-bg/95 backdrop-blur-sm z-50">
          <div className="w-10 h-10 border-2 border-sj-brass/30 border-t-sj-brass rounded-full animate-spin" />
          <p className="mt-4 text-sj-muted animate-pulse text-sm">Finding available vendors...</p>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <span className="sj-tag text-[11px] text-sj-brass mb-3 inline-block">VENDOR SEARCH</span>
          <h1 className="text-3xl md:text-4xl font-semibold font-display text-sj-ink mb-3">
            Find the Perfect {serviceName || "Service"} Professional
          </h1>
          <p className="text-sj-muted max-w-2xl mx-auto">
            Browse our vetted vendors and book services tailored to your needs
          </p>
          {error && (
            <div className="mt-4 inline-block p-2 px-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className={`flex items-center p-3 border rounded-xl bg-sj-card transition-all duration-200 ${isSearchFocused ? "border-sj-brass/40" : "border-sj-line"}`}>
            <Search className="h-5 w-5 text-sj-muted mr-2" />
            <input
              type="text"
              placeholder="Search by name, service, or keyword..."
              className="flex-grow bg-transparent focus:outline-none text-sj-ink placeholder:text-sj-muted/60"
              value={searchQuery}
              onChange={(e) => handleFilterChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <button
              onClick={handleToggleFilters}
              className="flex items-center px-3 py-1.5 ml-2 text-sm bg-sj-surface border border-sj-line rounded-lg hover:border-sj-brass/30 transition-colors text-sj-ink"
            >
              <Sliders className="h-4 w-4 mr-1" />
              Filters
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-6 p-4 bg-sj-card border border-sj-line rounded-xl">
            <VendorFilters
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
              onFilterUpdate={handleFilterUpdate}
              filters={filters}
            />
          </div>
        )}

        {/* Sort Controls */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sj-muted text-sm">
            {filteredVendors.length} vendors found
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-sj-muted">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="bg-sj-card border border-sj-line rounded-lg py-1.5 px-2 text-sm text-sj-ink focus:outline-none focus:border-sj-brass/40"
            >
              <option value="rating">Top Rated</option>
              <option value="price">Price: Low to High</option>
              <option value="experience">Experience</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <div className="mb-8">
            <span className="sj-tag text-[10px] text-sj-brass mb-3 inline-block">RECENTLY VIEWED</span>
            <div className="flex overflow-x-auto space-x-4 pb-2">
              {recentlyViewed.map((vendor) => (
                <div
                  key={`recent-${vendor.id}`}
                  className="flex-shrink-0 w-48 bg-sj-card border border-sj-line rounded-xl hover:border-sj-brass/30 transition-colors p-3 cursor-pointer"
                  onClick={() => handleViewDetails(vendor)}
                >
                  <h3 className="font-medium text-sj-ink truncate">{vendor.name}</h3>
                  <div className="flex items-center text-sm mt-1">
                    <Star className="h-3 w-3 text-sj-brass mr-1" fill="currentColor" />
                    <span className="text-sj-muted">{vendor.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vendor Cards */}
        {filteredVendors.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-sj-muted text-lg mb-4">
              No vendors found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilters({ categories: [], minRating: 0, availability: "all" });
              }}
              className="px-5 py-2.5 bg-sj-brass text-black font-bold rounded-full hover:brightness-110 transition-all text-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-sj-card border border-sj-line rounded-2xl hover:border-sj-brass/30 transition-all overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start">
                    <div className="h-16 w-16 rounded-full bg-sj-surface border border-sj-line overflow-hidden mr-3 flex-shrink-0">
                      <img
                        src={vendor.profileImage}
                        alt={vendor.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/100?text=Vendor";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold font-display text-sj-ink text-lg">{vendor.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-sj-brass">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sj-muted">{vendor.rating}</span>
                        </div>
                        <span className="mx-2 text-sj-line">•</span>
                        <span className="text-sj-muted text-sm">{vendor.reviews} reviews</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sj-muted mt-3 text-sm leading-relaxed line-clamp-2">
                    {vendor.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {vendor.categories && vendor.categories.map((category, i) => (
                      <span
                        key={`${vendor.id}-cat-${i}`}
                        className="px-2.5 py-1 bg-sj-surface border border-sj-line text-sj-muted rounded-full text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="flex items-center text-sj-muted text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{vendor.experience} years</span>
                    </div>
                    <div className="flex items-center text-sj-muted text-sm">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{vendor.pricing}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs sj-tag text-sj-brass">
                      {vendor.availability}
                    </span>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleViewDetails(vendor)}
                        className="px-3 py-1.5 text-sm border border-sj-line text-sj-ink rounded-full hover:border-sj-brass/30 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleBookNow(vendor)}
                        className="px-3 py-1.5 text-sm bg-sj-brass text-black font-bold rounded-full hover:brightness-110 transition-all"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredVendors.length > 0 && (
          <div className="mt-10 flex justify-center">
            <nav className="flex items-center space-x-2" aria-label="Pagination">
              <button className="px-3 py-1.5 border border-sj-line rounded-lg text-sj-muted hover:border-sj-brass/30 disabled:opacity-40 transition-colors text-sm" disabled>
                Previous
              </button>
              <span className="px-3 py-1.5 border border-sj-brass rounded-lg bg-sj-brass text-black text-sm font-bold">1</span>
              <button className="px-3 py-1.5 border border-sj-line rounded-lg text-sj-muted hover:border-sj-brass/30 disabled:opacity-40 transition-colors text-sm" disabled>
                Next
              </button>
            </nav>
          </div>
        )}
      </div>

      <VendorDetailsModal
        vendor={activeVendor}
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        onBookNow={handleBookNow}
      />

      <BookingFlowModal
        vendor={bookingVendor}
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
      />
    </div>
  );
};

export default AvailableVendors;