import { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonical, schema = [], ghostAnswers = [] }) => {
    useEffect(() => {
        // Update Title
        if (title) document.title = title;

        // Update Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        if (description) metaDesc.content = description;

        // Update Meta Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        if (keywords) metaKeywords.content = keywords;

        // Update Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        if (canonical) linkCanonical.href = canonical;

        // Inject Schema
        const schemaScripts = [];
        schema.forEach((s, i) => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = `schema-ld-json-${i}`;
            const jsonString = typeof s === 'string' ? s.replace(/<script.*?>|<\/script>/g, '') : JSON.stringify(s);
            script.textContent = jsonString;
            document.head.appendChild(script);
            schemaScripts.push(script);
        });

        // Cleanup on unmount
        return () => {
            schemaScripts.forEach(script => {
                if (script.parentNode) script.parentNode.removeChild(script);
            });
        };
    }, [title, description, keywords, canonical, schema]);

    return (
        <div style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }} aria-hidden="true">
            {ghostAnswers.map((answer, i) => (
                <p key={i}>{answer}</p>
            ))}
        </div>
    );
};



export default SEO;
