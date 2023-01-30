import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ContactViewer from '../ContactViewer.vue'
import { useContactsStore } from '@/stores/contacts'
import mockContacts from '@/utils/mockContacts.json'
describe('Testing ContactViewer Component', () => {
  let wrapper
  let contactsStore

  beforeEach(() => {
    contactsStore = useContactsStore()
    contactsStore.currentContact = mockContacts[0]
    wrapper = shallowMount(ContactViewer)
  })

  it('Should render the component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders the correct data', () => {
    expect(wrapper.find('[data-testid="contact-info"]').exists()).toBeTruthy()
    expect(wrapper.find('h3').text()).toBe('Sjur Endal')
    expect(wrapper.find('nuxt-img').attributes().src).toBe('https://randomuser.me/api/portraits/men/29.jpg')
    expect(wrapper.find('nuxt-link').attributes().to).toBe('/contacts/d2c00ea0-ef19-445e-be42-e85437130352')
    expect(wrapper.find('a[href="mailto:sjur.endal@example.com"]').text()).toBe('sjur.endal@example.com')
    expect(wrapper.find('a[href="tel:90823293"]').text()).toBe('90823293')
    expect(wrapper.find('[data-testid="address"]').text()).toBe('Viksjord, Sogn og Fjordane, Norway')
  })
  it('Should verify X button is working', async () => {
    vi.spyOn(wrapper.vm, 'handleClose')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[data-testid="contact-info"]').exists()).toBeFalsy()
    expect(wrapper.vm.handleClose).toBeCalledTimes(1)
    expect(contactsStore.currentContact).toBeNull() // Updates Store
  })
})
