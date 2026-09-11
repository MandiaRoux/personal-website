import React from 'react';

export default function Navigation() {
  return (
    <header className="site-header container" id="top">
      <a href="#top" className="brand" aria-label="Mandia Roux home"><span className="brand-symbol" aria-hidden="true">✳</span> Mandia Roux<span className="brand-dot">.</span></a>
      <nav aria-label="Main navigation">
        <a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
