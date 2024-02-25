<script setup lang="ts">
  const route = useRoute();

  const { id } = route.params;

  const { getSpot } = useTourism();

  const { data, error } = await getSpot(id as string);
</script>

<template>
  <div class="container py-20" v-if="data">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-medium text-gray-900">
          {{ data.data.name }}
        </h1>
        <p>{{ data.data.description }}</p>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-medium text-gray-900">History</h1>
        <p>{{ data.data.history }}</p>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-medium text-gray-900">Significance</h1>
        <p>{{ data.data.significance }}</p>
      </div>
      <h2 class="sr-only">Images</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="media in data.data.media">
          <img
            v-if="media.type == 'IMAGE'"
            :key="media.id"
            :src="media.url"
            :alt="media.id"
          />
          <video v-else autoplay>
            <source :src="media.url" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <div class="my-12">
      <Map :location="data.data.location" />
    </div>
  </div>
</template>
