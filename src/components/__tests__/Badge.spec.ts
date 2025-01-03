import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Badge from '../UI/Badge.vue';

describe('Badge.vue', () => {
  it('renders the default type when no props are provided', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Primary Badge',
      },
    });

    expect(wrapper.classes()).toContain('badge-primary');

    expect(wrapper.text()).toBe('Primary Badge');
  });

  it('applies the correct class for type "Primary"', () => {
    const wrapper = mount(Badge, {
      props: { type: 'Primary' },
      slots: {
        default: 'Primary Badge',
      },
    });

    expect(wrapper.classes()).toContain('badge-primary');

    expect(wrapper.classes()).not.toContain('badge-secondary');

    expect(wrapper.text()).toBe('Primary Badge');
  });

  it('applies the correct class for type "Secondary"', () => {
    const wrapper = mount(Badge, {
      props: { type: 'Secondary' },
      slots: {
        default: 'Secondary Badge',
      },
    });

    expect(wrapper.classes()).toContain('badge-secondary');

    expect(wrapper.classes()).not.toContain('badge-primary');

    expect(wrapper.text()).toBe('Secondary Badge');
  });

  it('renders slot content correctly', () => {
    const wrapper = mount(Badge, {
      props: { type: 'Primary' },
      slots: {
        default: '<strong>Custom Content</strong>',
      },
    });

    expect(wrapper.html()).toContain('<strong>Custom Content</strong>');
  });

  it('has the base "badge" class regardless of type', () => {
    const wrapper = mount(Badge, {
      props: { type: 'Secondary' },
      slots: {
        default: 'Test Badge',
      },
    });

    expect(wrapper.classes()).toContain('badge');
  });
});
