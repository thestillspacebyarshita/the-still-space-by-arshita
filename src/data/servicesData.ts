export interface Service {
    slug: string;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        slug: 'individual-therapy-for-adults',
        title: 'Individual Therapy For Adults',
        description:
            'One-on-one sessions to address personal challenges, mental health disorders, and personal growth.',
    },
    {
        slug: 'therapy-for-teens-adolescents-homemakers',
        title: 'Therapy for Teens, Adolescents & Homemakers',
        description:
            'For homemakers and students navigating stress, life transitions, emotion dysregulation and beyond. ',
    },
];