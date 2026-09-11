import React from 'react';
import { siteConfig } from '../siteConfig';

export function getAvailabilityStatus(availability) {
  if (!availability.acceptingProjects) {
    return {
      label: 'Currently booked — enquiries for future work welcome.',
      detail: '',
      state: 'booked',
    };
  }

  return { ...availability, state: 'available' };
}

export default function AvailabilityStatus({ className = '' }) {
  const { label, detail, state } = getAvailabilityStatus(siteConfig.availability);

  return (
    <p className={`availability-status availability-status--${state} ${className}`.trim()}>
      <span className="availability-indicator" aria-hidden="true" />
      <span>{label}</span>
      {detail && <span className="availability-detail">{detail}</span>}
    </p>
  );
}
