import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import CreateAccount from "./components/Pages/CreateAccount";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Documentation from "./components/Pages/Documentation";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsConditions from "./components/Pages/TermsConditions";
import DeveloperPage from "./components/Pages/DeveloperPage";

const AppLayout = () => {
  const location = useLocation();
  
  // Pages that should not show header and footer
  const hideHeaderFooter = ["/login", "/create"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/developer" element={<DeveloperPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
