import { getAvailabilityStatus } from './AvailabilityStatus';

test('uses configured availability copy while accepting enquiries', () => {
  expect(getAvailabilityStatus({ acceptingProjects: true, label: 'Accepting consulting enquiries', detail: 'Limited availability for new projects' })).toEqual({
    acceptingProjects: true,
    label: 'Accepting consulting enquiries',
    detail: 'Limited availability for new projects',
    state: 'available',
  });
});

test('uses future-work copy while booked', () => {
  expect(getAvailabilityStatus({ acceptingProjects: false, label: 'Unused', detail: 'Unused' })).toEqual({
    label: 'Currently booked — enquiries for future work welcome.',
    detail: '',
    state: 'booked',
  });
});
