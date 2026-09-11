import React from 'react';

export default function Showcase({ title, productType, context, role, delivered, result, tags, link }) {
  return (
    <article className="card project-card">
      <p className="project-label">Client / product type</p>
      <p className="project-type">{productType}</p>
      <h3>{title}</h3>
      <p className="project-context">{context}</p>
      <h4>My role</h4>
      <p>{role}</p>
      <h4>Work delivered</h4>
      <ul className="project-deliverables">{delivered.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="project-result"><h4>Result</h4><p>{result}</p></div>
      <h4 className="stack-label">Stack</h4>
      <ul className="tags" aria-label="Technology stack">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      {link && <a className="text-link" href={link} target="_blank" rel="noopener noreferrer">View product <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>}
    </article>
  );
}
