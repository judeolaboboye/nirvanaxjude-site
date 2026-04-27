export const PRIMARY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://nirvanaxjude.com/#organisation",
      "name": "NirvanaXJude",
      "alternateName": "N/X/J",
      "url": "https://nirvanaxjude.com",
      "logo": "https://nirvanaxjude.com/images/logo.png",
      "email": "judeolaboboye@gmail.com",
      "description": "NirvanaXJude builds AI-powered investor outreach systems and automation infrastructure for startups raising pre-seed, seed, Series A, and Series B funding. For agencies, NirvanaXJude delivers white-label AI systems built in n8n and Make that agencies can sell to their own clients.",
      "slogan": "Get in front of the right investors, before they close.",
      "foundingDate": "2022",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 1
      },
      "founder": {
        "@type": "Person",
        "@id": "https://nirvanaxjude.com/about#jude",
        "name": "Jude Olaboboye",
        "jobTitle": "Founder & AI Systems Architect",
        "url": "https://nirvanaxjude.com/about",
        "sameAs": [
          "https://www.youtube.com/@nirvanaxjude",
          "https://twitter.com/nirvanaxjude"
        ]
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "knowsAbout": [
        "Investor Outreach",
        "Startup Fundraising",
        "Pre-Seed Funding",
        "Seed Funding",
        "Series A Fundraising",
        "Series B Fundraising",
        "Venture Capital",
        "AI Automation",
        "n8n Automation",
        "Make.com Automation",
        "Clay GTM",
        "HubSpot CRM",
        "GoHighLevel",
        "Agency AI Systems",
        "White-Label AI",
        "Fractional AI Infrastructure",
        "GTM Infrastructure",
        "Lead Generation Automation",
        "AI Voice Agents",
        "Apify Scraping"
      ],
      "serviceType": [
        "Investor Outreach Infrastructure",
        "AI Operations Build",
        "Agency Partnership",
        "Startup Fundraising Systems",
        "Fractional AI Infrastructure",
        "White-Label AI Systems",
        "GTM Automation",
        "CRM Automation",
        "Lead Generation Systems",
        "AI Voice Agent Development"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "NirvanaXJude Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Investor Outreach Protocol",
              "description": "A full-stack investor outreach system for pre-seed, seed, Series A, and Series B founders. Includes: hand-built list of 500 active investors, LinkedIn warm-up, multi-channel personalised outreach across 10+ sending domains, AI-powered objection handling, and direct calendar booking. Founders get from 0 conversations to active term sheet discussions in 90 days.",
              "url": "https://nirvanaxjude.com",
              "provider": {
                "@id": "https://nirvanaxjude.com/#organisation"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Operations Build",
              "description": "Fractional AI infrastructure for funded startups scaling post-raise. Deployments include: autonomous support agents, client onboarding workflows, internal system automations, automated SDRs, AI voice support via Vapi AI and Twilio, dynamic CRM systems, and SEO and social content pipelines. Built in n8n, Make, and custom stacks.",
              "url": "https://nirvanaxjude.com",
              "provider": {
                "@id": "https://nirvanaxjude.com/#organisation"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Agency Partnership — White-Label AI Systems",
              "description": "White-label AI and automation system builds for marketing, growth, and GTM agencies. NirvanaXJude builds under the agency's brand in n8n or Make, delivers with full SOPs, and the end client never knows NirvanaXJude exists. 12+ active white-label agency deployments.",
              "url": "https://nirvanaxjude.com/agencies",
              "provider": {
                "@id": "https://nirvanaxjude.com/#organisation"
              }
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "6",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "E.J" },
          "reviewBody": "Jude used Apify and LinkedIn scraping to build a lead machine that drafts personalized first lines that actually sound human. Our reply rate jumped from 2% to nearly 9%. He set up the entire automation in n8n and linked it to our CRM flawlessly. This system literally pays for itself every single day.",
          "datePublished": "2025-01-15"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "R.S" },
          "reviewBody": "He built us a custom master snapshot that is actually bulletproof. He took over the entire DNS and SMTP setup and mapped everything to our corporate HubSpot CRM via Make.com. The data integrity is 100% — no more lost leads or broken triggers. He acted like a partner in our agency's growth.",
          "datePublished": "2025-03-10"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "T.M" },
          "reviewBody": "He doesn't just build the system, he understands how the marketing has to work around it. That's rare.",
          "datePublished": "2025-06-01"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "F.A" },
          "reviewBody": "Jude came in and architected a complete Company Brain. The logic he built for state management is flawless — if a status changes in ClickUp, our entire Notion dashboard reflects it instantly. It's saved our PM at least 10 hours a week.",
          "datePublished": "2025-08-20"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "M.O" },
          "reviewBody": "I've worked with GHL Experts before, but most just install a basic snapshot and leave. Jude built a system and then created SOPs so our team could actually run it independently. Absolute legend.",
          "datePublished": "2025-09-05"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "D.K" },
          "reviewBody": "The AI references specific company news and posts so well that our reply rate speaks for itself. He took away all the manual research debt.",
          "datePublished": "2025-10-12"
        }
      ],
      "sameAs": [
        "https://www.youtube.com/@nirvanaxjude",
        "https://twitter.com/nirvanaxjude"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://nirvanaxjude.com/about#jude",
      "name": "Jude Olaboboye",
      "givenName": "Jude",
      "familyName": "Olaboboye",
      "jobTitle": "AI Systems Architect & Founder",
      "worksFor": { "@id": "https://nirvanaxjude.com/#organisation" },
      "url": "https://nirvanaxjude.com/about",
      "image": "https://nirvanaxjude.com/images/jude-olaboboye.jpg",
      "description": "Jude Olaboboye is an AI systems architect and founder of NirvanaXJude. He combines behavioural research with hard automation to build investor outreach systems and AI infrastructure for founders and agencies. He has built 70+ systems over 4 years, helping 12+ startups raise capital across pre-seed through Series A.",
      "knowsAbout": [
        "Investor Outreach Infrastructure",
        "Startup Fundraising",
        "Pre-Seed Funding",
        "Seed Funding",
        "Series A Fundraising",
        "Venture Capital Outreach",
        "AI Automation",
        "n8n Workflow Automation",
        "Make.com",
        "Clay GTM Platform",
        "HubSpot CRM",
        "GoHighLevel",
        "Apify Web Scraping",
        "Vapi AI Voice Agents",
        "Twilio",
        "Notion Systems",
        "ClickUp Automation",
        "Agency Operations",
        "White-Label AI Systems",
        "Fractional AI Infrastructure"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "AI Systems Architect",
        "occupationLocation": { "@type": "Place", "name": "Worldwide" },
        "skills": "AI automation, investor outreach systems, n8n, Make.com, Clay, startup fundraising infrastructure, agency white-label systems"
      },
      "sameAs": [
        "https://www.youtube.com/@nirvanaxjude",
        "https://twitter.com/nirvanaxjude"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://nirvanaxjude.com/#website",
      "url": "https://nirvanaxjude.com",
      "name": "NirvanaXJude",
      "description": "AI systems for founders raising capital and agencies that need to deliver it.",
      "publisher": { "@id": "https://nirvanaxjude.com/#organisation" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nirvanaxjude.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is NirvanaXJude different from hiring a fundraising consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A consultant gives advice. NirvanaXJude builds and runs the actual outreach system — targeting, emails, follow-ups, objection handling — and hands founders meetings on their calendar. Founders stay focused on building. NirvanaXJude runs the raise."
      }
    },
    {
      "@type": "Question",
      "name": "How long before I start seeing investor meetings on my calendar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients see their first investor replies within 7–14 days of launch. Qualified meetings typically start booking in weeks 3–6 depending on round size and sector. Active term sheet discussions typically begin within 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "What kinds of startups does NirvanaXJude work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NirvanaXJude works with pre-seed through Series B founders raising between $500K and $20M+. Industry-agnostic — SaaS, cleantech, fintech, AI infrastructure, deep tech, and more. If investors fund the space, NirvanaXJude can reach them."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a deck or product ready before working with NirvanaXJude?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A clear thesis and a deck are needed before starting. NirvanaXJude handles investor targeting, personalised outreach, objection handling, and meeting booking from that point — putting the pitch in front of the right investors at the right time."
      }
    },
    {
      "@type": "Question",
      "name": "How does the NirvanaXJude agency partnership work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agencies scope the project with their client. NirvanaXJude builds the AI system in n8n or Make under the agency's brand. The end client never knows NirvanaXJude exists. The system is delivered with full SOPs. The agency keeps the client relationship and the margin."
      }
    },
    {
      "@type": "Question",
      "name": "Will the investor outreach damage my brand or reputation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Every message is personalised to the specific investor's thesis, recent portfolio, and public activity. NirvanaXJude only reaches investors with active capital at the correct stage. The quality of the outreach protects the founder's reputation — it never risks it."
      }
    }
  ]
};

