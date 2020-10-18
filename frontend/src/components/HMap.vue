<template>
  <div id="map"></div>
</template>

<script setup="props, { emit }">
import { computed, onMounted, reactive } from "vue";
import MarkerIcon from "@/assets/images/icons/marker.svg";
import Leaflet from "leaflet";

export default {
  props: {
    zoom: { type: Number, default: 15 },
    latitude: { type: Number, required: true, default: -23.6222 },
    longitude: { type: Number, required: true, default: -45.4074 },
    markers: { type: Array, required: false, default: () => [0, 0] },
    unique: { type: Boolean, required: false, default: false },
  },
};

export const state = reactive({
  map: {},
  addedMarkers: computed(() => {
    const icon = new Leaflet.icon({
      iconUrl: MarkerIcon,
      iconSize: [58, 68],
      iconAnchor: [29, 68],
      popupAnchor: [0, -60],
    });

    const newMarkerPosition = props.markers[0];

    if (props.unique) {
      const markedMarker = state.addedMarkers[0];

      if (state.addedMarkers.length) {
        markedMarker.setLatLng(
          new Leaflet.LatLng(
            newMarkerPosition.latitude,
            newMarkerPosition.longitude
          )
        );

        return;
      }
      // console.log(newMarkerPosition.latitude, newMarkerPosition.longitude);
      state.addedMarkers[0] = Leaflet.marker(
        [newMarkerPosition.latitude, newMarkerPosition.longitude],
        { icon }
      ).addTo(state.map);

      return;
    }

    for (const markerPosition of props.markers) {
      state.addedMarkers.push(
        Leaflet.marker([markerPosition.latitude, markerPosition.longitude], {
          icon,
        }).addTo(state.map)
      );
    }
  }),
});

onMounted(() => {
  const { zoom, latitude, longitude } = props;
  const layerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = "";

  state.map = Leaflet.map("map").setView([latitude, longitude], zoom);
  state.map.on("click", (e) => {
    emit("mark", e.latlng);
  });

  Leaflet.tileLayer(layerUrl, { attribution }).addTo(state.map);
});

// computed(
//   props.markers,
//   (newMarkerPositions, ll) => {
//   { immediate: true }
// );
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>