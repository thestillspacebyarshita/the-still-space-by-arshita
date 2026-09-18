import { motion } from 'framer-motion';
import { Clock, CreditCard } from 'lucide-react';
import type { PricingCategory } from '../data/pricingData';
import '../pages/Pricing.css';

const formatINR = (value: number) => '₹' + value.toLocaleString('en-IN');

interface PricingPlansProps {
    category: PricingCategory;
    title?: string;
    note?: string;
}

const PricingPlans = ({ category, title, note }: PricingPlansProps) => (
    <motion.div
        className="pricing-block"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
    >
        <div className="pricing-block-head">
            <div>
                <p className="pricing-block-note">{note ?? category.note}</p>
                <h2 className="pricing-block-title">{title ?? category.title}</h2>
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
                        {isSingle && <span className="pricing-plan-tag">Start here</span>}
                        <h3 className="pricing-plan-name">{plan.name}</h3>

                        {isSingle ? (
                            <div className="pricing-plan-amount">
                                <span className="pricing-amount-main">{formatINR(plan.perSession)}</span>
                                <span className="pricing-amount-detail">per 60-minute session</span>
                            </div>
                        ) : (
                            <div className="pricing-plan-amount">
                                <span className="pricing-plan-sessions">{plan.sessions} sessions</span>
                                <span className="pricing-amount-total">{formatINR(plan.total ?? 0)}</span>
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
);

export default PricingPlans;