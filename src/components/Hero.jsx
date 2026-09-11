import React from 'react';
import saturn from '../assets/svg/saturn.svg';

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Independent software consulting</p>
        <h1 id="hero-title">Thoughtful code.<br /><span>Useful digital experiences.</span></h1>
        <p className="hero-intro">I’m Mandia Roux. I help businesses and product teams build better web interfaces, upgrade Node.js applications, and ship with confidence through automated testing.</p>
        <div className="hero-actions">
          <a className="button" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#work">Explore my work</a>
        </div>
        <p className="hero-note">Based in Cape Town · Frontend, Node.js & automated testing</p>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><img src={saturn} alt="" width="360" height="360" /><span className="star star-one">+</span><span className="star star-two">+</span><span className="orbit-caption">A little curiosity goes a long way.</span></div>
    </section>
  );
}
