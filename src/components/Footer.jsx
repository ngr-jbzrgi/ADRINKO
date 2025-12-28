import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import datasheet from "../assets/datasheet/datasheet.pdf";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ADRINKO</h3>
            <p className="text-gray-400">
            High-quality industrial chemicals designed for consistent performance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-ice-300 mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/products" className="hover:text-ice-400 transition-colors">
                  Our products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-ice-300 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-ice-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ice-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-ice-300 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href={datasheet} target="_blank" rel="noopener" className="hover:text-ice-400 transition-colors">Safety Data Sheets</a></li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/10 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 ADRINKO. All rights reserved. | Crafted with precision and care.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
