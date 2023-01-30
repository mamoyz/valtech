<template>
  <section>
    <div class="container my-10">
      <div class="flex flex-col-reverse lg:flex-row items-center content-center lg:content-between">
        <div class="lg:w-1/2 lg:pr-6 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl text-indigo-700 font-lobster">
            {{ title }}
          </h1>
          <p class="mt-6 text-xl lg:text-2xl">
            {{ description }}
          </p>
        </div>
        <div class="lg:w-1/2 text-right">
          <img
            :src="image"
            class="inline-block"
            :width="400"
            :height="400"
            role="presentation"
            :alt="title"
            aria-hidden="true"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
	interface Props {
		title: string;
		description: string;
		image: string;
	}

	withDefaults(defineProps<Props>(), {
		// Default values
		title: 'ContactHub',
		description: 'ContactHub is a contact management system that helps you manage your contacts and their interactions with you.',
		image: '/home-hero.svg'
	})
</script>
