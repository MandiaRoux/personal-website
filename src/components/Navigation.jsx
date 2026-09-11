import React, { useEffect, useState } from 'react';

export default function Navigation({ activeSection, isSticky }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    if (menuOpen) document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const navigationItems = [
    ['services', 'Services'],
    ['work', 'Work'],
    ['about', 'About'],
    ['contact', 'Let’s talk'],
  ];

  return (
    <header className={`site-header container ${isSticky ? 'site-header--sticky' : ''}`}>
      <a href="#top" className="brand" aria-label="Mandia Roux home"><span className="brand-symbol" aria-hidden="true">✳</span> Mandia Roux<span className="brand-dot">.</span></a>
      <button className="nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(open => !open)}>
        Menu <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
      </button>
      <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
        {navigationItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={id === 'contact' ? 'nav-contact' : ''} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>
            {label}{id === 'contact' && <span aria-hidden="true"> ↗</span>}
          </a>
        ))}
      </nav>
    </header>
  );
}
