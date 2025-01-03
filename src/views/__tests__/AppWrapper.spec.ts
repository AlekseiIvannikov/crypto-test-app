import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';

import Layout from '../AppWrapper.vue';

describe('Layout.vue', () => {
  it('renders router-view content', async () => {
    const Home = { template: '<div>Home Page</div>' };
    const About = { template: '<div>About Page</div>' };

    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
      ],
    });

    const wrapper = mount(Layout, {
      global: {
        plugins: [router],
      },
    });

    await router.push('/');
    await router.isReady();
    expect(wrapper.html()).toContain('Home Page');

    await router.push('/about');
    await router.isReady();
    expect(wrapper.html()).toContain('About Page');
  });
});
