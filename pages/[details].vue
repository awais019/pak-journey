<template>
  <div class="bg-white">
    <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">City Name</h1>

      <section aria-labelledby="products-heading" class="mt-8">
        <h2 id="products-heading" class="sr-only">Description</h2>

        <div class="space-y-24">
          <div
            v-for="product in products"
            :key="product.id"
            class="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
          >
            <div class="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
              <div
                class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-50"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="object-cover object-center"
                />
              </div>
            </div>
            <div class="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
              <h3 class="text-lg font-medium text-gray-900">
                <a :href="product.href">{{ product.name }}</a>
              </h3>
              <p class="mt-3 text-gray-500">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = [
  {
    id: 1,
    name: "Distant Mountains Artwork Tee",
    price: "$36.00",
    description:
      "You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?",
    address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    email: "f•••@example.com",
    phone: "1•••••••••40",
    href: "#",
    status: "Processing",
    step: 1,
    date: "March 24, 2021",
    datetime: "2021-03-24",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg",
    imageAlt:
      "Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.",
  },
];
</script>
