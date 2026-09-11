import React from 'react';
import picture from '../assets/img/Me.jpeg';

export default function Profile() {
  return (
    <section className="section container about-grid" id="about" aria-labelledby="about-title">
      <img className="portrait" src={picture} alt="Portrait of Mandia Roux, software consultant and engineering leader" width="280" height="280" loading="lazy" />
      <div>
        <p className="eyebrow">04 / The person behind the work</p>
        <h2 id="about-title">About me</h2>
        <p>I’m a software consultant and engineering leader based in Cape Town, South Africa. I help teams turn complex product needs into clear, reliable digital experiences.</p>
        <p>I’ve worked across engineering, product, and delivery, which means I care about more than whether the code works. I pay attention to the problem being solved, the people maintaining it, and what actually needs to ship.</p>
        <p className="muted">Away from the keyboard, you’ll find me gaming, gardening, or playing Magic: the Gathering.</p>
        <ul className="expertise-row" aria-label="Areas of expertise">
          <li>Product, engineering &amp; delivery</li>
          <li>React &amp; frontend systems</li>
          <li>Node.js &amp; Laravel</li>
          <li>Testing &amp; quality</li>
        </ul>
      </div>
    </section>
  );
}
