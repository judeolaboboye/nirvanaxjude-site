import React from 'react';
import ResourcePage from './ResourcePage';

export const PrivacyPolicyPage = () => {
    const meta = {
        title: "Privacy Policy | NirvanaXJude",
        description: "Privacy policy for NirvanaXJude. Learn how we handle your data and protect your privacy.",
        keywords: "privacy policy, nirvanaxjude privacy",
        canonical: "https://nirvanaxjude.com/privacy"
    };

    const content = (
        <>
            <h1>Privacy Policy</h1>
            <p>Last Updated: April 26, 2026</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, such as when you book a strategy session, sign up for our newsletter, or contact us for inquiries. This may include your name, email address, company name, and any other information you choose to provide.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to send you updates about NirvanaXJude (with your consent).</p>
            
            <h2>3. Data Protection</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration. We do not sell your personal data to third parties.</p>
            
            <h2>4. Third-Party Services</h2>
            <p>We use third-party tools like Cal.com for scheduling and Notion for project management. These services have their own privacy policies which we encourage you to review.</p>
            
            <h2>5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at judeolaboboye@gmail.com.</p>
        </>
    );

    return <ResourcePage meta={meta} heroTitle="Privacy Policy" content={content} />;
};

export const TermsAndConditionsPage = () => {
    const meta = {
        title: "Terms & Conditions | NirvanaXJude",
        description: "Terms and conditions for working with NirvanaXJude.",
        keywords: "terms and conditions, nirvanaxjude terms",
        canonical: "https://nirvanaxjude.com/terms"
    };

    const content = (
        <>
            <h1>Terms & Conditions</h1>
            <p>Last Updated: April 26, 2026</p>
            
            <h2>1. Engagement</h2>
            <p>NirvanaXJude provides AI systems architecture and automation services. Engagements are governed by specific project scopes agreed upon in writing before the commencement of work.</p>
            
            <h2>2. Deliverables</h2>
            <p>Deliverables include custom-built automation workflows (typically in n8n or Make), system documentation (SOPs), and initial setup support. Ownership of the specific workflow configurations transfers to the client upon final payment.</p>
            
            <h2>3. Payments</h2>
            <p>Payment terms are specified in individual project proposals. Typically, a commencement deposit is required, with the balance due upon delivery of the agreed-upon system.</p>
            
            <h2>4. Liability</h2>
            <p>While NirvanaXJude builds systems to the highest standards of reliability, we are not liable for changes in third-party API availability, provider outages, or modifications made to the systems by client teams after handover.</p>
            
            <h2>5. White-Label Clause</h2>
            <p>For agency partners, NirvanaXJude operates as a silent technical partner. We agree to protect the agency's relationship with their end clients and will not solicit those clients directly.</p>
        </>
    );

    return <ResourcePage meta={meta} heroTitle="Terms & Conditions" content={content} />;
};
