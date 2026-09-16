import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CreditCard } from 'lucide-react';
import { pricingCategories } from '../data/pricingData';
import './Pricing.css';

const formatINR = (value: number) => '₹' + value.toLocaleString('en-IN');

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pricing-page">
            {/* Page header */}
            <section className="pricing-header">
                <div className="container">
                    <motion.div
                        className="pricing-header-inner"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p className="pricing-eyebrow">Fees &amp; Packages</p>
                        <h1 className="pricing-title">Pricing</h1>
                        <p className="pricing-subtitle">
                            Transparent, thoughtful pricing for therapy. Every session is
                            conducted online across India over a secure video platform.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing categories */}
            <section className="pricing-body">
                <div className="container">
                    {pricingCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            className="pricing-block"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Category header + featured per-session fee */}
                            <div className="pricing-block-head">
                                <div>
                                    <p className="pricing-block-note">{category.note}</p>
                                    <h2 className="pricing-block-title">{category.title}</h2>
                                </div>
                                <div className="pricing-fee-chip">
                                    <span className="pricing-fee-label">Per session</span>
                                    <span className="pricing-fee-value">{formatINR(category.sessionFee)}</span>
                                    <span className="pricing-fee-time">
                                        <Clock size={14} aria-hidden="true" />
                                        {category.sessionTime}
                                    </span>
                                </div>
                            </div>

                            {/* Plan cards */}
                            <div className="pricing-plans">
                                {category.plans.map((plan, index) => {
                                    const isSingle = plan.sessions === null;
                                    return (
                                        <motion.div
                                            key={plan.name}
                                            className="pricing-plan-card"
                                            initial={{ opacity: 0, y: 18 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: '-60px' }}
                                            transition={{ duration: 0.5, delay: index * 0.08 }}
                                        >
                                            {isSingle && (
                                                <span className="pricing-plan-tag">Start here</span>
                                            )}
                                            <h3 className="pricing-plan-name">{plan.name}</h3>

                                            {isSingle ? (
                                                <div className="pricing-plan-amount">
                                                    <span className="pricing-amount-main">
                                                        {formatINR(plan.perSession)}
                                                    </span>
                                                    <span className="pricing-amount-detail">
                                                        per 60-minute session
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="pricing-plan-amount">
                                                    <span className="pricing-plan-sessions">
                                                        {plan.sessions} sessions
                                                    </span>
                                                    <span className="pricing-amount-total">
                                                        {formatINR(plan.total ?? 0)}
                                                    </span>
                                                    <span className="pricing-amount-detail">
                                                        {formatINR(plan.perSession)} per session
                                                    </span>
                                                </div>
                                            )}

                                            <p className="pricing-plan-installment">
                                                <CreditCard size={14} aria-hidden="true" />
                                                {isSingle
                                                    ? 'Pay per session'
                                                    : `Pay in ${category.installments} installments`}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}

                    <motion.p
                        className="pricing-footnote"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        A limited number of sliding-scale and pro bono slots are available
                        based on need and availability. Fees are discussed transparently before
                        therapy begins.
                    </motion.p>
                </div>
            </section>
        </div>
    );
};

export default Pricing;