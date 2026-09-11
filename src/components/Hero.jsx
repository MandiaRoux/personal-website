import React from 'react';
import saturn from '../assets/svg/saturn.svg';
import AvailabilityStatus from './AvailabilityStatus';

export default function Hero() {
  return (
    <section className="hero container" id="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Frontend &amp; product engineering consultant</p>
        <h1 id="hero-title">Thoughtful code.<br /><span>Useful digital experiences.</span></h1>
        <p className="hero-intro">For product teams and growing businesses that need clearer interfaces, safer upgrades, and reliable releases—across React, frontend systems, Node.js, and automated testing.</p>
        <div className="hero-actions">
          <a className="button" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#work">View selected work</a>
        </div>
        <AvailabilityStatus className="hero-availability" />
        <ul className="hero-proof" aria-label="Consulting focus">
          <li>React &amp; frontend</li>
          <li>Node.js modernisation</li>
          <li>Automated testing</li>
          <li>Cape Town / remote</li>
        </ul>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><img src={saturn} alt="" width="360" height="360" /><span className="star star-one">+</span><span className="star star-two">+</span><span className="orbit-caption">A little curiosity goes a long way.</span></div>
    </section>
  );
}
