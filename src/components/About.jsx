import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '99.9%', label: 'Purity Grade' },
  { value: '24/7', label: 'Support' }
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">About ADRINKO</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              ADRINKO is a leading supplier of premium caustic soda products, serving industries 
              worldwide with unwavering commitment to quality and reliability.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our state-of-the-art production facilities and rigorous quality control processes 
              ensure that every batch meets the highest industry standards. From chemical manufacturing 
              to water treatment, we provide the solutions you need.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-xl p-6 text-center"
                >
                  <motion.div
                    className="text-4xl font-bold text-gradient mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-ice-500/20 to-frost-500/20 rounded-full blur-3xl"
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-ice-300">Why Choose Us?</h3>
                
                {[
                  { icon: '🏭', title: 'Industrial Grade', desc: 'Certified for industrial applications' },
                  { icon: '🔬', title: 'Lab Tested', desc: 'Every batch rigorously tested' },
                  { icon: '🚚', title: 'Fast Delivery', desc: 'Reliable logistics network' },
                  { icon: '💼', title: 'Expert Support', desc: 'Technical assistance available' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start mb-6 group cursor-pointer"
                  >
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ice-300 mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
