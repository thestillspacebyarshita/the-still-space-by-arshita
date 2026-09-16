import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Users } from 'lucide-react';
import { services } from '../data/servicesData';

const serviceIcons = {
    'individual-therapy-for-adults': <Compass size={26} strokeWidth={1.5} />,
    'therapy-for-teens-adolescents-homemakers': <Users size={26} strokeWidth={1.5} />,
};

const ServiceIcon = ({ slug }: { slug: string }) => serviceIcons[slug as keyof typeof serviceIcons] ?? null;

const Services = () => {
    return (
        <section id="services" className="services-section" aria-label="Services">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="eyebrow">The Work</p>
                    <h2 className="section-title">My Services</h2>
                    <p className="section-sub">
                        Tailored therapeutic interventions designed to meet your unique
                        needs and goals.
                    </p>
                </motion.div>

                <div className="service-grid">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.slug}
                            className="service-card"
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                        >
                            <Link to={`/services/${service.slug}`} className="service-card-link">
                                <div className="service-icon" aria-hidden="true">
                                    <ServiceIcon slug={service.slug} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="service-note"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p>
                        I offer two pro bono therapy slots each month. If you'd like to be considered, please reach out via{' '}
                        <a href="mailto:thestillspacebyarshita@gmail.com">email</a>. I'll share a short application form, and slots are offered based on availability and need.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;