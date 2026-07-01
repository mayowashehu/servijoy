import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Expanded keyword mapping for better service matching
const keywordMapping = {
  clean: 'Cleaning',
  cleaner: 'Cleaning',
  maid: 'Cleaning',
  housekeeping: 'Cleaning',
  vacuum: 'Cleaning',
  dusting: 'Cleaning',
  
  plumb: 'Plumbing',
  plumber: 'Plumbing',
  pipe: 'Plumbing',
  faucet: 'Plumbing',
  leak: 'Plumbing',
  
  electr: 'Electrician',
  wiring: 'Electrician',
  outlet: 'Electrician',
  circuit: 'Electrician',
  light: 'Electrician',
  
  paint: 'Painting',
  painter: 'Painting',
  wall: 'Painting',
  decor: 'Painting',
  
  carpenter: 'Carpentry',
  wood: 'Carpentry',
  furniture: 'Carpentry',
  cabinet: 'Carpentry',
  
  ac: 'AC Repair',
  air: 'AC Repair',
  condition: 'AC Repair',
  acrepair: 'AC Repair',
  cooling: 'AC Repair',
  hvac: 'AC Repair',
  heat: 'AC Repair',
};

// Enhanced service data with descriptions and more detailed icons
const services = [
  { 
    name: 'Plumbing', 
    icon: '🔧', 
    description: 'Fix leaks, install fixtures, repair pipes' 
  },
  { 
    name: 'Cleaning', 
    icon: '🧹', 
    description: 'Home cleaning, deep cleaning, office cleaning' 
  },
  { 
    name: 'Electrician', 
    icon: '⚡', 
    description: 'Wiring, repairs, installations, maintenance' 
  },
  { 
    name: 'Painting', 
    icon: '🖌️', 
    description: 'Interior & exterior painting, touch-ups' 
  },
  { 
    name: 'Carpentry', 
    icon: '🪚', 
    description: 'Furniture repair, cabinets, woodwork' 
  },
  { 
    name: 'AC Repair', 
    icon: '❄️', 
    description: 'Installation, maintenance, repairs' 
  },
];

// Locations with metadata for better organization
const locations = [
  { name: 'Ilorin', popular: true, region: 'Central' },
  { name: 'Lagos', popular: true, region: 'Southwest' },
  { name: 'Abuja', popular: true, region: 'Central' },
  { name: 'Port Harcourt', popular: true, region: 'South' },
  { name: 'Kano', popular: false, region: 'North' },
  { name: 'Ibadan', popular: false, region: 'Southwest' },
  { name: 'Kaduna', popular: false, region: 'North' },
  { name: 'Enugu', popular: false, region: 'Southeast' },
  { name: 'Benin City', popular: false, region: 'South' },
  { name: 'Owerri', popular: false, region: 'Southeast' },
  { name: 'Warri', popular: false, region: 'South' },
  { name: 'Jos', popular: false, region: 'North' },
];

// Animation variants for cleaner animation code

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, height: 0 },
  visible: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -10, height: 0 }
};

