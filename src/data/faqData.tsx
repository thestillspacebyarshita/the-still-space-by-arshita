import type { ReactNode } from 'react';

export interface FaqItem {
    question: string;
    answer: ReactNode;
}

export const faqs: FaqItem[] = [
    {
        question: 'Can my parents know everything we discuss?',
        answer: (
            <>
                <p>It depends on your age and the situation.</p>
                <p>For adults (18+), your sessions are confidential and information is not shared with parents or family members without your consent, except in the situations mentioned above.</p>
                <p>For adolescents, therapy also values privacy. Parents may receive updates that support treatment, but personal details shared in sessions are not routinely disclosed unless there is a safety concern.</p>
            </>
        ),
    },
    {
        question: 'What happens in the first session?',
        answer: (
            <>
                <p>The first session is about getting to know you.</p>
                <p>We'll talk about what has brought you to therapy, your current concerns, relevant personal history, and what you hope to work on. There is no pressure to share everything at once—we move at a pace that feels comfortable for you. By the end of the session, we'll discuss possible goals and decide how we would like to continue working together.</p>
            </>
        ),
    },
    {
        question: 'How long is each therapy session?',
        answer: <p>Each session lasts for 60 minutes.</p>,
    },
    {
        question: 'Do you offer offline sessions?',
        answer: <p>No, currently I am offering Online sessions which are conducted over a secure video platform and available across India.</p>,
    },
    {
        question: 'Which issues can I seek therapy for?',
        answer: (
            <>
                <p>Therapy can be helpful if you're experiencing concerns such as:</p>
                <ul>
                    <li>Anxiety, panic, or excessive worry.</li>
                    <li>Depression or persistent low mood.</li>
                    <li>Grief and loss.</li>
                    <li>Trauma and difficult life experiences.</li>
                    <li>Stress and burnout.</li>
                    <li>Emotional overwhelm or emotional regulation difficulties.</li>
                    <li>Relationship and attachment concerns.</li>
                    <li>Self-esteem and identity concerns.</li>
                    <li>Life transitions, academic or work-related challenges.</li>
                </ul>
                <p>If you're unsure whether your concern fits, we can discuss it during our first session.</p>
            </>
        ),
    },
    {
        question: 'What is your therapeutic approach?',
        answer: (
            <>
                <p>My approach is trauma-informed, evidence-based, and collaborative.</p>
                <p>I integrate approaches such as CBT, ACT, DBT-informed skills, Polyvagal-informed work, somatic approaches, mindfulness, and parts work (IFS-informed) depending on your needs. I believe therapy is not just about feeling heard it's also about understanding patterns, receiving honest feedback when helpful, and working towards meaningful change together.</p>
            </>
        ),
    },
    {
        question: 'How much does therapy cost?',
        answer: (
            <>
                <ul>
                    <li>Individual Therapy (60 minutes): ₹1320</li>
                    <li>Therapy for adolescents- 1100</li>
                    <li>Therapy for homemakers and students- 800</li>
                </ul>
                <p>A limited number of sliding-scale slots and pro bono slots are available based on need and availability.</p>
                <p>Fees are discussed transparently before therapy begins.</p>
            </>
        ),
    },
    {
        question: 'What is your cancellation and rescheduling policy?',
        answer: (
            <>
                <p>If you need to cancel or reschedule your session, please let me know at least 24 hours in advance.</p>
                <p>Cancellations made within 24 hours of the session, as well as missed sessions, are non-refundable, as the appointment time has been reserved specifically for you.</p>
                <p>In case of a genuine emergency, rescheduling may be considered. However, the session fee remains non-refundable.</p>
            </>
        ),
    },
    {
        question: 'What is your emergency policy?',
        answer: (
            <>
                <p>The Still Space is not an emergency or crisis service.</p>
                <p>If you are experiencing immediate thoughts of harming yourself or someone else, are in a psychiatric emergency, or require urgent medical attention, please contact your local emergency services, visit the nearest hospital, or reach out to a trusted person immediately. Therapy messages and emails are not monitored for emergencies.</p>
                <p>Other 24/7 mental health emergency and crisis helpline numbers are:</p>
                <ul>
                    <li>Vandrevala Foundation: Call or WhatsApp +91 9999 666 555</li>
                    <li>Tele-MANAS (Government of India): Dial 14416 or 1800-891-4416</li>
                </ul>
            </>
        ),
    },
    {
        question: 'Who is therapy not appropriate for?',
        answer: (
            <>
                <p>Therapy may not be the right setting if you need immediate crisis intervention, inpatient psychiatric care, or emergency medical support.</p>
                <p>If your needs fall outside my scope of practice, I will discuss appropriate referrals to ensure you receive the care that best supports you.</p>
            </>
        ),
    },
    {
        question: 'Do I need a diagnosis to start therapy?',
        answer: (
            <>
                <p>No.</p>
                <p>You do not need a diagnosis or a referral to begin therapy. Many people come to therapy simply because they're feeling stuck, overwhelmed, grieving, or want support in understanding themselves better.</p>
            </>
        ),
    },
    {
        question: 'Will I be given medication?',
        answer: (
            <>
                <p>No.</p>
                <p>I am a Clinical Psychologist, not a psychiatrist. I provide psychological assessment and psychotherapy. If I feel a psychiatric consultation could be beneficial, we can discuss a referral collaboratively.</p>
            </>
        ),
    },
    {
        question: 'How many sessions will I need?',
        answer: (
            <>
                <p>There is no fixed number.</p>
                <p>Some people come for a few sessions around a specific concern, while others choose longer-term therapy for deeper emotional work. We review your progress together and adjust the plan as needed.</p>
            </>
        ),
    },
    {
        question: 'Is therapy only for people with severe mental health concerns?',
        answer: (
            <>
                <p>Not at all.</p>
                <p>Therapy is for anyone who wants support with emotional wellbeing, relationships, personal growth, coping with life changes, or understanding recurring patterns in their life.</p>
            </>
        ),
    },
    {
        question: "What if I don't know how to talk in therapy?",
        answer: (
            <>
                <p>That's completely okay.</p>
                <p>You don't need to have the "right words" before starting therapy. It's okay to cry, sit in silence, feel confused, or not know where to begin. We will make sense of it together, one conversation at a time.</p>
            </>
        ),
    },
];