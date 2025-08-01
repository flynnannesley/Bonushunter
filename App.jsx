import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Info, Headset, ShieldCheck } from "lucide-react";
import CasinoCatalog from "./CasinoCatalog";
import SupportPage from "./SupportPage";
import AboutPage from "./AboutPage";
import CookieConsent from "react-cookie-consent"; // 🍪 Import the cookie plugin

// Placeholder component for Responsible Gambling Page
function ResponsibleGamblingPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-4">Responsible Gambling</h1>
      <p>Please gamble responsibly. If you need help, contact support organizations such as: https://responsiblegambling.org.za.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header Navigation with 4 icons equally spaced */}
        <div className="flex justify-around items-center px-6 py-4 bg-gray-300 text-gray-900">
          {/* Support */}
          <Link
            to="/support"
            className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition"
          >
            <span className="text-xs mb-1">Support</span>
            <Headset size={35} className="text-inherit" />
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition"
          >
            <span className="text-xs mb-1">About</span>
            <Info size={35} className="text-inherit" />
          </Link>

          {/* Home */}
          <Link
            to="/"
            className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition"
          >
            <span className="text-xs mb-1">Home</span>
            <Home size={35} className="text-inherit" />
          </Link>

          {/* Responsible Gambling */}
          <Link
            to="/responsible-gambling"
            className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition"
          >
            <span className="text-xs mb-1 text-center">Responsible<br />Gambling</span>
            <ShieldCheck size={35} className="text-inherit" />
          </Link>
        </div>

        {/* Age disclaimer below header */}
        <p className="text-center text-gray-400 text-xs py-2 px-4">
          Users must be 18 years or older to gamble.
        </p>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<CasinoCatalog />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/responsible-gambling" element={<ResponsibleGamblingPage />} />
        </Routes>

        {/* 🍪 Cookie Consent Plugin */}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="bonushunter-cookie-consent"
          style={{ background: "#2b2b2b", textAlign: "center" }}
          buttonStyle={{
            background: "#7c3aed",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "8px",
            padding: "10px 20px",
          }}
          expires={150}
        >
          This website uses cookies to enhance the user experience and improve performance.
        </CookieConsent>
      </div>
    </Router>
  );
}

export default App;