export const CASE_STUDY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NirvanaXJude Startup Funding Results",
  "description": "Startups that worked with NirvanaXJude's investor outreach infrastructure and successfully raised capital.",
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Article",
        "name": "Reflect Orbital — Series A $20M Raised",
        "headline": "Reflect Orbital raises $20M Series A led by Lux Capital",
        "description": "Reflect Orbital used the Clay and n8n outreach stack to fund development of their first orbital mirror satellite, Eärendil-1. Round: Series A. Amount: USD 20,000,000. Lead Investor: Lux Capital. Date: May 2025.",
        "url": "https://nirvanaxjude.com/startup-funding-results",
        "datePublished": "2025-05-01",
        "author": { "@id": "https://nirvanaxjude.com/#organisation" }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Article",
        "name": "Swift Solar — Series A $27M Raised",
        "headline": "Swift Solar raises $27M Series A for perovskite solar technology",
        "description": "Swift Solar raised $27M in Series A funding co-led by Eni Next and Fontinalis Partners for their perovskite solar cell technology.",
        "url": "https://nirvanaxjude.com/startup-funding-results"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Article",
        "name": "Vesta — Series A $30M Raised",
        "headline": "Vesta raises $30M Series A led by Andreessen Horowitz",
        "description": "Vesta, a mortgage infrastructure SaaS company, raised $30M in Series A funding led by Andreessen Horowitz.",
        "url": "https://nirvanaxjude.com/startup-funding-results"
      }
    }
  ]
};

