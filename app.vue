<template>
  <img width="99999" height="99999" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+" alt="lcp" style="pointer-events: none; position: absolute; top: 0; left: 0; width: 99vw; height: 99vh; max-width: 99vw; max-height: 99vh">
  <Head>
    <meta name="description" content="ContactHub is a contact management system that helps you manage your contacts and their interactions with you.">
    <meta name="keywords" content="contact, management, system, contacts, contacthub, valtech, valtech_">
    <meta name="author" content="Mohammadreza (Mamo YZ)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ffffff">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="/browserconfig.xml">
    <meta name="application-name" content="ContactHub">
    <meta name="apple-mobile-web-app-title" content="ContactHub">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="robots" content="index, follow">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <title>ContactHub | Valtech_</title>
  </Head>
  <main class="mb-20" role="main" @keyup.esc="handleEscapePress">
    <NuxtPage :key="$route.fullPath" />
    <transition name="fade">
      <ContactViewer v-if="showViewer" />
    </transition>
  </main>
</template>
<script setup lang="ts">
import { useContactsStore } from './stores/contacts'
const constactsStore = useContactsStore()
onMounted(async () => {
  await constactsStore.fetchContacts()
})
const showViewer = computed(() => constactsStore.showContactViewer)
const handleEscapePress = () => {
  constactsStore.showContactViewer = false
}
</script>
<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: transform 0.3s ease-in-out;
		transform: none;
	}

	.fade-enter-from,
	.fade-leave-to {
		will-change: transform;
		transform: translate(101%, 0);
	}
</style>
