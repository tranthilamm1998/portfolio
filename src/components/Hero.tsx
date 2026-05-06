import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Phone, Mail, MapPin, Link } from 'lucide-react'

export default function Hero() {
  const { ref: imgRef, isVisible: imgV } = useScrollAnimation<HTMLDivElement>(0.2)
  const { ref: txtRef, isVisible: txtV } = useScrollAnimation<HTMLDivElement>(0.1)
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-10">
          <div className={`hidden lg:flex items-center h-full shrink-0 animate-on-scroll ${imgV?'visible':''}`}>
            <span
              className="text-xs tracking-[0.25em] text-gray-600 font-medium uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              WordPress Developer
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 flex-1">
            <div ref={imgRef} className={`relative shrink-0 animate-scale ${imgV?'visible':''}`} style={{transitionDelay:'100ms'}}>
              <div className="w-64 h-80 sm:w-72 sm:h-96 relative">
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/30 p-1.5">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-xl z-10" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-xl z-10" />
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face"
                      alt="Tran Thi Lam"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 border-l-2 border-b-2 border-blue-500/40 rounded-bl-2xl" />
              <div className="absolute -top-5 -right-5 w-24 h-24 border-t-2 border-r-2 border-blue-500/40 rounded-tr-2xl" />
            </div>

            <div ref={txtRef} className="flex-1 text-center lg:text-left">
              <p className={`text-blue-400 font-medium mb-2 animate-on-scroll ${txtV?'visible':''}`} style={{transitionDelay:'200ms'}}>Hi, I'm</p>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 animate-on-scroll ${txtV?'visible':''}`} style={{transitionDelay:'300ms'}}>
                TRAN THI LAM
              </h1>
              <h2 className={`text-xl sm:text-2xl text-blue-400 font-semibold mb-6 animate-on-scroll ${txtV?'visible':''}`} style={{transitionDelay:'400ms'}}>
                WordPress Developer
              </h2>
              <p className={`text-gray-400 max-w-2xl leading-relaxed mb-8 animate-on-scroll ${txtV?'visible':''}`} style={{transitionDelay:'500ms'}}>
                WordPress Developer with 5+ years of experience in building, optimizing,
                and maintaining high-performance websites. Specialized in custom theme
                &amp; plugin development, SEO optimization, and performance improvement.
                Passionate about creating clean, user-friendly, and SEO-optimized
                websites that deliver real value.
              </p>

              <div className={`flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-300 animate-on-scroll ${txtV?'visible':''}`} style={{transitionDelay:'600ms'}}>
                <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <Phone size={16} className="text-blue-400" />
                  <span>0333393434</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <Mail size={16} className="text-blue-400" />
                  <span>tranthilam1998@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Thu Duc City, Ho Chi Minh City</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <Link size={16} className="text-blue-400" />
                  <span>linkedin.com/in/lam-tran-532a10233</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
