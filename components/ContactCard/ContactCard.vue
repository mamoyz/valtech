<template>
  <div class="bg-white shadow-slate-50 drop-shadow-2xl duration-300 transition-all p-7 rounded-lg w-full h-full">
    <nuxt-img
      data-testid="thumbnail"
      loading="lazy"
      class="rounded-full"
      :src="contact.picture.thumbnail"
      :width="60"
      :height="60"
      :alt="name"
    />
    <p data-testid="name" class="text-lg font-semibold mt-2">
      {{ name }}
    </p>
    <p data-testid="email" class="text-sm mt-2">
      <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
    </p>
    <p data-testid="cell" class="text-sm mt-1">
      <a :href="`tel:${contact.cell}`">{{ contact.cell }}</a>
    </p>
    <p data-testid="address" class="text-sm mt-1">
      {{ address }}
    </p>
    <button class="rounded-lg bg-indigo-700 text-white py-2 px-6 mt-4" @click.prevent="handleViewDetails()">
      View Details
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, computed } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import { Contact } from '@/types/Contact'
const contactsStore = useContactsStore()
const props = defineProps<{
		contact: Contact;
	}>()
const { contact } = toRefs(props)
const name = computed(() => contact.value.name.first + ' ' + contact.value.name.last)
const { city, state, country } = contact.value.location
const address = computed(() => `${city}, ${state}, ${country}`)
const handleViewDetails = () => {
  const delay = contactsStore.showContactViewer ? 300 : 0
  contactsStore.currentContact = contact.value
  contactsStore.showContactViewer = false
  setTimeout(() => {
    contactsStore.showContactViewer = true
  }, delay)
}
</script>

<style scoped></style>
