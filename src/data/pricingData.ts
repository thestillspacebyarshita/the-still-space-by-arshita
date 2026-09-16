export interface PricingPlan {
    name: string;
    sessions: number | null;
    perSession: number;
    total: number | null;
}

export interface PricingCategory {
    id: string;
    title: string;
    note: string;
    sessionFee: number;
    sessionTime: string;
    installments: number;
    plans: PricingPlan[];
}

export const pricingCategories: PricingCategory[] = [
    {
        id: 'working-professionals',
        title: 'Individual Therapy',
        note: 'For working professionals',
        sessionFee: 1320,
        sessionTime: '60 minutes',
        installments: 3,
        plans: [
            { name: 'A Gentle Beginning', sessions: null, perSession: 1320, total: null },
            { name: 'Room to Breathe', sessions: 4, perSession: 1000, total: 4000 },
            { name: 'The Healing Rhythm', sessions: 8, perSession: 1000, total: 8000 },
            { name: 'Finding Your Ground', sessions: 12, perSession: 900, total: 10800 },
        ],
    },
    {
        id: 'adolescents-parents',
        title: 'Therapy for Adolescents & Parents',
        note: 'For adolescents & parents',
        sessionFee: 1100,
        sessionTime: '60 minutes',
        installments: 2,
        plans: [
            { name: 'A Gentle Beginning', sessions: null, perSession: 1100, total: null },
            { name: 'Room to Breathe', sessions: 4, perSession: 800, total: 2800 },
            { name: 'The Healing Rhythm', sessions: 8, perSession: 800, total: 6400 },
            { name: 'Finding Your Ground', sessions: 12, perSession: 800, total: 9600 },
        ],
    },
    {
        id: 'homemakers-students',
        title: 'Therapy for Homemakers & Students',
        note: 'For homemakers, students',
        sessionFee: 800,
        sessionTime: '60 minutes',
        installments: 2,
        plans: [
            { name: 'A Gentle Beginning', sessions: null, perSession: 800, total: null },
            { name: 'Room to Breathe', sessions: 4, perSession: 600, total: 2400 },
            { name: 'The Healing Rhythm', sessions: 8, perSession: 600, total: 4800 },
            { name: 'Finding Your Ground', sessions: 12, perSession: 500, total: 6000 },
        ],
    },
];