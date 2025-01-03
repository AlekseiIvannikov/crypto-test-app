import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';

import ThemesIcon from '../../assets/icons/ThemesIcon.vue';
import { setUserTheme } from '../../assets/scripts/index';
import { THEMES } from '../../consts/themes';
import Navbar from '../Navbar.vue';
import Dropdown from '../UI/Dropdown.vue';

vi.mock('@/assets/scripts', () => ({
  setUserTheme: vi.fn(),
}));

describe('Navbar.vue', () => {
  const mockSetUserTheme = vi.mocked(setUserTheme);

  it('renders the navbar with title and dropdown', () => {
    const wrapper = mount(Navbar);

    expect(wrapper.find('.text-xl').text()).toBe('Crypto APP');
    expect(wrapper.findComponent(Dropdown).exists()).toBe(true);
    expect(wrapper.findComponent(ThemesIcon).exists()).toBe(true);
  });

  it('passes correct props to Dropdown', () => {
    const wrapper = mount(Navbar);

    const dropdown = wrapper.findComponent(Dropdown);
    expect(dropdown.props('options')).toEqual(THEMES);
    expect(dropdown.props('callback')).toBe(mockSetUserTheme);
  });
});
