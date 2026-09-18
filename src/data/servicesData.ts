export interface Service {
    slug: string;
    title: string;
    description: string;
    pricingCategoryId: string;
    pricingNote?: string;
}

export const services: Service[] = [
    {
        slug: 'individual-therapy-for-adults',
        title: 'Individual Therapy for Adults',
        description:
            'One-on-one sessions to address personal challenges, mental health disorders, and personal growth.',
        pricingCategoryId: 'working-professionals',
    },
    {
        slug: 'therapy-for-adolescents-parents',
        title: 'Therapy for Adolescents & Parents',
        description:
            'Support for teens and parents navigating emotions, communication, and family dynamics.',
        pricingCategoryId: 'adolescents-parents',
    },
    {
        slug: 'therapy-for-students',
        title: 'Therapy for Students',
        description:
            'Support for students navigating exam anxiety, academic pressure, career uncertainty, self-esteem, procrastination, and the emotional challenges that come with growing up and finding your place.',
        pricingCategoryId: 'homemakers-students',
        pricingNote: 'For students',
    },
    {
        slug: 'therapy-for-homemakers',
        title: 'Therapy for Homemakers',
        description:
            'A space for homemakers navigating life transitions, relationship and family dynamics, identity beyond caregiving, emotional overwhelm, and balancing personal needs with everyday responsibilities.',
        pricingCategoryId: 'homemakers-students',
        pricingNote: 'For homemakers',
    },
];