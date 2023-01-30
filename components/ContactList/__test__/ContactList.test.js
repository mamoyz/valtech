import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import ContactList from '../ContactList.vue'
import { useContactsStore } from '@/stores/contacts'
import mockContacts from '~/utils/mockContacts.json'
describe('Testing ContactList Component', () => {
  it('should render the component', () => {
    const wrapper = shallowMount(ContactList)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should load Skeleton Loaders', () => {
    const wrapper = shallowMount(ContactList)
    expect(wrapper.find('SkeletonLoader').exists()).toBeTruthy()
    expect(wrapper.findAll('SkeletonLoader').length).toBe(3)
  })

  it('should load all contacts', () => {
    const contactsStore = useContactsStore()
    contactsStore.contacts = mockContacts
    const wrapper = mount(ContactList, {
      props: {
        activeTab: 'all'
      }
    })
    expect(wrapper.findAll('ContactCard').length).toBe(3)
  })
  it('should load contacts in selected tab', () => {
    const contactsStore = useContactsStore()
    contactsStore.contacts = mockContacts
    const wrapper = mount(ContactList, {
      props: {
        activeTab: 's'
      }
    })
    expect(wrapper.findAll('ContactCard').length).toBe(2)
  })
  it('should show error when no contact found in selected tab', () => {
    const contactsStore = useContactsStore()
    contactsStore.contacts = mockContacts
    const wrapper = mount(ContactList, {
      props: {
        activeTab: 'x'
      }
    })
    expect(wrapper.find('h2').text()).toBe('Sorry! No contacts found in x')
  })
})
