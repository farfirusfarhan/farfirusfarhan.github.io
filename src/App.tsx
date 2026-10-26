import React, { useState } from 'react';
import { 
  Server, 
  Network, 
  HardDrive, 
  Monitor, 
  Mail, 
  MapPin, 
  Download, 
  ChevronRight, 
  Settings, 
  Shield, 
  Activity,
  Link as LinkIcon
} from 'lucide-react';

const App = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const skills = [
    {
      category: "Virtualization",
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
      items: ["VMware ESXi", "vSphere", "vCenter Server", "VM deployment", "vMotion", "High Availability (HA)", "Shared storage integration"]
    },
    {
      category: "Server Administration",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      items: ["Lenovo enterprise servers", "RAID configuration", "Hardware deployment", "Server maintenance"]
    },
    {
      category: "Networking",
      icon: <Network className="w-6 h-6 text-blue-400" />,
      items: ["VLAN", "IP addressing", "Routing & Switching", "Network troubleshooting", "Allied Telesis", "Cisco"]
    },
    {
      category: "Operating Systems",
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      items: ["Windows Server", "Red Hat Enterprise Linux (RHEL)", "SUSE Linux", "Ubuntu Linux", "SSH"]
    },
    {
      category: "Storage",
      icon: <HardDrive className="w-6 h-6 text-blue-400" />,
      items: ["SAN", "Fibre Channel", "LUN provisioning", "Shared datastores", "Storage connectivity"]
    },
    {
      category: "IT Infrastructure",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      items: ["Installation & Commissioning", "Preventive maintenance", "Incident troubleshooting", "Technical documentation"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "VMware Virtualization Infrastructure",
      role: "System Engineer",
      tech: ["VMware ESXi", "vCenter", "vMotion", "SAN"],
      overview: "Deployed VMware ESXi and vCenter Server for enterprise environments.",
      details: [
        "Configured a high-availability cluster for two ESXi hosts.",
        "Set up vMotion and integrated a shared SAN datastore.",
        "Planned and implemented VLANs, IP addressing, and host connectivity.",
        "Documented implementation results and validated system functionality."
      ],
      imageUrl: "/assets/VCSA.png" 
    },
    {
      id: 2,
      title: "Enterprise SAN Storage Integration",
      role: "Infrastructure Engineer",
      tech: ["IBM SAN", "Fibre Channel", "ESXi", "LUN"],
      overview: "Integrated IBM SAN storage with ESXi hosts via Fibre Channel.",
      details: [
        "Provisioned and mapped shared LUNs across multiple hosts.",
        "Created datastores and validated storage access performance.",
        "Documented configurations and troubleshooting steps."
      ],
      imageUrl: "/assets/SAN.png"
    },
    {
      id: 3,
      title: "Enterprise Network Configuration",
      role: "Network Engineer",
      tech: ["Allied Telesis", "VLAN", "Routing", "Switching"],
      overview: "Configured VLANs and switching utilizing Allied Telesis equipment.",
      details: [
        "Configured IP interfaces and inter-network connectivity.",
        "Verified connectivity using ping, ARP, routing tables, and MAC address tables.",
        "Documented issues, root cause analysis, and resolution processes."
      ],
      imageUrl: "/assets/Network.png"
    },
    {
      id: 4,
      title: "Linux and Windows Server Administration",
      role: "System Administrator",
      tech: ["Windows Server", "RHEL", "Ubuntu", "SSH"],
      overview: "Installed and configured server operating systems for business services.",
      details: [
        "Configured SSH access for secure remote administration.",
        "Audited network configurations, storage, services, and drivers.",
        "Documented the deployment and troubleshooting procedures."
      ],
      imageUrl: "/assets/Linux.png"
    }
  ];

  const experiences = [
    {
      company: "PT. XDC Indonesia (CTI Group)",
      position: "Pre Sales Engineer & IT Support",
      period: "Nov 2025 - Present",
      responsibilities: [
        "Analyzing customer requirements and recommending suitable IT infrastructure solutions.",
        "Preparing technical proposals, Bills of Quantities (BoQ), and product recommendations.",
        "Installing, configuring, and commissioning networking equipment, servers, CCTV systems, and end-user devices.",
        "Configuring hardware and software RAID on enterprise servers.",
        "Performing on-site and remote troubleshooting.",
        "Providing technical presentations, proof of concept (PoC), maintenance, and user training.",
        "Coordinating warranty claims and technical escalations with vendors."
      ]
    },
    {
      company: "Direktorat Pengelolaan Kampus IPB Sukabumi",
      position: "IT Staff (IT & Network Administrator)",
      period: "Feb 2021 - Oct 2025",
      responsibilities: [
        "Designed and deployed comprehensive internet network topologies across the campus.",
        "Implemented bandwidth management and traffic shaping using MikroTik.",
        "Installed, maintained, and troubleshooted network infrastructure including switches, routers, and access points.",
        "Provided hardware and software support for laboratory devices and employee systems."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-wider">FARHAN<span className="text-blue-500">.</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Hi, I'm Farhan Firdaus.
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-8">
            System Engineer | IT Infrastructure | Virtualization & Networking
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
            IT professional with expertise in designing, implementing, configuring, and troubleshooting enterprise IT infrastructure. Focused on server administration, VMware virtualization, and network optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
              <Activity className="w-5 h-5" />
              View My Projects
            </a>
            <a href="/CV_Farhan.pdf" download="CV_Farhan.pdf" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Professional Summary
          </h3>
          <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed">
            <p className="mb-4">
              IT professional with over 5 years of hands-on experience in IT infrastructure, specializing in server deployment, virtualization, and network administration. Proven track record in translating customer requirements into reliable, cost-effective enterprise solutions.
            </p>
            <p>
              My expertise spans across configuring VMware virtual environments (ESXi, vCenter), administering enterprise servers (Lenovo, Windows, Linux), integrating shared storage (SAN), and deploying robust network configurations (Allied Telesis, Cisco). I am dedicated to delivering high-quality technical implementation, preventive maintenance, and responsive troubleshooting to ensure optimal system performance and business continuity.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{skill.category}</h4>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Featured Implementations
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-blue-400 font-medium mb-4">{project.role}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-300 mb-6">{project.overview}</p>

                  <button 
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="text-blue-400 font-medium flex items-center gap-2 hover:text-blue-300 transition-colors"
                  >
                    {activeProject === project.id ? 'Hide Details' : 'View Implementation Details'}
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeProject === project.id ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Expandable Details */}
                  {activeProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-slate-800 animate-in slide-in-from-top-4">
                      <h5 className="font-semibold text-white mb-4">Implementation Steps:</h5>
                      <ul className="space-y-3 mb-6">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {project.imageUrl ? (
                        <div className="mt-4 rounded-lg overflow-hidden border border-slate-700 shadow-lg">
                          <img 
                            src={project.imageUrl} 
                            alt={`Architecture Diagram for ${project.title}`} 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ) : (
                        <div className="mt-4 p-8 bg-slate-800/50 rounded-lg border border-slate-700/50 border-dashed flex items-center justify-center text-slate-500 text-sm text-center">
                          <span>[Placeholder]<br/>Attach Topology Diagram / Configuration Screenshot</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - (Fixed Layout) */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Professional Experience
          </h3>
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Date Side */}
                <div className="md:w-1/4 shrink-0 md:text-right pt-1">
                  <span className="text-slate-400 font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                
                {/* Content Side with solid structural border */}
                <div className="md:w-3/4 relative border-l-2 border-slate-800 pl-6 md:pl-8 pb-4">
                  {/* Timeline Dot positioned relative to the border */}
                  <div className="absolute w-4 h-4 bg-slate-900 border-2 border-blue-500 rounded-full -left-[9px] top-1.5"></div>
                  
                  <h4 className="text-xl font-bold text-white mb-1">{exp.position}</h4>
                  <p className="text-blue-400 font-medium mb-6">{exp.company}</p>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <ChevronRight className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-800/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Certifications & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Lenovo - Field Service Core (2026)",
              "Coursera Professional - IT Support Google (2022)",
              "Dicoding - Baparekraf Digital Talent Program (2022)",
              "Skill Academy - Learn to Manage Computer Networks (2023)",
              "Cisco Networking Academy - CCNA Routing and Switching (2018)",
              "Cisco Networking Academy - IT Essentials (2018)"
            ].map((cert, i) => (
              <div key={i} className="p-4 bg-slate-900 rounded-lg border border-slate-700 flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-slate-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Let's Build Infrastructure Together</h3>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Currently open for System Engineer / IT Infrastructure Engineer opportunities. 
            Feel free to reach out for discussions regarding IT solutions, infrastructure deployment, or career opportunities.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a href="mailto:farfirusfarhan@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
              <span>farfirusfarhan@gmail.com</span>
            </a>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            <a href="https://linkedin.com/in/farfirusfarhan" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
              <LinkIcon className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-6 h-6" />
              <span>West Java, Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Farhan Firdaus. All rights reserved.</p>
        <p className="mt-2">Designed for IT Infrastructure Portfolio.</p>
      </footer>
    </div>
  );
};

export default App;