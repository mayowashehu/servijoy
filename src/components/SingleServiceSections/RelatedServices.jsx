import React from "react";
import { Link } from "react-router-dom";
import sampleImg from '../../assets/imgs/flooring.webp';
import OptimizedImage from "../OptimizedImage";
import { ArrowRight, Star } from "lucide-react";

const relatedServices = [
  { id: 1, name: "Move-in / Move-out Cleaning", description: "Perfect for tenants or homeowners moving in or out.", image: "/images/move-out-cleaning.webp", link: "/services/move-out-cleaning", rating: 4.9, reviewCount: 124 },
  { id: 2, name: "Office Cleaning", description: "Professional office cleaning to keep your workspace fresh.", image: "/images/office-cleaning.webp", link: "/services/office-cleaning", rating: 4.8, reviewCount: 97 },
  { id: 3, name: "Carpet & Upholstery Cleaning", description: "Deep cleaning for carpets, sofas, and upholstery.", image: "/images/carpet-cleaning.webp", link: "/services/carpet-cleaning", rating: 4.7, reviewCount: 86 },
];

const RelatedServices = () => {
  return (
    <section className="py-16 md:py-24 bg-sj-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="sj-tag text-[11px] text-sj-brass mb-4 inline-block">DISCOVER MORE</span>
          <h3 className="text-2xl md:text-4xl font-semibold font-display text-sj-ink mb-4">
            Services You May Also Like
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedServices.map((service) => (
            <div
              key={service.id}
              className="bg-sj-card border border-sj-line rounded-2xl overflow-hidden hover:border-sj-brass/30 transition-all group"
            >
              <div className="relative overflow-hidden">
                <OptimizedImage
                  alt={service.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 brightness-90"
                  src={sampleImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-sj-brass fill-sj-brass" />
                  <span className="ml-1 text-sm font-medium text-sj-ink">{service.rating}</span>
                  <span className="mx-1 text-sj-muted">•</span>
                  <span className="text-sm text-sj-muted">{service.reviewCount} reviews</span>
                </div>

                <h4 className="text-lg font-semibold font-display text-sj-ink mb-2">{service.name}</h4>

                <p className="text-sj-muted text-sm mb-5 leading-relaxed">{service.description}</p>

                <Link
                  to={service.link}
                  className="inline-flex items-center px-4 py-2 bg-transparent text-sj-brass border border-sj-line rounded-full font-medium text-sm transition-all duration-300 hover:border-sj-brass/40"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3.5 bg-white text-black rounded-full font-bold text-sm transition-all duration-300 hover:bg-gray-100"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;