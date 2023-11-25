<template>
  <NavigationBar title="Other layout"></NavigationBar>
  <v-main>
    <AppBreadcrumbs />
    <router-view />
  </v-main>
  <PageFooter />
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import PageFooter from '@/components/PageFooter.vue'
import AppBreadcrumbs from '@/components/Breadcrumbs/AppBreadcrumbs.vue'
</script>
