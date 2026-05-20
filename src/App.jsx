import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FarmerDashboard from "./pages/FarmerDashboard";
import TransporterDashboard from "./pages/TransporterDashboard";
import BookTrip from "./pages/BookTrip";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farmer" element={<FarmerDashboard />} />
            <Route path="/transporter" element={<TransporterDashboard />} />
            <Route path="/book" element={<BookTrip />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
