import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { User, Code, Users, Globe, Clock, MessageCircle } from 'lucide-react'

export default function AboutSkills() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  return (
    <section id="about" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'0ms'}}>
            <div className="flex items-center gap-2 mb-4">
              <User size={20} className="text-blue-400" />
              <h3 className="font-semibold text-lg">ABOUT ME</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              I am a detail-oriented and results-driven WordPress Developer. I specialize in
              custom theme and plugin development, SEO optimization, and performance
              improvement.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              I enjoy turning ideas into responsive, high-performing websites that help
              businesses grow.
            </p>
          </div>

          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'100ms'}} id="skills">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-blue-400" />
              <h3 className="font-semibold text-lg">TECHNICAL SKILLS</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <h4 className="text-gray-300 font-medium mb-1">Languages &amp; Technologies</h4>
                <p className="text-gray-400 text-xs">PHP, HTML5, CSS3, JavaScript, jQuery</p>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-1">Tools</h4>
                <p className="text-gray-400 text-xs">Figma, Photoshop</p>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-1">CMS</h4>
                <p className="text-gray-400 text-xs">
                  WordPress (Custom Themes, Plugins, Elementor, Flatsome)
                </p>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-1">Other</h4>
                <p className="text-gray-400 text-xs">
                  GraphQL, AWS, Docker, Linux (CentOS 7), SEO
                </p>
              </div>
              <div className="col-span-2">
                <h4 className="text-gray-300 font-medium mb-1">Database</h4>
                <p className="text-gray-400 text-xs">MySQL</p>
              </div>
            </div>
          </div>

          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'200ms'}}>
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-blue-400" />
              <h3 className="font-semibold text-lg">SOFT SKILLS</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Users size={16} className="text-blue-400 shrink-0" />
                <span className="text-gray-300">Teamwork</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-blue-400 shrink-0" />
                <span className="text-gray-300">Time Management</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-blue-400 shrink-0" />
                <span className="text-gray-300">Communication</span>
              </div>
            </div>
          </div>

          <div className={`bg-[#111827] border border-[#1f2937] rounded-xl p-6 stagger-item ${isVisible?'visible':''}`} style={{transitionDelay:'300ms'}}>
            <div className="flex items-center gap-2 mb-4">
              <Globe size={20} className="text-blue-400" />
              <h3 className="font-semibold text-lg">LANGUAGES</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇻🇳</span>
                  <span className="text-gray-300">Vietnamese</span>
                </div>
                <span className="text-xs text-gray-400 border border-gray-600 rounded px-2 py-0.5">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-gray-300">English</span>
                </div>
                <span className="text-xs text-gray-400 border border-gray-600 rounded px-2 py-0.5">Working proficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
