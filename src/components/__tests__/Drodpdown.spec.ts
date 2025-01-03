import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';

import Dropdown from '../UI/Dropdown.vue';

describe('Dropdown.vue', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const callback = vi.fn();

  it('renders slot content inside the button', () => {
    const wrapper = mount(Dropdown, {
      props: { options, callback },
      slots: {
        default: '<span>Open Dropdown</span>',
      },
    });

    expect(wrapper.find('.btn').html()).toContain('<span>Open Dropdown</span>');
  });

  it('renders the correct number of options', () => {
    const wrapper = mount(Dropdown, {
      props: { options, callback },
    });

    const items = wrapper.findAll('ul > li');
    expect(items.length).toBe(options.length);

    items.forEach((item, index) => {
      expect(item.text()).toBe(options[index]);
    });
  });

  it('calls the callback function when an option is clicked', async () => {
    const wrapper = mount(Dropdown, {
      props: { options, callback },
    });

    const items = wrapper.findAll('ul > li');

    await items[0].trigger('click');
    expect(callback).toHaveBeenCalledOnce();
    expect(callback).toHaveBeenCalledWith('Option 1');

    await items[2].trigger('click');
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith('Option 3');
  });

  it('applies the correct classes to dropdown and options', () => {
    const wrapper = mount(Dropdown, {
      props: { options, callback },
    });

    expect(wrapper.classes()).toContain('dropdown');
    expect(wrapper.classes()).toContain('dropdown-end');

    const items = wrapper.findAll('ul > li');
    items.forEach((item) => {
      expect(item.classes()).toContain('text-lg');
      expect(item.classes()).toContain('p-4');
      expect(item.classes()).toContain('cursor-pointer');
    });
  });
});
