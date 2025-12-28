import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ParticleBackground from "../ParticleBackground";

export default function Layout() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen">
      <ParticleBackground />
      <Navbar />
      {/* space for fixed navbar */}
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

