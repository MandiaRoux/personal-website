import React, { forwardRef, useRef, useState } from 'react';
import { services } from '../content';

const requiredFields = ['name', 'email', 'message'];

function getFieldError(name, value) {
  if (name === 'name' && !value.trim()) return 'Please enter your name.';
  if (name === 'email' && !value.trim()) return 'Please enter an email address so I can reply.';
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
  if (name === 'message' && !value.trim()) return 'Please share a short outline of your project.';
  return '';
}

const Form = forwardRef(function Form({ selectedService = '', onServiceChange = () => {} }, ref) {
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const submitting = useRef(false);
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'mandiaroux@gmail.com';

  function validateField(field) {
    const error = getFieldError(field.name, field.value);
    setErrors(current => {
      const next = { ...current };
      if (error) next[field.name] = error;
      else delete next[field.name];
      return next;
    });
    return error;
  }

  function handleBlur(event) {
    if (requiredFields.includes(event.target.name)) validateField(event.target);
  }

  function handleChange(event) {
    if (errors[event.target.name]) validateField(event.target);
    if (status === 'success' || status === 'error' || status === 'validation') setStatus('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const invalidFields = requiredFields.reduce((next, fieldName) => {
      const field = form.elements[fieldName];
      const error = getFieldError(fieldName, field.value);
      if (error) next[fieldName] = error;
      return next;
    }, {});

    if (Object.keys(invalidFields).length) {
      setErrors(invalidFields);
      setStatus('validation');
      form.elements[Object.keys(invalidFields)[0]].focus();
      return;
    }

    const data = new FormData(form);
    if (data.get('_gotcha')) {
      form.reset();
      onServiceChange('');
      setErrors({});
      setStatus('success');
      return;
    }

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
      onServiceChange('');
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Project enquiry" noValidate>
      <fieldset disabled={status === 'loading'}>
        <legend className="sr-only">Tell me about your project</legend>
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required ref={ref} onBlur={handleBlur} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" name="email" autoComplete="email" required onBlur={handleBlur} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="service">What do you need help with?</label>
          <select id="service" name="service" value={selectedService} onChange={event => { onServiceChange(event.target.value); handleChange(event); }}>
            <option value="">Let’s work it out together</option>
            {services.map(service => <option key={service.id} value={service.id}>{service.title}</option>)}
          </select>
        </div>
        <div className="form-options">
          <div className="form-field">
            <label htmlFor="timeline">Timeline <span className="optional">(optional)</span></label>
            <select id="timeline" name="timeline" defaultValue="">
              <option value="">Select a timeline</option>
              <option>As soon as possible</option>
              <option>Within a month</option>
              <option>1–3 months</option>
              <option>Exploring / no fixed date</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="engagement">Engagement <span className="optional">(optional)</span></label>
            <select id="engagement" name="engagement" defaultValue="">
              <option value="">Select an engagement</option>
              <option>Small contained task</option>
              <option>Multi-week project</option>
              <option>Code/application review</option>
              <option>Ongoing engineering support</option>
              <option>Not sure</option>
            </select>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message">About your project</label>
          <textarea id="message" name="message" rows="5" required autoComplete="off" onBlur={handleBlur} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-help message-error' : 'message-help'} />
          <p id="message-help" className="field-help">A short outline is plenty to start. Include timing if you know it.</p>
          {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field blank</label>
          <input id="website" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
        </div>
        <button className="button" type="submit">{status === 'loading' ? 'Sending…' : 'Send enquiry'} <span aria-hidden="true">↗</span></button>
      </fieldset>
      <div role="status" aria-live="polite">
        {status === 'success' && <p className="form-success">Thanks — your enquiry has been submitted. I’ll be in touch soon.</p>}
      </div>
      {status === 'validation' && <p className="form-error" role="alert">Please check the highlighted fields and try again.</p>}
      {status === 'error' && <p role="alert" className="form-error">I couldn’t confirm your enquiry was submitted. Your message is still here; please try again or email me directly.</p>}
      <p className="email-alternative">Prefer email? <a href={`mailto:${email}`}>{email}</a></p>
    </form>
  );
});

export default Form;
