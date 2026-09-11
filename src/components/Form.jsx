import React, { useRef, useState } from 'react';
import { services } from '../content';

export default function Form() {
  const [status, setStatus] = useState('');
  const submitting = useRef(false);
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'mandiaroux@gmail.com';
  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    submitting.current = true;
    setStatus('loading');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/xknqjqye', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('Submission rejected');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Project enquiry">
      <fieldset disabled={status === 'loading'}>
        <legend className="sr-only">Tell me about your project</legend>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required />
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" name="email" autoComplete="email" required />
        <label htmlFor="service">What do you need help with?</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Let’s work it out together</option>
          {services.map(service => <option key={service.title}>{service.title}</option>)}
        </select>
        <label htmlFor="message">About your project</label>
        <textarea id="message" name="message" rows="5" required aria-describedby="message-help" />
        <p id="message-help" className="field-help">A short outline is plenty to start. Include timing if you know it.</p>
        <button className="button" type="submit">{status === 'loading' ? 'Sending…' : 'Send enquiry'} <span aria-hidden="true">↗</span></button>
      </fieldset>
      <div role="status" aria-live="polite">{status === 'success' && <p className="form-success">Thanks — your enquiry has been submitted.</p>}</div>
      {status === 'error' && <p role="alert" className="form-error">I couldn’t confirm your enquiry was submitted. Your message is still here; please try again{email ? ' or email me directly' : ''}.</p>}
      {email && <p className="email-alternative">Prefer email? <a href={`mailto:${email}`}>{email}</a></p>}
    </form>
  );
}
