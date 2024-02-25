<script lang="ts" setup>
  const { getAllTouristSpots } = useTourism();

  const { data, error } = await getAllTouristSpots();
</script>

<template>
  <div class="container py-20" v-if="data">
    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
    >
      <SpotCard :spot="spot" v-for="spot in data.data" :key="spot.id" />
    </div>
  </div>
</template>

<style scoped></style>
