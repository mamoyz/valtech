<template>
  <div v-if="contact" class="container pt-20">
    <div class="flex flex-col lg:flex-row items-center content-between">
      <div class="w-full lg:w-2/3 lg:pr-6">
        <nuxt-link to="/" class="flex items-center no-underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            width="16"
            height="16"
            x="0"
            y="0"
            viewBox="0 0 447.243 447.243"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g><path d="M420.361 192.229a31.967 31.967 0 0 0-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0 0 18.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 0 0-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 0 0 2.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 0 0-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z" fill="#000000" data-original="#000000" class="" /></g>
          </svg>
          <span class="ml-3">Back to contacts</span>
        </nuxt-link>
        <h1 class="text-4xl lg:text-6xl text-indigo-700 font-lobster mt-4">
          {{ contact.name.first }} {{ contact.name.last }}
        </h1>
        <div class="mt-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui animi deleniti sed, laudantium inventore sapiente praesentium iusto dolor perspiciatis maxime nisi facilis? Sequi tempore reprehenderit possimus? Omnis, debitis molestias.</p>
        </div>

        <p class="mt-3">
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </p>
        <p class="mt-1">
          <a :href="`tel:${contact.cell}`">{{ contact.cell }}</a>
        </p>
        <p class="mt-1">
          {{ contact.location.city }}, {{ contact.location.state }}, {{ contact.location.country }}
        </p>
      </div>
      <div class="w-full lg:w-1/3 lg:text-right mt-8 lg:mt-0">
        <nuxt-img :src="contact.picture.large" class="rounded-xl inline-block" :width="400" :height="400" />
      </div>
    </div>
    <div class="mt-16 w-full">
      <iframe
        class="w-full h-96 block rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2452.4908516364544!2d5.108205215969102!3d52.07079387973169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1674656272722!5m2!1sen!2str"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContactsStore } from '@/stores/contacts'
const contactsStore = useContactsStore()
const contact = ref()
const route = useRoute()
const router = useRouter()
onMounted(() => {
  contactsStore.showContactViewer = false
  const contacts = contactsStore.contacts
  const currentContact = contacts.filter((c) => {
    return c.login.uuid === route.params.id
  })[0]
  if (currentContact) {
    contact.value = currentContact
  } else {
    router.push('/')
  }
})
</script>

<style scoped></style>
