import React from 'react';
import picture from '../assets/img/Me.jpeg';

export default function Profile() {
  return (
    <section className="section container about-grid" id="about" aria-labelledby="about-title">
      <img className="portrait" src={picture} alt="Mandia Roux" width="280" height="280" loading="lazy" />
      <div>
        <p className="eyebrow">04 / The person behind the work</p>
        <h2 id="about-title">About me</h2>
        <p>I’m a frontend engineer based in Cape Town, South Africa. I enjoy turning complex problems into simple, intuitive interfaces.</p>
        <p>My experience spans startup and agency teams, working with existing products, integrations, and delivery deadlines. I bring that practical perspective to consulting work.</p>
        <p className="muted">Away from the keyboard, you’ll find me gaming, gardening, or playing Magic: the Gathering.</p>
      </div>
    </section>
  );
}
