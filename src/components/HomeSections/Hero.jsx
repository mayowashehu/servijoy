import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FrameCorners from '../ui/FrameCorners';

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

// Service data — icon is a short spec code, matching the instrument-panel motif
const services = [
  { name: 'Plumbing', code: 'PLM', description: 'Fix leaks, install fixtures, repair pipes' },
  { name: 'Cleaning', code: 'CLN', description: 'Home cleaning, deep cleaning, office cleaning' },
  { name: 'Electrician', code: 'ELC', description: 'Wiring, repairs, installations, maintenance' },
  { name: 'Painting', code: 'PNT', description: 'Interior & exterior painting, touch-ups' },
  { name: 'Carpentry', code: 'CRP', description: 'Furniture repair, cabinets, woodwork' },
  { name: 'AC Repair', code: 'ACR', description: 'Installation, maintenance, repairs' },
];

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

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, height: 0 },
  visible: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -8, height: 0 },
};

const Hero = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
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

  const popularLocations = useMemo(() => locations.filter((l) => l.popular), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target) &&
        serviceInputRef.current && !serviceInputRef.current.contains(event.target)
      ) {
        setIsServiceDropdownOpen(false);
      }
      if (
        locationDropdownRef.current && !locationDropdownRef.current.contains(event.target) &&
        locationInputRef.current && !locationInputRef.current.contains(event.target)
      ) {
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedService, selectedLocation]);

  const handleServiceChange = (e) => {
    const inputValue = e.target.value;
    setSelectedService(inputValue);
    setIsServiceDropdownOpen(true);

    if (inputValue.length > 2) {
      const matchedKeyword = Object.keys(keywordMapping).find((keyword) =>
        inputValue.toLowerCase().includes(keyword)
      );
      if (matchedKeyword) {
        const matchedService = keywordMapping[matchedKeyword];
        setFilteredServices(services.filter((s) => s.name === matchedService));
      } else {
        const filtered = services.filter(
          (service) =>
            service.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            service.description.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredServices(filtered.length > 0 ? filtered : services);
      }
    } else {
      setFilteredServices(services);
    }
  };

  const selectService = (service) => {
    setSelectedService(service.name);
    setFilteredServices([]);
    setIsServiceDropdownOpen(false);
    setTimeout(() => locationInputRef.current?.focus(), 100);
  };

  const handleLocationChange = (e) => {
    const inputValue = e.target.value;
    setSelectedLocation(inputValue);
    setIsLocationDropdownOpen(true);
    const filtered = locations.filter(
      (location) =>
        location.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        location.region.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredLocations(filtered.length > 0 ? filtered : locations);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location.name);
    setFilteredLocations([]);
    setIsLocationDropdownOpen(false);
    setTimeout(() => searchButtonRef.current?.focus(), 100);
  };

  const handleSearch = () => {
    if (selectedService && selectedLocation) {
      const newSearch = {
        service: selectedService,
        location: selectedLocation,
        timestamp: new Date().toISOString(),
      };
      const updatedSearches = [newSearch, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
      try {
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      } catch (e) {
        console.error('Failed to save recent searches:', e);
      }
      navigate(`/vendor-list?service=${encodeURIComponent(selectedService)}&location=${encodeURIComponent(selectedLocation)}`);
    }
  };

  const selectRecentSearch = (search) => {
    setSelectedService(search.service);
    setSelectedLocation(search.location);
    setTimeout(handleSearch, 100);
  };

  const showPopularServices = () => {
    setIsServiceDropdownOpen(true);
    setFilteredServices(services);
    setIsLocationDropdownOpen(false);
  };

  const showPopularLocations = () => {
    setIsLocationDropdownOpen(true);
    setFilteredLocations(locations);
    setIsServiceDropdownOpen(false);
  };

  const clearService = () => {
    setSelectedService('');
    setFilteredServices(services);
    setIsServiceDropdownOpen(true);
    setTimeout(() => serviceInputRef.current?.focus(), 10);
  };

  const clearLocation = () => {
    setSelectedLocation('');
    setFilteredLocations(locations);
    setIsLocationDropdownOpen(true);
    setTimeout(() => locationInputRef.current?.focus(), 10);
  };

  return (
    <div className="relative w-full bg-sj-bg pt-40 pb-24 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
      <div className="absolute inset-0 sj-grid-bg pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.span
          className="sj-tag text-[11px] text-sj-brass uppercase mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          6 trades &middot; verified &middot; dispatched today
        </motion.span>

        <motion.h1
          className="font-display text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-sj-ink"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skilled hands,<br />
          <span className="text-sj-brass">verified fast.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base md:text-lg text-sj-muted max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Every artisan on ServiJoy is background-checked, rated, and ready to work —
          from a leaking pipe to a full repaint.
        </motion.p>

        {/* Search — the instrument panel */}
        <motion.div
          className="relative mt-12 w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <div className="relative bg-sj-card border border-sj-line rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2">
            <FrameCorners />

            {/* Service Input */}
            <div className="relative flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="w-4 h-4 text-sj-muted" />
                </div>
                <input
                  ref={serviceInputRef}
                  type="text"
                  aria-label="Service search"
                  className="w-full pl-11 pr-10 py-3.5 text-sj-ink bg-transparent rounded-full outline-none focus:ring-1 focus:ring-sj-brass/50 transition-all placeholder:text-sj-muted/70 text-sm"
                  placeholder="What do you need done?"
                  value={selectedService}
                  onChange={handleServiceChange}
                  onFocus={showPopularServices}
                  autoComplete="off"
                />
                {selectedService && (
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-sj-muted hover:text-sj-ink"
                    onClick={clearService}
                    type="button"
                    aria-label="Clear service"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {isServiceDropdownOpen && (
                  <motion.div
                    ref={serviceDropdownRef}
                    className="absolute w-full bg-sj-card border border-sj-line shadow-2xl rounded-xl mt-3 max-h-72 overflow-y-auto z-50 text-left"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.18 }}
                  >
                    {recentSearches.length > 0 && !selectedService && (
                      <>
                        <div className="px-4 py-2 sj-tag text-[10px] text-sj-muted bg-sj-surface flex justify-between">
                          <span>RECENT</span>
                          <button
                            className="text-sj-brass hover:brightness-110 normal-case font-sans tracking-normal"
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
                            className="px-4 py-3 text-sj-ink hover:bg-white/[0.03] cursor-pointer flex justify-between items-center transition-colors"
                            onClick={() => selectRecentSearch(search)}
                          >
                            <div className="flex items-center gap-3">
                              <span className="sj-tag text-[10px] text-sj-brass">
                                {services.find((s) => s.name === search.service)?.code || '—'}
                              </span>
                              <span className="font-medium text-sm">{search.service}</span>
                              <span className="text-sj-muted text-sm">in {search.location}</span>
                            </div>
                            <span className="text-xs text-sj-muted">
                              {new Date(search.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                        ))}
                        <div className="border-t border-sj-line" />
                      </>
                    )}

                    <div className="px-4 py-2 sj-tag text-[10px] text-sj-muted bg-sj-surface">SERVICES</div>
                    <ul>
                      {(filteredServices.length > 0 ? filteredServices : services).map((service, index) => (
                        <li
                          key={index}
                          className="px-4 py-3 text-sj-ink hover:bg-white/[0.03] cursor-pointer flex items-center gap-3 transition-colors"
                          onClick={() => selectService(service)}
                        >
                          <span className="sj-tag text-[10px] text-sj-brass shrink-0">{service.code}</span>
                          <div className="flex flex-col text-left">
                            <span className="font-medium text-sm">{service.name}</span>
                            <span className="text-xs text-sj-muted">{service.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:block w-px h-8 bg-sj-line" />

            {/* Location Input */}
            <div className="relative flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <MapPin className="w-4 h-4 text-sj-muted" />
                </div>
                <input
                  ref={locationInputRef}
                  type="text"
                  aria-label="Location search"
                  className="w-full pl-11 pr-10 py-3.5 text-sj-ink bg-transparent rounded-full outline-none focus:ring-1 focus:ring-sj-brass/50 transition-all placeholder:text-sj-muted/70 text-sm"
                  placeholder="Location"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  onFocus={showPopularLocations}
                  autoComplete="off"
                />
                {selectedLocation && (
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-sj-muted hover:text-sj-ink"
                    onClick={clearLocation}
                    type="button"
                    aria-label="Clear location"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {isLocationDropdownOpen && (
                  <motion.div
                    ref={locationDropdownRef}
                    className="absolute w-full bg-sj-card border border-sj-line shadow-2xl rounded-xl mt-3 max-h-72 overflow-y-auto z-50 text-left"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.18 }}
                  >
                    {filteredLocations.length > 0 ? (
                      <>
                        {filteredLocations.filter((l) => l.popular).length > 0 && (
                          <div className="px-4 py-2 sj-tag text-[10px] text-sj-muted bg-sj-surface">POPULAR</div>
                        )}
                        <ul>
                          {filteredLocations.filter((l) => l.popular).map((location, index) => (
                            <li
                              key={`popular-${index}`}
                              className="px-4 py-3 text-sj-ink hover:bg-white/[0.03] cursor-pointer flex items-center gap-3 transition-colors"
                              onClick={() => selectLocation(location)}
                            >
                              <MapPin className="w-4 h-4 text-sj-brass shrink-0" />
                              <div className="flex flex-col text-left">
                                <span className="font-medium text-sm">{location.name}</span>
                                <span className="text-xs text-sj-muted">{location.region} region</span>
                              </div>
                            </li>
                          ))}
                        </ul>

                        {filteredLocations.filter((l) => !l.popular).length > 0 && (
                          <div className="px-4 py-2 sj-tag text-[10px] text-sj-muted bg-sj-surface">OTHER</div>
                        )}
                        <ul>
                          {filteredLocations.filter((l) => !l.popular).map((location, index) => (
                            <li
                              key={`other-${index}`}
                              className="px-4 py-3 text-sj-ink hover:bg-white/[0.03] cursor-pointer flex items-center gap-3 transition-colors"
                              onClick={() => selectLocation(location)}
                            >
                              <MapPin className="w-4 h-4 text-sj-muted shrink-0" />
                              <div className="flex flex-col text-left">
                                <span className="text-sm">{location.name}</span>
                                <span className="text-xs text-sj-muted">{location.region} region</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div className="px-4 py-4 text-sj-muted text-center text-sm">
                        No locations found for &ldquo;{selectedLocation}&rdquo;
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center px-8 py-3.5 bg-sj-brass text-sj-bg font-semibold rounded-full transition-all duration-300 text-sm ${
                !selectedService || !selectedLocation ? 'opacity-40 cursor-not-allowed' : 'hover:brightness-110'
              }`}
              onClick={handleSearch}
              disabled={!selectedService || !selectedLocation}
              type="button"
              aria-label="Search for services"
            >
              Find an artisan
            </motion.button>
          </div>
        </motion.div>

        {/* Stats — read like a spec sheet, not a marketing badge */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {[
            { value: '3,200+', label: 'VERIFIED ARTISANS' },
            { value: '12,000+', label: 'JOBS COMPLETED' },
            { value: '98%', label: 'SATISFACTION RATE' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-xl sm:text-2xl font-semibold text-sj-ink">{stat.value}</div>
              <div className="sj-tag text-[10px] text-sj-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;