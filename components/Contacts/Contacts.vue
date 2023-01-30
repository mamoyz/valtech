<template>
  <div>
    <TabList :active-tab="activeTab" @update="handleUpdate($event)" />
    <ContactList :active-tab="activeTab" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const activeTab = computed(() => route.query.tab?.toString() ?? 'all')
const handleUpdate = (tab: string) => {
  const routerQuery = tab === 'all' ? {} : { tab }
  router.push({
    query: routerQuery
  })
}
</script>

<style lang="scss" scoped></style>
