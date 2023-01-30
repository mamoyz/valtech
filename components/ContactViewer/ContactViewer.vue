<template>
  <aside tabindex="0" class="min-h-screen w-full max-w-lg drop-shadow-2xl fixed top-0 right-0 z-50 bg-white py-10 px-6 lg:px-16 text-center max-h-screen overflow-y-scroll">
    <button class="absolute top-4 right-4 p-3" @click.prevent="handleClose()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 47.971 47.971"
        style="enable-background: new 0 0 47.971 47.971"
        xml:space="preserve"
      >
        <g><path fill="#000" d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" /></g>
      </svg>
    </button>
    <div v-if="contact" data-testid="contact-info" class="flex flex-col align-middle items-center">
      <nuxt-img class="rounded-full" :src="contact.picture.large" :width="150" :height="150" />
      <h3 class="text-3xl font-bold text-indigo-700 font-lobster mt-4">
        {{ contact.name.first }} {{ contact.name.last }}
      </h3>
      <p class="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet officiis fugiat obcaecati vitae velit quod, perferendis ad.
      </p>
      <nuxt-link :to="`/contacts/${contact.login.uuid}`" class="rounded-lg bg-indigo-700 text-white py-2 px-6 mt-4 no-underline">
        Go To Profile
      </nuxt-link>

      <div class="mt-8 w-full mb-3">
        <iframe
          class="w-full h-48 block rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2452.4908516364544!2d5.108205215969102!3d52.07079387973169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1674656272722!5m2!1sen!2str"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <p class="mt-3">
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </p>
      <p class="mt-1">
        <a :href="`tel:${contact.cell}`">{{ contact.cell }}</a>
      </p>
      <p class="mt-1" data-testid="address">
        {{ contact.location.city }}, {{ contact.location.state }}, {{ contact.location.country }}
      </p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'
const contactsStore = useContactsStore()
const contact = computed(() => contactsStore.currentContact)
const handleClose = () => {
  contactsStore.showContactViewer = false
  contactsStore.currentContact = null
}
</script>

<style scoped></style>
