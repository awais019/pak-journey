<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Categories
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative space-y-2"
        >
          <category :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Alt Text",
    href: "#",
    imageSrc:
      "https://demo.webbytemplate.com/html-templates/tailwind/journea-travel-agency/layouts/assets/images/inner-banner-img.jpg",
    price: "$35",
    color: "Himaliyan Mountains",
  },
  {
    id: 1,
    name: "Alt Text",
    href: "#",
    imageSrc:
      "https://demo.webbytemplate.com/html-templates/tailwind/journea-travel-agency/layouts/assets/images/inner-banner-img.jpg",
    price: "$35",
    color: "Himaliyan Mountains",
  },
  {
    id: 1,
    name: "Alt Text",
    href: "#",
    imageSrc:
      "https://demo.webbytemplate.com/html-templates/tailwind/journea-travel-agency/layouts/assets/images/inner-banner-img.jpg",
    price: "$35",
    color: "Himaliyan Mountains",
  },
  {
    id: 1,
    name: "Alt Text",
    href: "#",
    imageSrc:
      "https://demo.webbytemplate.com/html-templates/tailwind/journea-travel-agency/layouts/assets/images/inner-banner-img.jpg",
    price: "$35",
    color: "Himaliyan Mountains",
  },
  {
    id: 1,
    name: "Alt Text",
    href: "#",
    imageSrc:
      "https://demo.webbytemplate.com/html-templates/tailwind/journea-travel-agency/layouts/assets/images/inner-banner-img.jpg",
    price: "$35",
    color: "Himaliyan Mountains",
  },
  {
    id: 1,
    name: "Alt Text",
    href: "#",
    imageSrc:
      "https://demo.webbytemplate.com/html-templates/tailwind/journea-travel-agency/layouts/assets/images/inner-banner-img.jpg",
    price: "$35",
    color: "Himaliyan Mountains",
  },
];
</script>
