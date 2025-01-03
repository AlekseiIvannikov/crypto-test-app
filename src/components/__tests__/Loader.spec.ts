import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Loader from '@/components/UI/Loader.vue';

describe('Loader.vue', () => {
  it('renders the loader with correct classes', () => {
    const wrapper = mount(Loader);

    const loader = wrapper.find('span.loader');
    expect(loader.exists()).toBe(true);

    expect(loader.classes()).toContain('loading');
    expect(loader.classes()).toContain('loading-bars');
    expect(loader.classes()).toContain('loading-lg');
    expect(loader.classes()).toContain('absolute');
  });
});