export const PAGE_META = {
  home: {
    title: "Investor Outreach for Startups | NirvanaXJude — Pre-Seed to Series B Fundraising Infrastructure",
    description: "NirvanaXJude builds AI-powered investor outreach systems for founders raising pre-seed, seed, Series A and Series B. We map 500 active investors, execute personalised outreach, handle objections, and book meetings on your calendar. 12+ startups raised. 70+ businesses influenced.",
    keywords: "investor outreach for startups, pre-seed funding help, Series A fundraising system, startup investor meetings, VC outreach automation, seed funding, startup fundraising infrastructure, investor outreach system, how to get startup funding, Clay n8n investor outreach",
    canonical: "https://nirvanaxjude.com"
  },
  agencies: {
    title: "White-Label AI Systems for Agencies | NirvanaXJude — Deliver AI Without Hiring",
    description: "NirvanaXJude is the white-label AI systems partner for agencies. We build in n8n and Make under your brand. Your clients never know we exist. 12+ active agency deployments. You scope, we build, you deliver.",
    keywords: "white label AI systems for agencies, n8n automation agency, agency AI partner, GoHighLevel expert, HubSpot automation, Make.com agency, AI operations for agencies, build AI for clients, agency technical partner",
    canonical: "https://nirvanaxjude.com/agencies"
  },
  lab: {
    title: "Live AI System Demos | NirvanaXJude Intelligence Lab — Test Before You Commit",
    description: "Test 8 live AI deployments: voice receptionist, strategy roadmap generator, CRM architect, ROI calculator, Google Maps scraper, and more. Zero hallucinations. Real systems powering real agencies. No sign-up required.",
    keywords: "live AI demos, AI voice agent demo, n8n automation demo, CRM automation live, AI ROI calculator, AI systems demo, test AI before buying, intelligence lab",
    canonical: "https://nirvanaxjude.com/lab"
  },
  about: {
    title: "About Jude Olaboboye | NirvanaXJude — AI Systems Architect for Founders & Agencies",
    description: "Jude Olaboboye is the AI systems architect behind NirvanaXJude. 70+ systems built. 12+ startups raised capital. 4 years combining behavioural research with automation to build investor outreach systems and AI infrastructure that makes growth predictable.",
    keywords: "Jude Olaboboye, NirvanaXJude founder, AI systems architect, investor outreach expert, startup automation specialist, n8n expert, Clay automation, agency AI builder",
    canonical: "https://nirvanaxjude.com/about"
  }
};

export const POSITION_ZERO_ANSWERS = {
    home: [
        "NirvanaXJude helps founders raise pre-seed, seed, Series A, and Series B funding by building and running the complete investor outreach system — from mapping 500 active investors to booking meetings on your calendar. Using Clay, n8n, and AI personalisation, 6 months of manual outreach becomes 90 days of precision execution.",
        "The average founder spends 6 months on manual investor outreach before getting a term sheet. NirvanaXJude compresses that to 90 days using a 6-step system: targeted investor research, LinkedIn warm-up, multi-channel outreach, AI-powered objection handling, direct calendar booking, and data-driven iteration.",
        "NirvanaXJude has influenced 70+ businesses and supported 12+ startup fundraises over 4 years. Results include Reflect Orbital raising $20M in a Series A led by Lux Capital, Swift Solar raising $27M Series A, and Vesta raising $30M Series A led by Andreessen Horowitz — all using Clay and n8n outreach infrastructure.",
        "After raising capital, NirvanaXJude acts as a fractional AI infrastructure team. Systems deployed include autonomous support agents, client onboarding workflows, automated SDRs, AI voice agents via Vapi AI and Twilio, dynamic CRMs, and content pipelines — so new capital goes into growth, not salaries."
    ],
    agencies: [
        "NirvanaXJude is a white-label AI systems partner for agencies. We build automation systems in n8n and Make under your agency brand, deliver with full SOPs, and your client never knows we exist. 12+ active agency deployments. You handle the client relationship — we build what you promised."
    ]
};

