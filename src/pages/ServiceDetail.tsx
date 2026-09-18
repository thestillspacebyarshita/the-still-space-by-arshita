import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/servicesData';
import { pricingCategories } from '../data/pricingData';
import PricingPlans from '../components/PricingPlans';
import TherapyProcess from '../components/TherapyProcess';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);
    const category = service ? pricingCategories.find((c) => c.id === service.pricingCategoryId) : undefined;
    const pricingTitle = service && service.pricingCategoryId === 'homemakers-students' ? service.title : undefined;
    const pricingNote = service?.pricingNote;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return (
            <div className="service-detail-page">
                <div className="container">
                    <p className="service-not-found">This service could not be found.</p>
                    <Link to="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* Header */}
            <section className="section service-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="service-title">{service.title}</h1>
                        <p className="service-subtitle">{service.description}</p>
                    </motion.div>
                </div>
            </section>
            {/* Fees & Session info */}
            <section className="section service-info-section">
                <div className="container">
                    <motion.a
                            href="https://forms.gle/p3LY41jq33sCv1kq7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ivory service-cta-button"
                            initial={{ opacity: 0, y: -25 }}
                            whileInView={{ opacity: 1, y: -50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            whileTap={{ y: 0 }}
                        >
                            Book Your First Session <ArrowRight size={18} aria-hidden="true" />
                        </motion.a>
                </div>
            </section>

            {/* Pricing */}
            {category && (
                <section className="service-pricing-section" style={{ backgroundColor: 'var(--bg-alt)' }}>
                    <div className="container">
                        <motion.h2
                            className="service-process-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Pricing
                        </motion.h2>
                        <PricingPlans category={category} title={pricingTitle} note={pricingNote} />
                    </div>
                </section>
            )}

            {/* Process */}
            <TherapyProcess />
        </div>
    );
};

export default ServiceDetail;