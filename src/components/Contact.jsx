import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = ({ headingAs = "h2" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const Heading = headingAs;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const validate = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (name.length < 2) return "Please enter your name.";
    // simple email check (basic validation requirement)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
    if (message.length < 10) return "Please enter a message (at least 10 characters).";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const err = validate();
    if (err) {
      setStatus("error");
      setErrorMsg(err);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const form = e.currentTarget
      const data = new FormData(form)

      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' }) // چون controlled هست
      } else {
        const json = await res.json().catch(() => null)
        setStatus('error')
        setErrorMsg(json?.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <Heading className="text-5xl font-bold mb-4 text-gradient">Contact</Heading>
          <p className="text-xl text-gray-400">Send a message and we’ll respond with the next steps.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-ice-300">Contact Information</h3>

              {[
                { icon: '📍', label: 'Address', value: 'Isfahan City Center Mall, Shahid Dastgerdi Expressway, Isfahan, Isfahan Province, Iran' },
                { icon: '📧', label: 'Email', value: 'info@adrinko.com' },
                { icon: '📞', label: 'Phone', value: '02191692372' },
                { icon: '⏰', label: 'Hours', value: 'SAT-THU: 8AM - 6PM' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="flex items-start mb-6 p-4 rounded-lg transition-all"
                >
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="text-ice-300 font-semibold">{item.value}</div>
                  </div>
                </motion.div>
              ))}

              <div className="mt-8 flex space-x-4">
               
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <form
              className="glass-effect rounded-2xl p-8"
              action="https://formspree.io/f/mqezndor"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-bold mb-6 text-ice-300">Send us a Message</h3>

              {/* optional subject */}
              <input type="hidden" name="_subject" value="ADRINKO - New Contact / Quote Request" />

              {status === "success" && (
                <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300">
                  Thanks — your message has been sent. We’ll contact you shortly.
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300">
                  {errorMsg}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Name</label>
                <motion.input
                  name="name"
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-ice-500 transition-all text-white"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Email</label>
                <motion.input
                  name="email"
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-ice-500 transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Message</label>
                <motion.textarea
                  name="message"
                  whileFocus={{ scale: 1.02 }}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-ice-500 transition-all text-white resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={
                  status === "sending"
                    ? {}
                    : { scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)" }
                }
                whileTap={status === "sending" ? {} : { scale: 0.95 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  status === "sending"
                    ? 'bg-white/10 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-ice-500 to-frost-500 hover:shadow-2xl'
                }`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
