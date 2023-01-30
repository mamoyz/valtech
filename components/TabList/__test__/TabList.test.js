import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TabList from '../TabList.vue'

describe('Testing TabList Component', () => {
  vi.mock('#imports', () => {
    return {
      useRuntimeConfig () {
        return {
          public: {
            tabs: [
              'Tab A', 'Tab B'
            ]
          }
        }
      }
    }
  })

  const wrapper = shallowMount(TabList)

  it('should render the component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render all tabs', () => {
    expect(wrapper.findAll('button').length).toBe(3) // ['All', 'Tab A', 'Tab B'']
    expect(wrapper.findAll('button')[1].text()).toBe('Tab A')
  })
  it('should emite active tab on click', async () => {
    // Click on tab A
    await wrapper.findAll('button')[1].trigger('click')
    // Check emitted event
    expect(wrapper.emitted()).toHaveProperty('update')
    expect(wrapper.emitted().update[0]).toEqual(['Tab A'])
  })
})
