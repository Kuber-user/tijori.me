import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Platform Pages
import CashManagement from './pages/platform/CashManagement';
import AIForecasting from './pages/platform/AIForecasting';
import RiskFX from './pages/platform/RiskFX';
import Payments from './pages/platform/Payments';
import ConnectivityHub from './pages/platform/ConnectivityHub';
import LoansManagement from './pages/platform/LoansManagement';
import InvestmentManagement from './pages/platform/InvestmentManagement';
import LGLCManagement from './pages/platform/LGLCManagement';
import BankFacilities from './pages/platform/BankFacilities';

// Solutions - Roles
import CFO from './pages/solutions/roles/CFO';
import Treasurer from './pages/solutions/roles/Treasurer';
import Controller from './pages/solutions/roles/Controller';

// Solutions - Industries
import RealEstate from './pages/solutions/industries/RealEstate';
import Ecommerce from './pages/solutions/industries/Ecommerce';
import Manufacturing from './pages/solutions/industries/Manufacturing';
import Construction from './pages/solutions/industries/Construction';
import SemiGovernment from './pages/solutions/industries/SemiGovernment';
import OilGas from './pages/solutions/industries/OilGas';
import FMCG from './pages/solutions/industries/FMCG';

// Resources
import TrustSecurity from './pages/resources/TrustSecurity';

// Company
import About from './pages/company/About';
import Contact from './pages/company/Contact';
import Pricing from './pages/company/Pricing';

// Language wrapper component that syncs URL language with i18n
function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'ar')) {
      // Update i18n language
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
      // Update document direction for RTL
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  }, [lang, i18n]);

  return <Outlet />;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Redirect root to /en */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LanguageWrapper />}>
            <Route element={<Layout />}>
              {/* Home */}
              <Route index element={<Home />} />

              {/* Platform */}
              <Route path="platform/cash-management" element={<CashManagement />} />
              <Route path="platform/ai-forecasting" element={<AIForecasting />} />
              <Route path="platform/risk-fx-management" element={<RiskFX />} />
              <Route path="platform/payments" element={<Payments />} />
              <Route path="platform/connectivity" element={<ConnectivityHub />} />
              <Route path="platform/loans" element={<LoansManagement />} />
              <Route path="platform/investments" element={<InvestmentManagement />} />
              <Route path="platform/lg-lc" element={<LGLCManagement />} />
              <Route path="platform/bank-facilities" element={<BankFacilities />} />

              {/* Solutions - Roles */}
              <Route path="solutions/cfo" element={<CFO />} />
              <Route path="solutions/treasurer" element={<Treasurer />} />
              <Route path="solutions/controller" element={<Controller />} />

              {/* Solutions - Industries */}
              <Route path="solutions/real-estate" element={<RealEstate />} />
              <Route path="solutions/ecommerce" element={<Ecommerce />} />
              <Route path="solutions/manufacturing" element={<Manufacturing />} />
              <Route path="solutions/construction" element={<Construction />} />
              <Route path="solutions/semi-government" element={<SemiGovernment />} />
              <Route path="solutions/oil-gas" element={<OilGas />} />
              <Route path="solutions/fmcg" element={<FMCG />} />

              {/* Resources */}
              <Route path="resources/trust-security" element={<TrustSecurity />} />

              {/* Company */}
              <Route path="company/about" element={<About />} />
              <Route path="company/contact" element={<Contact />} />
              <Route path="pricing" element={<Pricing />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
