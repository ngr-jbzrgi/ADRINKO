import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Assets
import companyLogo from '../assets/brand/logo.png'
import imgwhite from '../assets/products/imgwhite.png'
import imgred from '../assets/products/imgred.png'
import imgyellow from '../assets/products/imgyellow.png'
import imgAmmoniumChloride from '../assets/products/imgAmmoniumChloride.png'
import imgCopperSulfate from '../assets/products/imgCopperSulfate.png'


const products = [

  {
    title: 'Caustic Soda Flakes',
    purity: '98.62% NaOH',
    image: imgwhite,
    description: 'High-purity sodium hydroxide flakes produced to INSO 364 standard for industrial use.',
    highlights: [
      'Industrial grade',
      'High purity',
      'Low impurities',
      'INSO 364 compliant'
    ],
    specs: [
      { k: 'NaOH Purity', v: '98.62 %' },
      { k: 'Carbonate (Na₂CO₃)', v: '0.8 % (Max < 1)' },
      { k: 'Chloride (NaCl)', v: '0.02 % (Max < 0.06)' },
      { k: 'Sulphate (Na₂SO₄)', v: '0.009 % (Max < 0.01)' },
      { k: 'Insolubles', v: '0.068 % (Max < 0.1)' },
      { k: 'Silicate (SiO₂)', v: '< 0.01 % (Max < 0.02)' },
      { k: 'Aluminum (Al₂O₃)', v: '< 10 ppm (Max < 20)' },
      { k: 'Iron (Fe)', v: '< 2 ppm (Max < 30)' },
      { k: 'Heavy Metals (Pb)', v: '< 2 ppm (Max < 20)' },
      { k: 'Arsenic (As₂O₃)', v: '< 2 ppm (Max ≤ 2)' },
      { k: 'Mercury (Hg)', v: '< 0.1 ppm (Max < 0.2)' },
      { k: 'Standard', v: 'INSO 364' }
    ],
    applications: [
      'Detergents',
      'Textile',
      'Paper & Pulp',
      'Water Treatment',
      'Chemical Industry'
    ]
  }  
  
  ,
  {
    title: 'Sodium Sulfide',
    purity: '58.36% Na₂S',
    image: imgred,
    description: 'Industrial-grade sodium sulfide flakes manufactured according to INSO 2074 standard.',
    highlights: [
      'Industrial grade',
      'Controlled composition',
      'Flake form',
      'INSO 2074 compliant'
    ],
    specs: [
      { k: 'Sodium Sulfide (Na₂S)', v: '58.36 %' },
      { k: 'Sodium Hydrosulfide (NaHS)', v: '3.48 %' },
      { k: 'Total Sulfur (Na₂S + NaHS)', v: '61.84 % (Min 60)' },
      { k: 'Iron (Fe)', v: '100 ppm (Max 100)' },
      { k: 'pH', v: '12' },
      { k: 'Color', v: 'Red' },
      { k: 'Form', v: 'Flake' },
      { k: 'Standard', v: 'INSO 2074' }
    ],
    applications: [
      'Leather Processing',
      'Textile Industry',
      'Chemical Manufacturing',
      'Ore Flotation',
      'Water Treatment'
    ]
  }
  ,
  {
    title: 'Sodium Sulfide',
    purity: '58.27% Na₂S',
    image: imgyellow,
    description: 'Industrial-grade sodium sulfide flakes manufactured according to INSO 2074 standard.',
    highlights: [
      'Industrial grade',
      'Controlled composition',
      'Consistent quality',
      'INSO 2074 compliant'
    ],
    specs: [
      { k: 'Na₂S Content', v: '58.27 %' },
      { k: 'NaHS Content', v: '3.68 %' },
      { k: 'Iron (Fe)', v: '< 10 ppm (Max 50)' },
      { k: 'Total Sulfur (Na₂S + NaHS)', v: '61.95 % (Min 60)' },
      { k: 'pH', v: '12' },
      { k: 'Color', v: 'Yellow' },
      { k: 'Form', v: 'Flake' },
      { k: 'Standard', v: 'INSO 2074' }
    ],
    applications: [
      'Leather Processing',
      'Textile Industry',
      'Chemical Manufacturing',
      'Mining',
      'Pulp & Paper'
    ],
    catalog: '/catalogs/sodium-sulfide.pdf'
  }, 
  {
    title: 'Ammonium Chloride',
    purity: '99.61% NH₄Cl',
    image: imgAmmoniumChloride,
    description: 'Industrial-grade ammonium chloride powder produced under classic analytical methods procedures.',
    highlights: [
      'Industrial grade',
      'High purity',
      'White powder',
      'Quality controlled'
    ],
    specs: [
      { k: 'Purity', v: '99.61 % (Min 99.5)' },
      { k: 'pH', v: '5.2 (Range 4–6)' },
      { k: 'Color', v: 'White' },
      { k: 'Form', v: 'Powder' },
      { k: 'Test Method', v: 'Classic Method' }
    ],
    applications: [
      'Fertilizer Industry',
      'Metal Processing',
      'Battery Manufacturing',
      'Chemical Production',
      'Laboratory Use'
    ]
  },
  {
    title: 'Ammonium Chloride',
    purity: '99.61% NH₄Cl',
    image: imgAmmoniumChloride,
    description: 'Industrial-grade ammonium chloride powder produced under in-house analytical methods.',
    highlights: [
      'Industrial grade',
      'High purity',
      'White powder',
      'In-house tested'
    ],
    specs: [
      { k: 'Ammonium (NH₄)', v: '33.31 % (Max 33.6)' },
      { k: 'Chloride (Cl)', v: '66.3 % (Max 66.3)' },
      { k: 'Purity as NH₄Cl', v: '99.61 % (Min 99.5)' },
      { k: 'Color', v: 'White' },
      { k: 'Form', v: 'Powder' },
      { k: 'Test Method', v: 'In-house method' }
    ],
    applications: [
      'Fertilizer Industry',
      'Metal Processing',
      'Battery Manufacturing',
      'Chemical Production',
      'Laboratory Use'
    ]
  },
  {
    title: 'Copper Sulfate',
    purity: '24.3% Cu',
    image: imgCopperSulfate, 
    description: 'Industrial-grade copper sulfate powder analyzed using classic analytical methods with consistent quality.',
    highlights: [
      'Industrial grade',
      'Controlled copper purity',
      'Low iron content',
      'Blue powder'
    ],
    specs: [
      { k: 'Purity as Cu', v: '24.3 % (Range 24–25)' },
      { k: 'Iron (Fe)', v: '<10 ppm (Max 50)' },
      { k: 'Color', v: 'Blue' },
      { k: 'Form', v: 'Powder' },
      { k: 'Test Method', v: 'Classic Method' }
    ],
    applications: [
      'Agriculture',
      'Chemical Manufacturing',
      'Water Treatment',
      'Mining Industry',
      'Laboratory Use'
    ]
  }
  
  
  
  
  
]

