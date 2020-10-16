<template>
  <div id="map"></div>
</template>

<script setup="props">
import { onMounted } from "vue";
import Leaflet from "leaflet";

export default {
  props: {
    zoom: { type: Number, default: 15 },
    latitude: { type: Number, required: true, default: -23.6222 },
    longitude: { type: Number, required: true, default: -45.4074 },
  },
};

onMounted(() => {
  const { zoom, latitude, longitude } = props;
  const layerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = "";

  const map = Leaflet.map("map").setView([latitude, longitude], zoom);

  Leaflet.tileLayer(layerUrl, { attribution }).addTo(map);
});
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>