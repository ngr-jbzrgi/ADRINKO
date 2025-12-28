import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Products", to: "/products" },
      { label: "Gallery", to: "/gallery" },
      { label: "Articles", to: "/articles" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* left spacer to keep centered links visually balanced */}
          <div className="w-10 md:w-24" />

          {/* desktop links (centered) */}
          <div className="hidden md:flex justify-center items-center flex-1">
            <div className="flex space-x-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors cursor-pointer ${
                        isActive ? "text-ice-400" : "text-gray-300 hover:text-ice-400"
                      }`
                    }
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* mobile toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="glass-effect rounded-xl px-3 py-2 text-gray-200 hover:text-ice-300 transition-colors"
            >
              <span className="block leading-none text-xl">{open ? "×" : "≡"}</span>
            </button>
          </div>

          {/* right spacer on desktop to preserve symmetry */}
          <div className="hidden md:block w-24" />
        </div>

        {/* mobile panel */}
        {open && (
          <div className="md:hidden mt-4 glass-effect rounded-2xl p-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-ice-500/15 text-ice-300 border border-ice-500/30"
                        : "text-gray-200 hover:bg-white/5 border border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
