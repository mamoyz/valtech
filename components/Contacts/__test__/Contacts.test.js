import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Contacts from '../Contacts.vue'

describe('Testing Contacts Component', () => {
  vi.mock('vue-router', () => ({
    useRoute: vi.fn(() => ({
      query: {
        tab: ''
      }
    })),
    useRouter: vi.fn(() => ({ push: vi.fn() }))
  }))
  const wrapper = shallowMount(Contacts)
  it('should render the component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
