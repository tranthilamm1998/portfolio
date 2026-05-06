import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import emailjs from '@emailjs/browser'
import { GraduationCap, Wrench, Send, Mail, Phone, MapPin, Link, MessageSquare, X, CheckCircle, Loader2 } from 'lucide-react'

export default function EducationContact() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setModalOpen(false); setSubmitted(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    console.log('EmailJS env check:', { serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey })

    if (!serviceId || !templateId || !publicKey) {
      setError('EmailJS chưa được cấu hình. Vui lòng thêm biến môi trường vào file .env và khởi động lại server.')
      setSending(false)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      )
      setSubmitted(true)
    } catch (err: any) {
      console.error('EmailJS error:', err)
      const msg = err?.text || err?.message || ''
      if (msg.includes('template')) {
        setError('Lỗi template: Vui lòng kiểm tra EmailJS template có đúng các biến from_name, from_email, subject, message không.')
      } else if (msg.includes('service') || msg.includes('Service')) {
        setError('Lỗi service ID: Vui lòng kiểm tra lại Service ID trong EmailJS dashboard.')
      } else {
        setError('Gửi email thất bại: ' + (msg || 'Lỗi không xác định. Vui lòng thử lại.'))
      }
    } finally {
      setSending(false)
    }
  }

  function closeModal() {
    setModalOpen(false)
    setTimeout(() => { setSubmitted(false); setError('') }, 300)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="education" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'0ms'}}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={20} className="text-blue-400" />
              <h3 className="font-semibold text-sm tracking-wide">EDUCATION</h3>
            </div>
            <div>
              <p className="font-medium text-sm">Thu Duc College of Technology</p>
              <p className="text-xs text-gray-400 mt-1">Information Technology</p>
              <p className="text-xs text-gray-500 mt-1">2016 - 2019</p>
            </div>
          </div>

          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'100ms'}}>
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={20} className="text-blue-400" />
              <h3 className="font-semibold text-sm tracking-wide">TOOLS &amp; TECHNOLOGIES</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[10px] text-gray-300">Figma</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[10px] text-gray-300">Ps</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[10px] text-gray-300">Git</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[10px] text-gray-300">Bitbucket</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[10px] text-gray-300">Linux</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[10px] text-gray-300">Docker</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[10px] text-gray-300">AWS</div>
              </div>
            </div>
          </div>

          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'200ms'}}>
            <div className="flex items-center gap-2 mb-4">
              <Send size={20} className="text-blue-400" />
              <h3 className="font-semibold text-sm tracking-wide">LET'S CONNECT</h3>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              I'm currently open to new opportunities. Let's build something amazing together!
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <MessageSquare size={14} />
              Contact Me
            </button>
          </div>

          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'300ms'}} id="contact">
            <div className="flex items-center gap-2 mb-4">
              <Mail size={20} className="text-blue-400" />
              <h3 className="font-semibold text-sm tracking-wide">CONTACT</h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <span className="text-gray-300">0333393434</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <span className="text-gray-300">tranthilam1998@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-400 shrink-0" />
                <span className="text-gray-300">Thu Duc City, Ho Chi Minh City</span>
              </div>
              <div className="flex items-center gap-2">
                <Link size={14} className="text-blue-400 shrink-0" />
                <span className="text-gray-300">linkedin.com/in/lam-tran-532a10233</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
          onClick={(e) => {
            if (e.currentTarget === e.target) closeModal()
          }}
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
          <div className="relative w-full max-w-lg bg-[#0d1225] border border-[#1f2937] rounded-2xl overflow-hidden shadow-2xl animate-scale visible mt-8 sm:mt-12">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Get in touch</h3>
                  <p className="text-xs text-gray-400">Fill out the form below and I'll reply shortly.</p>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#111827] border border-[#1f2937] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#111827] border border-[#1f2937] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Subject</label>
                    <input
                      required
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#111827] border border-[#1f2937] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#111827] border border-[#1f2937] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  {error && (
                    <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                  >
                    {sending ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="mt-8 flex flex-col items-center text-center animate-on-scroll visible">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                    <CheckCircle size={24} className="text-green-400" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1">Message sent!</h4>
                  <p className="text-xs text-gray-400 mb-5">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111827] border border-[#1f2937] hover:border-blue-500/30 text-white text-sm font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
