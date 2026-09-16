import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import arshooImage from '@/assets/about_me.jpeg';

const About = () => {
    const navigate = useNavigate();
    return (
        <section className="about-section" id="about" aria-label="About Me">
            <div className="container">
                <div className="about-grid">
                    {/* Portrait column */}
                    <motion.div
                        className="about-portrait-col"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="portrait-frame">
                            <div className="portrait">
                                <img
                                    src={arshooImage}
                                    alt="Arshita Sharma in soft natural light"
                                />
                            </div>
                        </div>
                        <h3 className="founder-name">
                            Arshita Sharma
                        </h3>
                        <p className="founder-title">
                            RCI Licensed Clinical Psychologist
                        </p>
                    </motion.div>

                    {/* Text column */}
                    <motion.div
                        className="about-body"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <h2 className="section-title">About Me</h2>

                        <div className="about-text">
                            <p>
                                Hey, I am Arshita, the founder of the still space. I have built this space for people like me who couldn’t find the right therapist or a space that was understanding, safe or felt like a warm hug on those difficult days. My vision as a psychologist has been simple to provide the person sitting on the other side of a laptop with a space to feel safe enough to unravel their heavy feelings, difficult experiences, and have a better understanding of themselves.
                            </p>

                            <p>
                                So I have undergone 6 years of training and 2 years of work experience with rehabilitation centres, private clinics, and tele-health setups, which form my foundation and make me a better therapist day by day. 
                            </p>
                        </div>

                        <button
                            className="btn-know-more"
                            onClick={() => navigate('/about-me')}
                            aria-label="About Me"
                        >
                            <span className="btn-know-more-label">Know more about me</span>
                            <svg
                                className="btn-know-more-arrow"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;