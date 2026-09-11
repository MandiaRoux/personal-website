import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Showcase from './components/Showcase';
import Form from './components/Form';
import AvailabilityStatus from './components/AvailabilityStatus';
import { services, projects } from './content';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [activeSection, setActiveSection] = useState('services');
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const contactNameRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return undefined;

    if (!window.IntersectionObserver) {
      const updateStickyHeader = () => setIsHeaderSticky(hero.getBoundingClientRect().bottom <= 0);
      updateStickyHeader();
      window.addEventListener('scroll', updateStickyHeader, { passive: true });
      return () => window.removeEventListener('scroll', updateStickyHeader);
    }

    const observer = new IntersectionObserver(([entry]) => setIsHeaderSticky(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = ['services', 'work', 'about', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    function updateActiveSection() {
      const readingPosition = window.innerHeight * 0.35;
      const current = sections.reduce((active, section) => (
        section.getBoundingClientRect().top <= readingPosition ? section.id : active
      ), sectionIds[0]);
      setActiveSection(current);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  function startServiceEnquiry(serviceId) {
    setSelectedService(serviceId);
    window.history.pushState(null, '', '#contact');
    try {
      contactNameRef.current?.focus({ preventScroll: true });
    } catch {
      contactNameRef.current?.focus();
    }
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('contact')?.scrollIntoView?.({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  return (
    <>
      <div id="top" aria-hidden="true" />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation activeSection={activeSection} isSticky={isHeaderSticky} />
      <main id="main">
        <Hero />
        <section className="credibility-strip" aria-label="Professional experience">
          <div className="container">
            <ul>
              <li><strong>10+ years</strong><span>Software experience</span></li>
              <li><strong>Leadership</strong><span>Engineering &amp; product</span></li>
              <li><strong>Production</strong><span>React / Node / Laravel</span></li>
              <li><strong>Cape Town</strong><span>Remote worldwide</span></li>
            </ul>
          </div>
        </section>
        <section className="qualifier-section container" aria-labelledby="good-fit-title">
          <div className="qualifier-heading">
            <p className="eyebrow">Is this the right kind of help?</p>
            <h2 id="good-fit-title">Good fit if…</h2>
          </div>
          <ul className="qualifier-grid">
            <li>
              <span className="qualifier-marker" aria-hidden="true">01</span>
              <div><h3>You have a product already in production</h3><p>You need experienced engineering help without rebuilding everything from scratch.</p></div>
            </li>
            <li>
              <span className="qualifier-marker" aria-hidden="true">02</span>
              <div><h3>Your frontend has become difficult to change</h3><p>Features take longer than they should, regressions are appearing, or technical debt is accumulating.</p></div>
            </li>
            <li>
              <span className="qualifier-marker" aria-hidden="true">03</span>
              <div><h3>You have a contained technical project</h3><p>A React review, Node.js upgrade, testing initiative, integration, or frontend feature needs ownership.</p></div>
            </li>
            <li>
              <span className="qualifier-marker" aria-hidden="true">04</span>
              <div><h3>You need senior capacity temporarily</h3><p>Your team needs extra technical capacity without another permanent hire.</p></div>
            </li>
          </ul>
        </section>
        <section className="section container" id="services" aria-labelledby="services-title">
          <p className="eyebrow">01 / Services</p>
          <h2 id="services-title">A clearer path from idea to working product.</h2>
          <p className="section-intro">Practical engineering support for small businesses and product teams, wherever you are in the build.</p>
          <div className="card-grid">
            {services.map((service, index) => (
              <article className="card service-card" key={service.title}>
                <div className="service-meta">
                  <span className="card-number">0{index + 1}</span>
                  {service.label && <span className="service-badge">{service.label}</span>}
                </div>
                <h3>{service.title}</h3>
                <p className="service-problem">{service.problem}</p>
                <h4 className="service-label">What I’ll do</h4>
                <ul>{service.actions.map(action => <li key={action}>{action}</li>)}</ul>
                <p className="service-outcome"><strong>Outcome:</strong> {service.outcome}</p>
                <a className="text-link" href="#contact" onClick={event => { event.preventDefault(); startServiceEnquiry(service.id); }}>Tell me about the problem <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>
        <section className="section container" id="work" aria-labelledby="work-title">
          <p className="eyebrow">02 / Selected work</p>
          <h2 id="work-title">Experience behind the advice.</h2>
          <p className="section-intro">A selection of projects I’ve contributed to, from web applications to business websites.</p>
          <div className="project-grid">{projects.map(project => <Showcase key={project.title} {...project} />)}</div>
        </section>
        <section className="section container" id="process" aria-labelledby="process-title">
          <p className="eyebrow">03 / Working together</p>
          <h2 id="process-title">Understand. Agree. Build.</h2>
          <ol className="process-grid">
            <li><h3>Understand the problem</h3><p>We talk about the product, constraints, existing code, and desired outcome.</p></li>
            <li><h3>Define the engagement</h3><p>You receive a clear scope, assumptions, deliverables, timeline, and cost before work begins.</p></li>
            <li><h3>Build transparently</h3><p>Work moves in small increments with regular communication, demos, and documented decisions.</p></li>
            <li><h3>Handover cleanly</h3><p>Code, documentation, and recommendations remain with your team.</p></li>
          </ol>
        </section>
        <Profile />
        <section className="section container contact-grid" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">05 / Let’s talk</p>
            <h2 id="contact-title">What are you working on?</h2>
            <p className="section-intro">Share a little about your project, the help you need, and any timing you have in mind. We can work out whether there’s a fit.</p>
            <AvailabilityStatus className="contact-availability" />
            <p className="contact-email-cta">Prefer email? <a href="mailto:mandiaroux@gmail.com">mandiaroux@gmail.com</a></p>
            <p className="contact-reassurance">No polished brief required. A messy problem is a good place to start.</p>
            <p className="muted">Your enquiry is sent through Formspree. Please leave out passwords and confidential project information.</p>
          </div>
          <Form ref={contactNameRef} selectedService={selectedService} onServiceChange={setSelectedService} />
        </section>
      </main>
      <footer className="container footer"><span>© {new Date().getFullYear()} Mandia Roux</span><span>Cape Town, South Africa</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
