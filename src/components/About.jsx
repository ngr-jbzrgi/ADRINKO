import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "QC", label: "Batch Controls" },
  { value: "COA", label: "On Request" },
  { value: "SDS", label: "PDF Available" },
];

const About = ({ variant = "full", headingAs = "h2" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const Heading = headingAs;

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Heading className="text-5xl font-bold mb-6 text-gradient">About ADRINKO</Heading>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              ADRINKO operates under the supervision of Mr. Hosseini (جناب آقای حسینی) with over 15 years of industry experience.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We focus on consistent industrial chemicals supported by documented specifications, traceable batches, and practical technical support for receiving and use.
            </p>

            {variant === "preview" ? (
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            ) : null}

            {variant === "full" ? (
              <div className="grid grid-cols-2 gap-6 mt-10">
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
            ) : null}
          </motion.div>

          {variant === "preview" ? (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-ice-300">Why us</h3>
                <p className="text-gray-400 leading-relaxed">
                  Clear specifications, traceable lots, and responsive technical communication — built for industrial procurement and operations.
                </p>
              </div>
            </motion.div>
          ) : (
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
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-ice-500/20 to-frost-500/20 rounded-full blur-3xl"
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-ice-300">Why us</h3>

                  {[
                    { icon: "📋", title: "Documented specs", desc: "Clear specification tables and stable acceptance criteria." },
                    { icon: "🧪", title: "Quality controls", desc: "Routine checks with batch traceability and COA on request." },
                    { icon: "📦", title: "Industrial packaging", desc: "Packaging aligned with handling and warehouse workflows." },
                    { icon: "🤝", title: "Operational support", desc: "Practical support for receiving, storage, and usage questions." },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start mb-6 group"
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

                  <div className="mt-2 text-sm text-gray-500">
                    Timeline: 15+ years industry experience • Focus on industrial chemicals • Continuous QC improvement
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
