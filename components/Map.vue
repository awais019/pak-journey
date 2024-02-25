<script setup lang="ts">
  import mapboxgl from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";
  import type { Location } from "~/types/tourism";

  const props = defineProps<{
    location: Location;
  }>();

  const { MAPBOX_TOKEN } = useRuntimeConfig().public;

  let map: any = null;

  function addMarker() {
    const markerBounds = new mapboxgl.LngLatBounds();
    const coords = {
      lat: props.location.latitude,
      lng: props.location.longitude,
    };

    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el).setLngLat(coords).addTo(map!);
    markerBounds.extend(coords);
    console.log(markerBounds);

    map?.fitBounds(markerBounds, {
      padding: 100,
      maxZoom: 15,
      linear: true,
    });
  }

  onMounted(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/swadon/ckkvdmhh735l418mhd4re0bse",
      zoom: 2,
      scrollZoom: true,

      center: [props.location.longitude, props.location.latitude],
    });
    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );
    map.addControl(new mapboxgl.FullscreenControl(), "bottom-right");
    addMarker();
  });
</script>

<template>
  <div id="map" class="h-[50vh] rounded-2xl relative"></div>
</template>

<style lang="postcss">
  .mapboxgl-popup-content {
    @apply rounded-2xl p-0;
  }
  .marker {
    @apply h-10 w-10 cursor-pointer;
  }

  .marker.marker-active:after {
    @apply bg-black;
  }

  .marker:hover:before {
    @apply bg-opacity-40;
  }

  .marker:before,
  .marker:after {
    content: "";
    @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full;
  }

  .marker:before {
    @apply h-12 w-12  bg-gray-500 bg-opacity-20 transition-colors;
  }

  .marker:after {
    @apply h-5 w-5 border-2 border-white bg-black transition-colors;
  }
</style>
