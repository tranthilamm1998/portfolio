import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FolderOpen, ExternalLink, ArrowUpRight, X } from 'lucide-react'

const projects = [
  { name: 'australianvisas.com', desc: 'Immigration Website', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop', tags: ['WordPress', 'SEO'], detail: 'A fully customized WordPress immigration consulting website with multi-step visa assessment forms, appointment booking integration, and SEO-optimized content structure to drive organic traffic from targeted regions.' },
  { name: 'jnqiltech.com', desc: 'Gold Introduction Website', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop', tags: ['Custom Theme'], detail: 'Elegant corporate landing site built with a bespoke WordPress theme. Features interactive product showcases, smooth scroll animations, and a clean editorial layout tailored for luxury brand presentation.' },
  { name: 'yakistore.gom.com', desc: 'Restaurant Website', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop', tags: ['Elementor', 'WooCommerce'], detail: 'Complete restaurant & online store solution using Elementor and WooCommerce. Includes dynamic menu management, table reservation system, delivery zones, and payment gateway integration.' },
  { name: 'bgsms.vn', desc: 'Corporate & Recruitment Systems', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop', tags: ['Custom Plugin'], detail: 'Enterprise corporate portal paired with a recruitment management system. Developed custom WordPress plugins for job posting workflows, candidate tracking, and HR dashboard reporting.' },
  { name: '2tmusic.com', desc: 'Music Platform', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', tags: ['React', 'AWS'], detail: 'Music streaming and distribution platform combining a React frontend with a robust WordPress CMS backend. Deployed on AWS with CDN-backed audio delivery and user playlist management.' },
  { name: 'probationcen.com.au', desc: 'Service Platform', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop', tags: ['WordPress', 'Docker'], detail: 'Local service directory and appointment platform containerized with Docker for consistent staging-to-production deployments. Includes member dashboards and automated email reminders.' },
  { name: 'robotwaterfiller.com', desc: 'E-commerce Website', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop', tags: ['WooCommerce'], detail: 'Direct-to-consumer e-commerce site for smart home appliances. WooCommerce powers the store with custom product filters, subscription refills, and shipping rate automation.' },
  { name: 'uploads.edu.vn', desc: 'Lead Generation Platform', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', tags: ['SEO', 'Analytics'], detail: 'Education lead-generation portal with landing page variations, form analytics, and conversion tracking. SEO-focused architecture with schema markup and Core Web Vitals optimization.' },
  { name: 'summitphapluat.com', desc: 'Financial Education Platform', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop', tags: ['LMS', 'WordPress'], detail: 'Online learning management system for legal & financial courses. Custom LMS features include progress tracking, quiz modules, certificate generation, and tiered content access.' },
  { name: 'harborfinancialinstitute.com', desc: 'Financial Trading Platform', img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop', tags: ['Custom Admin'], detail: 'Financial training and trading signals platform with a custom WordPress admin dashboard. Admins can publish market analysis, manage user subscriptions, and schedule live webinars.' },
  { name: 'qftworld.com', desc: 'Financial Services Website', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop', tags: ['GraphQL'], detail: 'Headless WordPress frontend consuming data via GraphQL. Decoupled architecture enables fast page loads, flexible content modeling, and seamless integration with a modern React-based UI.' },
  { name: 'vihub.com', desc: 'Web Platform', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop', tags: ['Multi-tenant'], detail: 'Multi-tenant SaaS-style platform allowing regional teams to launch branded microsites from a single WordPress multisite installation with shared design tokens and modular blocks.' },
]

export default function Projects() {
  const { ref: titleRef, isVisible: titleV } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: gridRef, isVisible: gridV } = useScrollAnimation<HTMLDivElement>(0.05)
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const openProject = openIdx !== null ? projects[openIdx] : null

  useEffect(() => {
    if (openIdx !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [openIdx])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenIdx(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="projects" className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`flex items-center justify-between mb-10 animate-on-scroll ${titleV ? 'visible' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <FolderOpen size={20} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-wide">FEATURED PROJECTS</h2>
              <p className="text-xs text-gray-500 mt-0.5">Selected works from 2019 — 2024</p>
            </div>
          </div>
          <a
            href="#"
            className="group text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
          >
            View all projects
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIdx(idx)}
              className={`group relative block w-full text-left rounded-2xl overflow-hidden border border-[#1f2937] bg-[#0d1225] hover:border-blue-500/30 transition-all duration-500 stagger-item ${gridV ? 'visible' : ''}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(59,130,246,0.06), transparent 40%)'
                }}
              />

              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={16} className="text-white" />
                </div>

                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-[10px] font-medium text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{project.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openProject && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
          onClick={(e) => {
            if (e.currentTarget === e.target) setOpenIdx(null)
          }}
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
          <div className="relative w-full max-w-3xl bg-[#0d1225] border border-[#1f2937] rounded-2xl overflow-hidden shadow-2xl animate-scale visible mt-8 sm:mt-12">
            <button
              onClick={() => setOpenIdx(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-video overflow-hidden">
              <img
                src={openProject.img.replace('w=800&h=500', 'w=1200&h=675')}
                alt={openProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1225] via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {openProject.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-xs font-medium text-blue-400 border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{openProject.name}</h3>
              <p className="text-sm text-blue-400 mb-4">{openProject.desc}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{openProject.detail}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
