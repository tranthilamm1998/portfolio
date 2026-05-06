import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    period: '11/2022 - Now',
    title: 'WORDPRESS DEVELOPER',
    company: 'HOWTHAI Technical',
    points: [
      'Developed and maintained both internal and outsourcing websites using WordPress.',
      'Built custom features using PHP, JavaScript, HTML, CSS.',
      'Applied SEO best practices to improve website ranking.',
      'Designed and converted UI from Figma into responsive websites.',
      'Implemented GraphQL to build and manage custom admin systems.',
      'Managed source code with Git & Bitbucket.',
      'Managed domains/hosting on AWS.',
      'Deployed and maintained applications using Docker.',
      'Collaborated on internal projects and product development.',
    ],
  },
  {
    period: '10/2022 - 08/2024',
    title: 'WORDPRESS DEVELOPER',
    company: 'Lucius Nova Co., Ltd',
    points: [
      'Managed and maintained the company\'s main website using WordPress.',
      'Developed and optimized features using PHP, JavaScript, HTML, CSS.',
      'Administered Linux servers for performance, security, reliability.',
      'Built and deployed satellite websites.',
      'Implemented SEO strategies to improve rankings and traffic.',
      'Optimized website performance and ensured responsive experience.',
    ],
  },
  {
    period: '04/2020 - 08/2022',
    title: 'WORDPRESS DEVELOPER',
    company: '123 Website Trading Service Co., Ltd',
    points: [
      'Developed corporate and e-commerce websites for clients.',
      'Translated Figma designs into responsive, user-friendly interfaces.',
      'Customized and optimized websites following SEO best practices.',
      'Edited and enhanced images using Photoshop to match branding.',
    ],
  },
  {
    period: '09/2019 - 02/2020',
    title: 'WEB DEVELOPER',
    company: 'DTD Software Co., Ltd',
    points: [
      'Developed and deployed SEO-optimized websites.',
      'Created content for marketing campaigns to increase reach and conversion.',
      'Edited and enhanced images to improve visual quality and presentation.',
    ],
  },
]

export default function Experience() {
  const { ref: lineRef, isVisible: lineV } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: cardsRef, isVisible: cardsV } = useScrollAnimation<HTMLDivElement>(0.05)
  return (
    <section id="experience" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center gap-2 mb-8 animate-on-scroll ${lineV?'visible':''}`}>
          <Briefcase size={20} className="text-blue-400" />
          <h2 className="text-xl font-bold tracking-wide">EXPERIENCE</h2>
        </div>

        <div className="relative" ref={lineRef}>
          <div className="hidden lg:block absolute top-[11px] left-0 right-0 h-0.5 bg-[#1f2937]" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative" ref={cardsRef}>
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative stagger-item ${cardsV?'visible':''}`} style={{transitionDelay:`${idx*120}ms`}}>
                <div className="hidden lg:flex absolute -top-[5px] left-6 z-10">
                  <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#0a0f1e]" />
                </div>
                <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-5 h-full hover:border-blue-500/30 transition-colors duration-300">
                  <p className="text-xs text-blue-400 font-medium mb-3">{exp.period}</p>
                  <h3 className="font-bold text-sm mb-1">{exp.title}</h3>
                  <p className="text-xs text-gray-400 mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-gray-400 leading-relaxed flex gap-2">
                        <span className="text-blue-400 shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
