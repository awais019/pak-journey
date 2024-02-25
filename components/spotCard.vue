<script setup lang="ts">
  import type { TouristSpot } from "~/types/tourism";

  defineProps<{
    spot: TouristSpot;
  }>();
</script>

<template>
  <nuxt-link class="group" to="/">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
    >
      <img
        :src="spot.cover?.url"
        :alt="spot.name"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <div
      class="mt-4 flex items-center justify-between text-base font-medium text-gray-900"
    >
      <h3>{{ spot.name }}</h3>
    </div>
    <p class="mt-1 text-sm italic text-gray-500">{{ spot.description }}</p>
  </nuxt-link>
</template>

<style scoped></style>
