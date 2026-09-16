import { useEffect } from 'react';
import FAQ from '../components/FAQ';

const FAQs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="faqs-page">
            <FAQ />
        </div>
    );
};

export default FAQs;