import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ContactCard from '../ContactCard.vue'
import mockContacts from '@/utils/mockContacts.json'

import { useContactsStore } from '@/stores/contacts'

describe('Testing ContactCard Component', () => {
  const wrapper = shallowMount(ContactCard, {
    propsData: {
      contact: mockContacts[0]
    }
  })

  it('Should render the component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('Should renders the correct data', () => {
    expect(wrapper.find('[data-testid="name"]').text()).toBe('Sjur Endal')
    expect(wrapper.find('[data-testid="thumbnail"]').attributes().src).toBe('https://randomuser.me/api/portraits/thumb/men/29.jpg')
    expect(wrapper.find('a[href="mailto:sjur.endal@example.com"]').text()).toBe('sjur.endal@example.com')
    expect(wrapper.find('a[href="tel:90823293"]').text()).toBe('90823293')
    expect(wrapper.find('[data-testid="address"]').text()).toBe('Viksjord, Sogn og Fjordane, Norway')
  })
  it('Should View details Button is working', async () => {
    const contactsStore = useContactsStore()
    vi.spyOn(wrapper.vm, 'handleViewDetails')
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.handleViewDetails).toBeCalledTimes(1)
    expect(contactsStore.currentContact.name.first).toBe('Sjur') // Updates Store
  })
})
