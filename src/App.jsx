import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlobalNav from './components/GlobalNav';
import Footer from './components/Footer';
import StartupsPage from './pages/StartupsPage';
import AgenciesPage from './pages/AgenciesPage';
import IntelligenceLab from './pages/IntelligenceLab';
import AboutPage from './pages/AboutPage';
import { 
    PreSeedFundingPage, 
    InvestorOutreachExplainedPage, 
    AIOpsForAgenciesPage, 
    StartupFundingResultsPage, 
    SeriesAFundraisingPage 
} from './pages/AnswerKitPages';
import { PrivacyPolicyPage, TermsAndConditionsPage } from './pages/LegalPages';



gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Footer is shown only outside the Lab
    const showFooter = location.pathname !== '/lab';

    return (
        <div className="bg-[#0D0D12] min-h-screen text-white font-sans selection:bg-[#C9A84C]/30 selection:text-white">
            <GlobalNav />
            <Routes>
                <Route path="/" element={<StartupsPage />} />
                <Route path="/agencies" element={<AgenciesPage />} />
                <Route path="/lab" element={<IntelligenceLab />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/how-to-get-pre-seed-funding-for-startups" element={<PreSeedFundingPage />} />
                <Route path="/how-investor-outreach-works" element={<InvestorOutreachExplainedPage />} />
                <Route path="/what-is-ai-operations-for-agencies" element={<AIOpsForAgenciesPage />} />
                <Route path="/startup-funding-results" element={<StartupFundingResultsPage />} />
                <Route path="/series-a-fundraising-for-founders" element={<SeriesAFundraisingPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsAndConditionsPage />} />


            </Routes>
            {showFooter && <Footer />}
        </div>
    );
};

export default App;