const Hero = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isGlowing, setIsGlowing] = useState(true);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('recentSearches')) || [];
    } catch {
      return [];
    }
  });
  
  const serviceInputRef = useRef(null);
  const locationInputRef = useRef(null);
  const serviceDropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);
  const searchButtonRef = useRef(null);

  // Memoize popular locations for better performance
  const popularLocations = useMemo(() => 
    locations.filter(location => location.popular), 
    []
  );

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target) && 
          serviceInputRef.current && !serviceInputRef.current.contains(event.target)) {
        setIsServiceDropdownOpen(false);
      }
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target) && 
          locationInputRef.current && !locationInputRef.current.contains(event.target)) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle glow effect timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsGlowing(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsServiceDropdownOpen(false);
        setIsLocationDropdownOpen(false);
      } else if (e.key === 'Enter' && selectedService && selectedLocation) {
        handleSearch();
      } else if (e.key === 'Tab') {
        if (document.activeElement === serviceInputRef.current && selectedService) {
          e.preventDefault();
          locationInputRef.current?.focus();
        } else if (document.activeElement === locationInputRef.current && selectedLocation) {
          e.preventDefault();
          searchButtonRef.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService, selectedLocation]);

  // Handle Service Input with improved keyword matching
  const handleServiceChange = (e) => {
    const inputValue = e.target.value;
    setSelectedService(inputValue);
    setIsServiceDropdownOpen(true);

    if (inputValue.length > 2) {
      // Try to match a keyword dynamically
      const matchedKeyword = Object.keys(keywordMapping).find((keyword) =>
        inputValue.toLowerCase().includes(keyword)
      );

      if (matchedKeyword) {
        // Don't auto-select, just filter to show the matched service
        const matchedService = keywordMapping[matchedKeyword];
        setFilteredServices(services.filter(s => s.name === matchedService));
      } else {
        // Filter services dynamically
        const filtered = services.filter((service) =>
          service.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          service.description.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredServices(filtered.length > 0 ? filtered : services);
      }
    } else {
      setFilteredServices(services);
    }
  };

  // Handle Service Selection
  const selectService = (service) => {
    setSelectedService(service.name);
    setFilteredServices([]);
    setIsServiceDropdownOpen(false);
    
    // Auto-focus location field after selection for better UX flow
    setTimeout(() => {
      if (locationInputRef.current) {
        locationInputRef.current.focus();
      }
    }, 100);
  };

  // Handle Location Input with improved filtering
  const handleLocationChange = (e) => {
    const inputValue = e.target.value;
    setSelectedLocation(inputValue);
    setIsLocationDropdownOpen(true);

    // Filter locations dynamically with fuzzy matching
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      location.region.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredLocations(filtered.length > 0 ? filtered : locations);
  };

  // Handle Location Selection
  const selectLocation = (location) => {
    setSelectedLocation(location.name);
    setFilteredLocations([]);
    setIsLocationDropdownOpen(false);
    
    // Auto-focus search button after selection
    setTimeout(() => {
      if (searchButtonRef.current) {
        searchButtonRef.current.focus();
      }
    }, 100);
  };

  // Enhanced Search Submission with analytics and history
  const handleSearch = () => {
    if (selectedService && selectedLocation) {
      // Save to recent searches
      const newSearch = {
        service: selectedService,
        location: selectedLocation,
        timestamp: new Date().toISOString()
      };
      
      const updatedSearches = [newSearch, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
      
      try {
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      } catch (e) {
        console.error('Failed to save recent searches:', e);
      }
      
      // Navigate to search results
      navigate(`/vendor-list?service=${encodeURIComponent(selectedService)}&location=${encodeURIComponent(selectedLocation)}`);
    }
  };

  // Handle recent search selection
  const selectRecentSearch = (search) => {
    setSelectedService(search.service);
    setSelectedLocation(search.location);
    setTimeout(handleSearch, 100);
  };

  // Show popular services with improved UX
  const showPopularServices = () => {
    setIsServiceDropdownOpen(true);
    setFilteredServices(services);
    setIsLocationDropdownOpen(false);
  };

  // Show popular locations with improved UX
  const showPopularLocations = () => {
    setIsLocationDropdownOpen(true);
    setFilteredLocations(locations);
    setIsServiceDropdownOpen(false);
  };

  // Clear input fields
  const clearService = () => {
    setSelectedService('');
    setFilteredServices(services);
    setIsServiceDropdownOpen(true);
    setTimeout(() => {
      if (serviceInputRef.current) {
        serviceInputRef.current.focus();
      }
    }, 10);
  };

  const clearLocation = () => {
    setSelectedLocation('');
    setFilteredLocations(locations);
    setIsLocationDropdownOpen(true);
    setTimeout(() => {
      if (locationInputRef.current) {
        locationInputRef.current.focus();
      }
    }, 10);
  };

  return (
    <div className="py-20 pt-36 px-4 lg:py-0 lg:min-h-screen flex w-full relative bg-elite-black">
      <div className="absolute inset-0 elite-glow-top pointer-events-none"></div>

      <div className="relative flex text-center w-full max-w-6xl mx-auto justify-center items-center flex-col text-white z-10 px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-elite-cyan text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A NEW ERA OF EXCELLENCE
        </motion.p>

        <motion.h1
          className={`text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-header leading-tight transition-all ${
            isGlowing ? 'animate-glow' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Help, <span className="text-elite-cyan">Delivered Daily.</span>
        </motion.h1>

        <motion.p
          className="sm:text-base max-xs:text-sm md:text-lg text-elite-muted font-normal lg:max-w-2xl mt-5 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Experience seamless connections with elite professionals.
          <br className="hidden sm:block" />
          Your journey to excellence starts with a single click.
        </motion.p>

        <motion.div
          className="mt-10 bg-elite-card border border-elite-border rounded-full z-50 flex flex-col md:flex-row p-2 items-center max-xs:max-w-sm gap-2 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative flex-1 w-full md:w-72">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FaSearch className="text-elite-muted" />
              </div>
              <input
                ref={serviceInputRef}
                type="text"
                aria-label="Service search"
                className="w-full pl-11 pr-10 py-3.5 text-white bg-transparent rounded-full outline-none focus:ring-1 focus:ring-elite-cyan/50 transition-all placeholder:text-elite-muted/70"
                placeholder="What are you looking for?"
                value={selectedService}
                onChange={handleServiceChange}
                onFocus={showPopularServices}
                autoComplete="off"
              />
              {selectedService && (
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-elite-muted hover:text-white"
                  onClick={clearService}
                  type="button"
                  aria-label="Clear service"
                >
                  <FaTimes />
                </button>
              )}
            </div>
            
            <AnimatePresence>
              {isServiceDropdownOpen && (
                <motion.div
                  ref={serviceDropdownRef}
                  className="absolute w-full bg-elite-card border border-elite-border shadow-2xl rounded-xl mt-2 max-h-64 overflow-y-auto z-50 text-left"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  {recentSearches.length > 0 && !selectedService && (
                    <>
                      <div className="px-4 py-2 text-xs text-elite-muted bg-elite-surface flex justify-between">
                        <span>Recent Searches</span>
                        <button 
                          className="text-elite-cyan hover:underline text-xs"
                          onClick={() => {
                            setRecentSearches([]);
                            localStorage.removeItem('recentSearches');
                          }}
                        >
                          Clear
                        </button>
                      </div>
                      {recentSearches.map((search, index) => (
                        <div
                          key={`recent-${index}`}
                          className="px-4 py-2 text-white hover:bg-white/5 cursor-pointer flex justify-between items-center transition-colors"
                          onClick={() => selectRecentSearch(search)}
                        >
                          <div className="flex items-center">
                            <span className="mr-2 text-lg">{services.find(s => s.name === search.service)?.icon || '🔍'}</span>
                            <span className="font-medium">{search.service}</span>
                            <span className="mx-2 text-elite-muted">in</span>
                            <span>{search.location}</span>
                          </div>
                          <span className="text-xs text-elite-muted">
                            {new Date(search.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-elite-border"></div>
                    </>
                  )}
                  
                  <div className="px-4 py-2 text-xs text-elite-muted bg-elite-surface">Available Services</div>
                  <ul>
                    {(filteredServices.length > 0 ? filteredServices : services).map((service, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 text-white hover:bg-white/5 cursor-pointer flex items-center transition-colors"
                        onClick={() => selectService(service)}
                      >
                        <span className="mr-2 text-lg">{service.icon}</span>
                        <div className="flex flex-col text-left">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-xs text-elite-muted">{service.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden md:block w-px h-8 bg-elite-border"></div>

          {/* Location Input */}
          <div className="relative flex-1 w-full md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FaMapMarkerAlt className="text-elite-muted" />
              </div>
              <input
                ref={locationInputRef}
                type="text"
                aria-label="Location search"
                className="w-full pl-11 pr-10 py-3.5 text-white bg-transparent rounded-full outline-none focus:ring-1 focus:ring-elite-cyan/50 transition-all placeholder:text-elite-muted/70"
                placeholder="Location"
                value={selectedLocation}
                onChange={handleLocationChange}
                onFocus={showPopularLocations}
                autoComplete="off"
              />
              {selectedLocation && (
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-elite-muted hover:text-white"
                  onClick={clearLocation}
                  type="button"
                  aria-label="Clear location"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <AnimatePresence>
              {isLocationDropdownOpen && (
                <motion.div
                  ref={locationDropdownRef}
                  className="absolute w-full bg-elite-card border border-elite-border shadow-2xl rounded-xl mt-2 max-h-64 overflow-y-auto z-50 text-left"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  {filteredLocations.length > 0 ? (
                    <>
                      {filteredLocations.filter(location => location.popular).length > 0 && (
                        <div className="px-4 py-2 text-xs text-elite-muted bg-elite-surface">Popular Locations</div>
                      )}
                      <ul>
                        {filteredLocations
                          .filter(location => location.popular)
                          .map((location, index) => (
                            <li
                              key={`popular-${index}`}
                              className="px-4 py-3 text-white hover:bg-white/5 cursor-pointer flex items-center transition-colors"
                              onClick={() => selectLocation(location)}
                            >
                              <FaMapMarkerAlt className="mr-2 text-elite-cyan" />
                              <div className="flex flex-col text-left">
                                <span className="font-medium">{location.name}</span>
                                <span className="text-xs text-elite-muted">{location.region} Region</span>
                              </div>
                            </li>
                          ))}
                      </ul>
                      
                      {filteredLocations.filter(location => !location.popular).length > 0 && (
                        <div className="px-4 py-2 text-xs text-elite-muted bg-elite-surface">Other Locations</div>
                      )}
                      <ul>
                        {filteredLocations
                          .filter(location => !location.popular)
                          .map((location, index) => (
                            <li
                              key={`other-${index}`}
                              className="px-4 py-3 text-white hover:bg-white/5 cursor-pointer flex items-center transition-colors"
                              onClick={() => selectLocation(location)}
                            >
                              <FaMapMarkerAlt className="mr-2 text-elite-muted" />
                              <div className="flex flex-col text-left">
                                <span>{location.name}</span>
                                <span className="text-xs text-elite-muted">{location.region} Region</span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </>
                  ) : (
                    <div className="px-4 py-3 text-elite-muted text-center">
                      No locations found for "{selectedLocation}"
                      <div className="text-xs mt-1">Try a different search term</div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Button */}
          <motion.button
            ref={searchButtonRef}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center justify-center px-8 py-3.5 bg-white text-black font-bold rounded-full transition-all duration-300 w-full md:w-auto text-sm ${
              !selectedService || !selectedLocation 
                ? 'opacity-40 cursor-not-allowed' 
                : 'hover:bg-gray-100'
            }`}
            onClick={handleSearch}
            disabled={!selectedService || !selectedLocation}
            type="button"
            aria-label="Search for services"
          >
            Search
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-10 sm:gap-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { value: "3.2k+", label: "HAPPY CLIENTS" },
            { value: "100+", label: "PROJECTS" },
            { value: "98%", label: "SUCCESS RATE" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-elite-muted mt-1 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;