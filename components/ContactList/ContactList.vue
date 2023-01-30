<template>
  <div class="container">
    <div v-if="!contacts" class="flex items-start flex-wrap">
      <div v-for="item in 3" :key="item" class="md:w-1/2 lg:w-1/3 px-2 mb-4">
        <SkeletonLoader />
      </div>
    </div>
    <div v-else>
      <div v-if="!filteredContacts" class="bg-indigo-50 text-center p-20 rounded-xl">
        <h2 class="font-lobster text-3xl">
          Sorry! No contacts found in
          <span class="block text-9xl uppercase mt-4 text-indigo-700">{{ activeTab }}</span>
        </h2>
      </div>

      <div v-else class="flex items-stretch flex-wrap w-full">
        <div v-for="c in filteredContacts" :key="c.login.uuid" class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <ContactCard :key="c.login.uuid" :contact="c" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import orderBy from 'lodash/orderBy'
import { useContactsStore } from '../../stores/contacts'
	type Props = {
		activeTab: string;
	};
const props = withDefaults(defineProps<Props>(), {
  activeTab: 'all'
})
const contactsStore = useContactsStore()
// Get contacts from store
const contacts = computed(() => contactsStore.contacts || null)

const { activeTab } = toRefs(props)
// Filter contacts by selected tab
const filteredContacts = computed(() => {
  const currentTab = activeTab.value.toLowerCase()

  // DEFAULT : Return first 12 contacts sorted by first name
  if (currentTab === 'all') {
    return orderBy(contacts.value, ['name.first'], ['asc']).slice(0, 12)
  }
  // TAB SELECTED: Sort contacts by last name
  const filtered = contacts.value?.filter(contact => contact.name.first.slice(0, 1).toLowerCase() === currentTab) || null
  return filtered.length ? orderBy(filtered, ['name.last'], ['asc']) : null
})
</script>
