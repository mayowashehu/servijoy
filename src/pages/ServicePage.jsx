import RelatedServices from "../components/SingleServiceSections/RelatedServices";
import ReviewSection from "../components/SingleServiceSections/ReviewSection";
import ServiceDetails from "../components/SingleServiceSections/ServiceDetails";
import ServiceHero from "../components/SingleServiceSections/ServiceHero";

const ServicePage = () => {
  return (
    <div className="bg-sj-bg">
      <ServiceHero />
      <ServiceDetails />
      <ReviewSection />
      <RelatedServices />
    </div>
  );
};

export default ServicePage;