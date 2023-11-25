<template>
  <v-breadcrumbs :items="breadcrumbItems">
  </v-breadcrumbs>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbItems = computed(() => {
  return route.matched
    .filter(routeItem => !routeItem.meta.breadcrumb?.hidden)
    .map((routeItem, idx, arr) => ({
      to: routeItem.path,
      title: routeItem.meta.breadcrumb?.title || routeItem.name as string,
      disabled: idx === arr.length - 1 || routeItem.meta.breadcrumb?.disabled,
    })
    )
})
</script>

<style scoped></style>