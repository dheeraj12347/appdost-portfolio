import { useState, useEffect, useRef } from 'react'

// ==================== NAVBAR COMPONENT ====================
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <i className="fas fa-code me-2"></i>AppDost
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection('home')}>Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection('about')}>About</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection('services')}>Services</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection('projects')}>Projects</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection('contact')}>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// ==================== HERO COMPONENT ====================
const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <h1 className="hero-title">
              Transform Your<br/>
              <span className="gradient-text">Ideas Into Digital</span><br/>
              Reality
            </h1>
            <p className="hero-subtitle">
              Your trusted partner for comprehensive IT solutions. We bring innovation, creativity, and excellence to every project since 2025.
            </p>
            <button className="cta-button" onClick={() => scrollToSection('contact')}>
              Get Started <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center">
              <i className="fas fa-laptop-code hero-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== STATS COMPONENT ====================
const Stats = () => {
  const [counts, setCounts] = useState({ projects: 0, apps: 0, crm: 0, founded: 0 });
  const [animated, setAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current && !animated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setAnimated(true);
          animateCounters();
        }
      }
    };

    const animateCounters = () => {
      const targets = { projects: 10, apps: 4, crm: 1, founded: 2025 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCounts({
          projects: Math.floor(targets.projects * progress),
          apps: Math.floor(targets.apps * progress),
          crm: Math.floor(targets.crm * progress),
          founded: Math.floor(targets.founded * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, interval);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="stat-card reveal">
              <div className="stat-number">{counts.projects}+</div>
              <div className="stat-label">Web Projects</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="stat-card reveal">
              <div className="stat-number">{counts.apps}+</div>
              <div className="stat-label">Android Apps</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="stat-card reveal">
              <div className="stat-number">{counts.crm}+</div>
              <div className="stat-label">CRM Solutions</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="stat-card reveal">
              <div className="stat-number">{counts.founded}</div>
              <div className="stat-label">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT COMPONENT ====================
const About = () => {
  const features = [
    { icon: 'fa-check-circle', title: 'Quality First', color: '#667eea' },
    { icon: 'fa-bolt', title: 'Fast Delivery', color: '#f093fb' },
    { icon: 'fa-shield-alt', title: 'Secure Solutions', color: '#4facfe' },
    { icon: 'fa-headset', title: '24/7 Support', color: '#43e97b' }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title reveal">
          About <span className="gradient-text">AppDost</span>
        </h2>
        <p className="section-subtitle reveal">Complete IT Solution Provider Since 2025</p>
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0 reveal">
            <p className="about-text">
              AppDost is your comprehensive IT solution partner, dedicated to transforming innovative ideas into powerful digital realities. We specialize in web development, mobile applications, cloud solutions, and cutting-edge cybersecurity services.
            </p>
            <p className="about-text">
              Our team of expert developers and designers work tirelessly to deliver world-class solutions that drive business growth and exceed expectations. With a commitment to excellence and innovation, we're here to be your trusted technology partner.
            </p>
            <div className="mt-4">
              <button className="btn btn-outline-primary me-3">
                <i className="fas fa-download me-2"></i>Company Profile
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-play me-2"></i>Watch Video
              </button>
            </div>
          </div>
          <div className="col-lg-6 reveal">
            <div className="row">
              {features.map((item, index) => (
                <div key={index} className="col-6 mb-3">
                  <div className="feature-card">
                    <i className={`fas ${item.icon}`} style={{ color: item.color }}></i>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SERVICES COMPONENT ====================
const Services = () => {
  const services = [
    {
      icon: 'fa-mobile-alt',
      title: 'Android Development',
      desc: 'Build powerful, scalable Android applications with cutting-edge features and seamless user experiences. Native and cross-platform solutions tailored to your needs.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: 'fa-code',
      title: 'Web Development',
      desc: 'Create stunning, responsive websites and web applications using modern frameworks and technologies. From simple landing pages to complex enterprise solutions.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: 'fa-paint-brush',
      title: 'UI/UX Design',
      desc: 'Design beautiful, intuitive interfaces that users love. Our designs combine aesthetics with functionality for optimal user engagement and satisfaction.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'fa-chart-line',
      title: 'CRM Solutions',
      desc: 'Streamline your business operations with custom CRM systems. Manage customer relationships, sales pipelines, and business processes efficiently.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Solutions',
      desc: 'Leverage the power of cloud computing with AWS, Azure, and Google Cloud. Scalable, secure, and cost-effective infrastructure for your applications.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: 'fa-lock',
      title: 'Cybersecurity',
      desc: 'Protect your digital assets with comprehensive security solutions. Penetration testing, security audits, and implementation of best security practices.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title reveal">
          Our <span className="gradient-text">Services</span>
        </h2>
        <p className="section-subtitle reveal">Comprehensive Solutions for Your Digital Needs</p>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="service-card reveal">
                <div className="service-icon-wrapper" style={{ background: service.gradient }}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <a href="#contact" className="service-link">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PROCESS COMPONENT ====================
const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Planning',
      desc: 'We begin by understanding your business goals, target audience, and project requirements. Through detailed discussions and research, we create a comprehensive project roadmap.',
      icon: 'fa-lightbulb'
    },
    {
      num: '02',
      title: 'Design & Prototyping',
      desc: 'Our design team creates wireframes and interactive prototypes, ensuring the user experience is intuitive and visually appealing before development begins.',
      icon: 'fa-pencil-ruler'
    },
    {
      num: '03',
      title: 'Development & Testing',
      desc: 'Using agile methodology, we develop your solution with clean, maintainable code. Rigorous testing ensures quality, performance, and security at every stage.',
      icon: 'fa-code'
    },
    {
      num: '04',
      title: 'Launch & Support',
      desc: 'After final testing and approval, we deploy your project. Our support doesn\'t end there—we provide ongoing maintenance and updates to ensure continued success.',
      icon: 'fa-rocket'
    }
  ];

  return (
    <section className="section process-section">
      <div className="container">
        <h2 className="section-title reveal">
          Development <span className="gradient-text">Process</span>
        </h2>
        <p className="section-subtitle reveal">Our Streamlined Approach to Project Success</p>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="process-step reveal">
                <div className="step-number">{step.num}</div>
                <div className="step-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PROJECTS COMPONENT ====================
const Projects = () => {
  const featuredProjects = [
    {
      icon: 'fa-graduation-cap',
      title: 'BEU Mate',
      desc: 'A comprehensive student companion app for BEU students featuring attendance tracking, study materials, exam schedules, and campus updates.',
      tags: ['Android', 'Firebase', 'Material UI'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '#'
    },
    {
      icon: 'fa-code',
      title: 'Devskillquest',
      desc: 'An interactive learning platform for developers with coding challenges, tutorials, and skill assessments to enhance programming expertise.',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '#'
    },
    {
      icon: 'fa-heart',
      title: 'The Weddings Chapter',
      desc: 'A beautiful wedding planning platform connecting couples with vendors, featuring venue booking, budget planning, and guest management.',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: '#'
    }
  ];

  const openSourceProjects = [
    {
      title: 'DeepFake Detection',
      desc: 'Advanced AI-powered tool for detecting deepfake videos and images using machine learning algorithms and computer vision techniques.',
      tags: ['Python', 'TensorFlow', 'OpenCV'],
      stars: 245,
      forks: 67
    },
    {
      title: 'NooBot',
      desc: 'An intelligent chatbot framework with natural language processing capabilities, customizable responses, and multi-platform integration.',
      tags: ['Node.js', 'NLP', 'Express'],
      stars: 189,
      forks: 43
    },
    {
      title: 'EduTools',
      desc: 'A comprehensive suite of educational tools for teachers and students including assignment management, grade tracking, and online collaboration features.',
      tags: ['React', 'Django', 'PostgreSQL'],
      stars: 312,
      forks: 89
    },
    {
      title: 'DialogFlow Chatbot',
      desc: 'Pre-built chatbot templates using Google\'s DialogFlow with industry-specific conversation flows and easy customization options.',
      tags: ['DialogFlow', 'JavaScript', 'Firebase'],
      stars: 156,
      forks: 38
    }
  ];

  return (
    <>
      {/* Featured Projects */}
      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title reveal">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle reveal">Showcasing Our Best Work</p>
          <div className="row">
            {featuredProjects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="project-card reveal">
                  <div className="project-image" style={{ background: project.gradient }}>
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} className="project-link">
                      View Project <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="section opensource-section">
        <div className="container">
          <h2 className="section-title reveal">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <p className="section-subtitle reveal">Building for the Community</p>
          <div className="row">
            {openSourceProjects.map((project, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="opensource-card reveal">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h3 className="project-title">
                      <i className="fab fa-github me-2"></i>
                      {project.title}
                    </h3>
                    <div className="github-stats">
                      <span className="stat-badge">
                        <i className="fas fa-star"></i> {project.stars}
                      </span>
                      <span className="stat-badge ms-2">
                        <i className="fas fa-code-branch"></i> {project.forks}
                      </span>
                    </div>
                  </div>
                  <p className="project-description">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ==================== CONTACT COMPONENT ====================
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.subject && formData.message) {
      setFormStatus({
        type: 'success',
        message: `✅ Thank you for your message, ${formData.name}! We have received your inquiry and will get back to you within 24 hours at ${formData.email}.`
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    } else {
      setFormStatus({
        type: 'error',
        message: '⚠️ Please fill in all required fields marked with *'
      });

      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email Address',
      details: ['hr@appdost.in', 'info@appdost.in']
    },
    {
      icon: 'fa-phone',
      title: 'Phone Number',
      details: ['+91 98765 43210', 'Mon - Sat: 9:00 AM - 6:00 PM IST']
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Office Location',
      details: ['Bihar, India', 'Complete IT Solutions Hub']
    },
    {
      icon: 'fa-clock',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 5:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title reveal">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle reveal">Let's Transform Your Ideas Into Reality</p>
        
        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-5 mb-4">
            <div className="contact-info-card reveal">
              <h3 className="contact-card-title">
                <i className="fas fa-info-circle me-2"></i>
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    <i className={`fas ${info.icon}`}></i>
                  </div>
                  <div className="contact-details">
                    <h5>{info.title}</h5>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-4">
                <h5 className="mb-3">Follow Us</h5>
                <div className="social-links">
                  {['facebook-f', 'twitter', 'linkedin-in', 'github', 'instagram'].map((icon, i) => (
                    <a key={i} href="#" className="social-link">
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card reveal">
              <h3 className="contact-card-title">
                <i className="fas fa-paper-plane me-2"></i>
                Send Us a Message
              </h3>

              {formStatus.message && (
                <div className={`alert alert-${formStatus.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
                  {formStatus.message}
                  <button type="button" className="btn-close" onClick={() => setFormStatus({ type: '', message: '' })}></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="cta-button w-100">
                  Send Message <i className="fas fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER COMPONENT ====================
const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <i className="fas fa-code me-2"></i>AppDost
            </h3>
            <p className="footer-text">
              Complete IT Solution Provider transforming ideas into digital reality since 2025.
            </p>
            <div className="social-links mt-3">
              {['facebook-f', 'twitter', 'linkedin-in', 'github', 'instagram'].map((icon, i) => (
                <a key={i} href="#" className="social-link">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            {footerLinks.map((link, i) => (
              <p key={i} className="footer-link" onClick={() => scrollToSection(link.id)}>
                <i className="fas fa-angle-right me-2"></i>{link.name}
              </p>
            ))}
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <p className="footer-text">
              <i className="fas fa-envelope me-2"></i>
              hr@appdost.in
            </p>
            <p className="footer-text">
              <i className="fas fa-phone me-2"></i>
              +91 98765 43210
            </p>
            <p className="footer-text">
              <i className="fas fa-map-marker-alt me-2"></i>
              Bihar, India
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 AppDost. All rights reserved. | Made with <i className="fas fa-heart text-danger"></i> by AppDost Team</p>
        </div>
      </div>
    </footer>
  );
};

// ==================== MAIN APP COMPONENT ====================
function App() {
  useEffect(() => {
    // Scroll reveal animation
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <div className="animated-bg"></div>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App
