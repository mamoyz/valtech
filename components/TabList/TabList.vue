<template>
  <section>
    <div class="container mt-4 mb-14">
      <ul class="flex lg:flex-wrap overflow-scroll">
        <li v-for="letter in tabs" :key="letter" class="m-1">
          <button :aria-label="letter" :class="{ 'bg-indigo-600 !text-white': activeTab === letter }" class="text-xl rounded-xl py-4 px-3 capitalize bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white w-14 lg:w-20" @click.prevent="$emit('update', letter)">
            {{ letter }}
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

export type Props = {
		activeTab?: string;
	};
withDefaults(defineProps<Props>(), {
  activeTab: 'all'
})
const runtimeConfig = useRuntimeConfig()
const config = runtimeConfig.public
const tabs = ['all', ...config.tabs]
defineEmits(['update'])
</script>

<style scoped></style>