const ProductCard = ({ product, index, isOpen, onToggle }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      className="glass-effect rounded-2xl overflow-hidden transition-all group self-start hover:shadow-2xl hover:shadow-ice-500/20"
    >
      {/* Product image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="p-8">
        {/* Product title + logo (ONLY here) */}
        <div className="flex items-center gap-0 mb-2">
          <img
            src={companyLogo}
            alt="Brand"
            className="w-12 h-12 shrink-0 object-contain opacity-95"
          />
          <h3 className="text-2xl font-bold text-ice-300 group-hover:text-gradient transition-all leading-tight">
            {product.title}
          </h3>
        </div>

        <div className="inline-block px-4 py-1 bg-ice-500/20 rounded-full text-ice-400 text-sm font-semibold mb-4">
          {product.purity}
        </div>

        <p className="text-gray-400 mb-6">{product.description}</p>

        {/* Only 3 highlights */}
        <ul className="space-y-2">
          {product.highlights.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ delay: index * 0.1 + i * 0.08 }}
              className="flex items-center text-gray-300 text-sm"
            >
              <svg className="w-5 h-5 text-ice-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Toggle details */}
        <button
          type="button"
          onClick={onToggle}
          className="mt-5 text-sm text-ice-400 hover:text-ice-300 transition-all flex items-center gap-1"
        >
          {isOpen ? 'Hide technical details' : 'See technical details'}
          <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
        </button>

        {/* Details (only render when open) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Specs */}
            <div className="mt-6">
              <div className="text-sm text-gray-500 mb-3">Key Specifications</div>
              <div className="space-y-2">
                {product.specs.map((s, i) => (
                  <div key={i} className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-400">{s.k}</span>
                    <span className="text-gray-200 font-medium text-right">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mt-6">
              <div className="text-sm text-gray-500 mb-3">Applications</div>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // ✅ only one card open at a time
  const [openIndex, setOpenIndex] = useState(null)
  const toggleCard = (index) => setOpenIndex((prev) => (prev === index ? null : index))

  return (
    <section id="products" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header (NO logo here) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold mb-4 text-gradient">Our Products</h2>
          <p className="text-xl text-gray-400">Industrial chemicals with verified purity</p>
        </motion.div>

        {/* Grid: prevents other cards stretching */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
