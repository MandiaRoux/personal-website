import React from 'react';

export default function Showcase({ title, context, contribution, delivered, tags, link }) {
  return (
    <article className="card project-card">
      <p className="eyebrow">{context}</p>
      <h3>{title}</h3>
      <p>{contribution}</p>
      <h4>Work delivered</h4>
      <p>{delivered}</p>
      <ul className="tags" aria-label="Technologies">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      {link && <a className="text-link" href={link} target="_blank" rel="noopener noreferrer">Visit {title} <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>}
    </article>
  );
}
