import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Hero from '../Hero.vue'
describe('Testing Hero Component', () => {
  const wrapper = shallowMount(Hero, {
    props: {
      title: 'Test Title',
      description: 'Test Description',
      image: 'https://picsum.photos/200/300'
    }
  })
  const wrapperWithNoProps = shallowMount(Hero)
  it('should render the Hero component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should load default props (fallbacks) correctly', () => {
    expect(wrapperWithNoProps.props().title).toBe('ContactHub')
    expect(wrapperWithNoProps.props().description).toBe('ContactHub is a contact management system that helps you manage your contacts and their interactions with you.')
    expect(wrapperWithNoProps.props().image).toBe('/home-hero.svg')
  })

  it('should load props correctly', () => {
    expect(wrapper.props().title).toBe('Test Title')
    expect(wrapper.props().description).toBe('Test Description')
    expect(wrapper.props().image).toBe('https://picsum.photos/200/300')
  })
})
