import { motion } from 'framer-motion';
import { ArrowDown, Heart } from 'lucide-react';
import './TherapyProcess.css';

const processSteps = [
    {
        title: 'Reach Out',
        description:
            'Drop us a message on Instagram, WhatsApp, or email to get connected',
    },
    {
        title: 'Fill the Short 2-Min Intake Form',
        description:
            'Share a few details about what brings you to therapy so we can best prepare for your session.',
    },
    {
        title: 'Free Discovery Call',
        description:
            'A brief 10-minute call to understand your needs and answer any questions you may have.',
    },
    {
        title: 'Scheduling the Session',
        description:
            'Choose a convenient slot with our therapist and confirm your session by making the payment.',
    },
    {
        title: 'Session',
        description:
            'A calm, confidential 60-minute session with your therapist.',
    },
];

const TherapyProcess = () => (
    <section className="service-process-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
            <motion.h2
                className="service-process-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                Therapy Process
            </motion.h2>

            <div className="service-process">
                {processSteps.map((step, index) => (
                    <motion.div
                        className="process-row"
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                        <div className="process-node-col">
                            <div className="process-node">
                                {index === processSteps.length - 1 ? (
                                    <Heart size={16} aria-hidden="true" />
                                ) : (
                                    <ArrowDown size={16} aria-hidden="true" />
                                )}
                            </div>
                            {index < processSteps.length - 1 && (
                                <div className="process-line" aria-hidden="true" />
                            )}
                        </div>
                        <div className="process-content">
                            <h3>{step.title}</h3>
                            {step.description && <p>{step.description}</p>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default TherapyProcess;