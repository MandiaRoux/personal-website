import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Showcase from './components/Showcase';
import Form from './components/Form';
import { services, projects } from './content';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <section className="section container" id="services" aria-labelledby="services-title">
          <p className="eyebrow">01 / Services</p>
          <h2 id="services-title">A clearer path from idea to working product.</h2>
          <p className="section-intro">Practical engineering support for small businesses and product teams, wherever you are in the build.</p>
          <div className="card-grid">
            {services.map((service, index) => (
              <article className="card service-card" key={service.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.audience}</p>
                <ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
                <p className="engagement">{service.engagement}</p>
                <a className="text-link" href="#contact">Discuss this service <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>
        <section className="section container" id="work" aria-labelledby="work-title">
          <p className="eyebrow">02 / Selected work</p>
          <h2 id="work-title">Experience behind the advice.</h2>
          <p className="section-intro">A selection of projects I’ve contributed to, from web applications to business websites.</p>
          <div className="card-grid">{projects.map(project => <Showcase key={project.title} {...project} />)}</div>
        </section>
        <section className="section container" id="process" aria-labelledby="process-title">
          <p className="eyebrow">03 / Working together</p>
          <h2 id="process-title">Understand. Agree. Build.</h2>
          <ol className="process-grid">
            <li><h3>Start with the problem</h3><p>Tell me what you’re building, what’s getting in the way, and what a useful result looks like.</p></li>
            <li><h3>Define the work</h3><p>We agree on scope, deliverables, timing, and fees before work begins.</p></li>
            <li><h3>Make progress together</h3><p>Work moves forward with regular check-ins, feedback, and a clear handover of what’s been delivered.</p></li>
          </ol>
        </section>
        <Profile />
        <section className="section container contact-grid" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">05 / Let’s talk</p>
            <h2 id="contact-title">What are you working on?</h2>
            <p className="section-intro">Share a little about your project, the help you need, and any timing you have in mind. We can work out whether there’s a fit.</p>
            <p className="muted">Your enquiry is sent through Formspree. Please leave out passwords and confidential project information.</p>
          </div>
          <Form />
        </section>
      </main>
      <footer className="container footer"><span>© {new Date().getFullYear()} Mandia Roux</span><span>Cape Town, South Africa</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
