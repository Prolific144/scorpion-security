import { useEffect, useRef, useState } from 'react';
import { 
  Shield, LockKeyhole, MapPin, Phone, Mail, Menu, X, CheckCircle, 
  Video, Bell, Dog, Zap, Search, Truck, 
  CalendarCheck, ChartLine, HardHat, ClipboardList, ShoppingCart, 
  University, Building, Coins, Hospital, Home, Church, Clock, 
  Briefcase, Users, Headphones, Smile, Heart, Handshake, 
  ClipboardCheck, Moon, Wallet, BookOpen, PhoneCall, Star, 
  Scroll, ChevronRight, GitBranch, Gem, User, ShieldCheck, Lock
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div>
            <MapPin size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Thika, Kenya – PO Box 6483-01000
          </div>
          <div>
            <Phone size={14} style={{ display: 'inline', marginRight: '6px' }} />
            +254 794 214 514
            <span style={{ margin: '0 10px' }}>|</span>
            <Mail size={14} style={{ display: 'inline', marginRight: '6px' }} />
            scorpionguardltd@gmail.com
          </div>
        </div>
      </div>

      {/* Header */}
      <header style={{ boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.1)' : '0 4px 15px rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="logo-area">
            <h1>SCORPION <span>SECURITY</span> GUARDS</h1>
            <div className="tagline">
              <Shield size={14} />
              Integrity And Vigilance
            </div>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div 
            className="overlay" 
            style={{ 
              opacity: mobileMenuOpen ? 1 : 0, 
              visibility: mobileMenuOpen ? 'visible' : 'hidden'
            }} 
            onClick={() => setMobileMenuOpen(false)}
          />

          <nav style={{ right: mobileMenuOpen ? '0' : '-100%' }}>
            <ul>
              <li><a href="#home" onClick={handleNavClick}>Home</a></li>
              <li><a href="#about" onClick={handleNavClick}>About</a></li>
              <li><a href="#services" onClick={handleNavClick}>Services</a></li>
              <li><a href="#training" onClick={handleNavClick}>Training</a></li>
              <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h2>
            <LockKeyhole size={42} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            24/7 VIGILANCE, TOTAL PEACE OF MIND
          </h2>
          <p>Kenya's trusted security partner since 1976 · Duly incorporated under Companies Act CAP 486</p>
          <a href="#contact" className="btn">
            <Phone size={18} />
            REQUEST CONSULTATION
          </a>
        </div>
      </section>

      {/* History & Mission Section */}
      <section id="about" style={{ paddingTop: '60px' }}>
        <div className="container two-col">
          <div className="animate-on-scroll">
            <span className="motto-badge">
              <Scroll size={14} />
              EST. 1976
            </span>
            <h2 style={{ fontSize: '2rem', margin: '20px 0 16px', color: 'var(--primary-dark)', fontWeight: 700 }}>
              History & Background
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
              Formed in 1976 as a business name, later converted to a limited company. 
              Started in Nairobi, now providing quality security solutions nationwide. 
              We are duly registered under the Companies Act (Chapter 486, Laws of Kenya).
            </p>
            <p style={{ marginBottom: '10px' }}>
              <strong>MOTTO:</strong>{' '}
              <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>Integrity And Vigilance</span>
            </p>
            <p style={{ marginBottom: '10px' }}>
              <strong>MISSION:</strong>{' '}
              <span style={{ color: 'var(--text-muted)' }}>
                Total peace of mind – your security and wellbeing in the hands of a driven, excellence-focused team.
              </span>
            </p>
            <p>
              <strong>VISION:</strong>{' '}
              <span style={{ color: 'var(--text-muted)' }}>
                Excellence by never wavering from core values: integrity, vigilance, determination to protect and serve.
              </span>
            </p>
          </div>

          <div className="commitment-block animate-on-scroll animate-delay-1">
            <h3>
              <Zap size={22} style={{ color: 'var(--accent-gold)' }} />
              Our Task & Commitment
            </h3>
            <ul>
              <li>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)', marginRight: '12px', flexShrink: 0 }} />
                Regulate to zero per cent insecurity
              </li>
              <li>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)', marginRight: '12px', flexShrink: 0 }} />
                Protection of clients' properties
              </li>
              <li>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)', marginRight: '12px', flexShrink: 0 }} />
                Immediate liaison with civil police
              </li>
              <li>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)', marginRight: '12px', flexShrink: 0 }} />
                Incidents reduction & appropriate response
              </li>
              <li>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)', marginRight: '12px', flexShrink: 0 }} />
                Physical security surveys & recommendations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-secondary">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h3>Our Security Solutions</h3>
            <p>Comprehensive · Custom‑tailored · Cutting edge</p>
          </div>

          <div className="service-grid">
            {[
              { icon: ShieldCheck, title: 'Guarding Services', desc: 'Well trained, disciplined & motivated guards' },
              { icon: Video, title: 'CCTV Systems', desc: 'Surveillance & monitoring' },
              { icon: Bell, title: 'Intruder Alarms', desc: '24/7 alert systems' },
              { icon: Dog, title: 'Dog Patrol', desc: 'Handler‑assisted K9 units' },
              { icon: Zap, title: 'Electric Fencing', desc: 'Perimeter security' },
              { icon: User, title: 'Personal Protection', desc: 'Executive & group close protection' },
              { icon: Search, title: 'Investigation Services', desc: 'In‑depth & liaison with police' },
              { icon: Truck, title: 'Courier Services', desc: 'Secure transport' },
              { icon: CalendarCheck, title: 'Events Security', desc: 'Stadium, private & corporate events' },
              { icon: ChartLine, title: 'Security Consulting', desc: 'Local & international experience' },
              { icon: HardHat, title: 'Razor Wire Fence', desc: 'High‑security barrier' },
              { icon: ClipboardList, title: 'Operations & Deployment', desc: 'Supervised, radio‑linked response' },
            ].map((service, index) => (
              <div 
                key={index} 
                className={`card animate-on-scroll animate-delay-${(index % 4) + 1}`}
              >
                <service.icon size={36} />
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="dark-bg">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h3>Industries We Serve</h3>
          </div>

          <div className="badge-list animate-on-scroll animate-delay-1">
            {[
              { icon: ShoppingCart, label: 'Shopping centres' },
              { icon: University, label: 'Universities & Colleges' },
              { icon: Building, label: 'Commercial & real estates' },
              { icon: Coins, label: 'Financial institutions' },
              { icon: Hospital, label: 'Health institutions' },
              { icon: Home, label: 'Residential communities' },
              { icon: Church, label: 'Churches/Entertainment' },
            ].map((industry, index) => (
              <span key={index} className="badge">
                <industry.icon size={14} />
                {industry.label}
              </span>
            ))}
          </div>

          <p 
            className="animate-on-scroll animate-delay-2" 
            style={{ 
              textAlign: 'center', 
              marginTop: '35px', 
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.8)'
            }}
          >
            We carefully assess each client's unique requirements – matching skilled professionals to specific roles.
          </p>
        </div>
      </section>

      {/* Training Section */}
      <section id="training">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h3>Training & Professional Excellence</h3>
          </div>

          <div className="two-col">
            <div className="animate-on-scroll">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '18px', color: 'var(--primary-dark)' }}>
                Intensive security management training
              </h4>
              <ul style={{ columns: '2', columnGap: '25px', marginBottom: '20px' }}>
                {[
                  'Practical drills & discipline',
                  'Traffic & parking control',
                  'First aid & fire-fighting',
                  'Customer care / PR',
                  'Crime scene preservation',
                  'Surveillance & counter‑surveillance',
                  'Report writing & OB keeping',
                  'Emergency preparedness',
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '10px', fontSize: '0.95rem' }}>
                    <ChevronRight size={16} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Basic & advanced security training · Humanitarian & disaster relief operational training.
              </p>
            </div>

            <div className="animate-on-scroll animate-delay-1">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '18px', color: 'var(--primary-dark)' }}>
                <Shield size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)' }} />
                Uniform & equipment
              </h4>
              <div className="equipment-list">
                {['2 pairs uniform', '2 T‑shirts', 'Boots', 'Rain coat', 'Torch', 'Whistle', 'Truncheon', 'Barrett hat/cap'].map((item, index) => (
                  <span key={index} className="equip-item">{item}</span>
                ))}
              </div>
              <p 
                className="equip-item" 
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  marginTop: '16px',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}
              >
                All guards equipped with practical, durable uniform and sporting kits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Approach & Values */}
      <section className="bg-secondary">
        <div className="container">
          <div className="two-col">
            <div className="animate-on-scroll">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--primary-dark)' }}>
                <GitBranch size={22} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
                Project approach
              </h3>
              <ul>
                {[
                  'Overall evaluation of operational requirements',
                  'Preparation & delivery of proposal',
                  'Contractual arrangement',
                  'Thorough project plan & agreement',
                  'Deployment & completion',
                  'Renewal or withdrawal upon expiry',
                ].map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-on-scroll animate-delay-1">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--primary-dark)' }}>
                <Gem size={22} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
                Our core values
              </h3>
              <div className="value-grid">
                {[
                  { icon: Briefcase, label: 'Professionalism' },
                  { icon: Users, label: 'Team work (Kaizen)' },
                  { icon: Headphones, label: 'Communication 24/7' },
                  { icon: Smile, label: 'Customer satisfaction' },
                  { icon: Heart, label: 'Passion & innovation' },
                  { icon: Handshake, label: 'Integrity (honest, ethical)' },
                ].map((value, index) => (
                  <div key={index}>
                    <value.icon size={18} />
                    {value.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section>
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h3>Operational Excellence</h3>
          </div>

          <div className="feature-cards">
            {[
              { 
                icon: ClipboardCheck, 
                title: 'Security survey/audit', 
                desc: 'Mapping strategic areas – exact number & calibre of guards (male/female/handler).' 
              },
              { 
                icon: Moon, 
                title: '24/7 duty officer & supervision', 
                desc: 'Supervisors perform 24hr patrol, two visits per 12hr shift. Senior managers do impromptu spot checks.' 
              },
              { 
                icon: Wallet, 
                title: 'Guard welfare & remuneration', 
                desc: 'Well paid, 4 days off per month. Morale boosts service. Replacement/standby guard if sick.' 
              },
              { 
                icon: BookOpen, 
                title: 'Occurrence Book (OB)', 
                desc: 'All incidents recorded; direct police liaison & investigation officers on call.' 
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card animate-on-scroll animate-delay-${index + 1}`}
              >
                <feature.icon size={32} />
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Protection */}
      <section className="dark-bg">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <h3>Specialized Protection & Consulting</h3>
          </div>

          <div className="two-col">
            <div className="animate-on-scroll">
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '14px', fontSize: '1.15rem' }}>
                Personal & events security
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '20px' }}>
                Close protection for managers, engineers, any employee. Kidnap & assault prevention. 
                Event security: small gatherings to stadiums – emergency plans, evacuation, mobile HQ.
              </p>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '14px', fontSize: '1.15rem' }}>
                Fire fighting & first aid
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                Fire safety training (theory & conduct) and first aid courses for private persons & company employees.
              </p>
            </div>

            <div className="animate-on-scroll animate-delay-1">
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '14px', fontSize: '1.15rem' }}>
                Security consulting
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                From planning to deployment & re-deployment. Handled by well-trained consultants with 
                local & international experience. Fully customized to client's line of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Commitments */}
      <section>
        <div className="container">
          <div 
            className="commitment-block animate-on-scroll" 
            style={{ 
              background: 'rgba(212, 160, 23, 0.05)', 
              border: '2px solid rgba(212, 160, 23, 0.15)' 
            }}
          >
            <div className="two-col" style={{ gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--primary-dark)' }}>
                  <PhoneCall size={20} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
                  WITH SCORPION YOU HAVE ACCESS TO:
                </h3>
                <ul>
                  {[
                    { icon: Clock, text: '24Hrs emergency officers' },
                    { icon: Search, text: 'In-depth investigation & civil police liaison' },
                    { icon: User, text: 'General Manager, Operations Manager, Branch Manager, Senior Supervisors' },
                    { icon: ShieldCheck, text: 'Replacement / standby guard if regular is sick' },
                  ].map((item, index) => (
                    <li key={index}>
                      <item.icon size={18} style={{ color: 'var(--accent-gold)' }} />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--primary-dark)' }}>
                  <Star size={20} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
                  OUR COMMITMENTS
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                  Committed to service quality through continuous improvement. We value our clients as 
                  key to our success – responsible to their sentiments and wishes.
                </p>
                <p style={{ marginBottom: '10px' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-gold)', marginRight: '10px' }} />
                  100% client satisfaction inspiration
                </p>
                <p>
                  <CheckCircle size={16} style={{ color: 'var(--accent-gold)', marginRight: '10px' }} />
                  Integrity, vigilance, determination to protect and serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div>
            <h5>SCORPION SECURITY GUARDS LTD</h5>
            <p>
              <Shield size={16} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)' }} />
              Integrity And Vigilance
            </p>
            <p>Duly incorporated in Kenya (CAP 486). Providing quality security services nationwide since 1976.</p>
            <p style={{ marginTop: '16px' }}>
              <Phone size={16} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
              +254 794 214 514<br />
              <Mail size={16} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
              scorpionguardltd@gmail.com<br />
              <MapPin size={16} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
              PO Box 6483-01000 THIKA, KENYA
            </p>
          </div>

          <div>
            <h5>Quick links</h5>
            <ul>
              {[
                { href: '#services', label: 'Our Services' },
                { href: '#training', label: 'Training' },
                { href: '#about', label: 'Core Values' },
                { href: '#home', label: 'Leadership' },
                { href: '#contact', label: 'Emergency contacts' },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href}>
                    <ChevronRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>24/7 SUPPORT</h5>
            <p>
              Emergency response & duty officer always on call. Direct link to civil police resources. 
              Supervision 24hrs with radio-communication vehicles.
            </p>
            <p style={{ marginTop: '20px' }}>
              <Lock size={16} style={{ display: 'inline', marginRight: '10px', color: 'var(--accent-gold)' }} />
              "Total peace of mind – your security is our inspiration"
            </p>
          </div>
        </div>

        <div className="container copyright">
          <p>© 2025 Scorpion Security Guards Ltd – All rights reserved. | Designed with integrity & vigilance</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
