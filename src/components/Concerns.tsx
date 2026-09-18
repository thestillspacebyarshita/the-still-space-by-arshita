import { motion } from 'framer-motion';
import depressionIcon from '@/assets/doodles/1_depression.png';
import anxietyIcon from '@/assets/doodles/2_anxiety.png';
import angerIcon from '@/assets/doodles/3_anger.png';
import stressIcon from '@/assets/doodles/4_stress.png';
import addictionIcon from '@/assets/doodles/5_addiction.png';
import emotionsIcon from '@/assets/doodles/6_emotions.png';
import griefIcon from '@/assets/doodles/7_grief.png';
import selfWorthIcon from '@/assets/doodles/8_self_worth.png';

const concerns = [
    { src: depressionIcon, alt: 'Depression' },
    { src: anxietyIcon, alt: 'Anxiety' },
    { src: angerIcon, alt: 'Anger' },
    { src: stressIcon, alt: 'Stress & Burnout' },
    { src: addictionIcon, alt: 'Addiction' },
    { src: emotionsIcon, alt: 'Emotions Dysregulation' },
    { src: griefIcon, alt: 'Grief' },
    { src: selfWorthIcon, alt: 'Self Worth' },
];

const Concerns = () => {
    return (
        <section className="concerns-section" id="concerns" aria-label="Concerns We Work With">
            <div className="container">
                <motion.h2
                    className="concerns-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    CONCERNS I WORK WITH
                </motion.h2>

                <motion.p
                    className="concerns-sub"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    I'm here to support you through a wide range of challenges :
                </motion.p>

                <div className="concerns-grid">
                    {concerns.map((concern, index) => (
                        <motion.div
                            key={concern.alt}
                            className="concerns-item"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                        >
                            <img src={concern.src} alt={concern.alt} loading="lazy" />
                            <p className="concerns-caption">{concern.alt}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="concerns-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    …and the list is not limited to these!
                </motion.p>
            </div>
        </section>
    );
};

export default Concerns;