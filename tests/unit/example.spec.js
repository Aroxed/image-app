import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  test('renders the correct number of images', () => {
    const wrapper = mount(App);
    const images = wrapper.findAll('img');
    expect(images).toHaveLength(3);
  });

  test('renders the correct image descriptions', () => {
    const wrapper = mount(App);
    const descriptions = wrapper.findAll('p');
    expect(descriptions.at(0).text()).toBe('This is the first image');
    expect(descriptions.at(1).text()).toBe('This is the second image');
    expect(descriptions.at(2).text()).toBe('This is the third image');
  });
});
