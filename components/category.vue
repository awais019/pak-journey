<template>
  <div>
    <div
      class="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
    >
      <img
        :src="product.imageSrc"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a :href="product.href">
            <span
              aria-hidden="true"
              class="pointer-events-none absolute inset-0"
            />
            {{ product.name }}
          </a>
        </h3>
      </div>
    </div>
    <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
    <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
    <NuxtLink to="/login">
      <button
        class="rounded-xl border-none bg-[#645bbb] p-4 text-white outline-none"
      >
        Read More
      </button>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["product"]);
</script>

<style></style>
