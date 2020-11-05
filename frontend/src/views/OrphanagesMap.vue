<template>
  <div class="relative flex flex-col w-screen h-screen md:flex-row">
    <aside
      class="relative z-50 flex items-center justify-between flex-shrink-0 h-24 gap-2 p-4 shadow-md md:h-screen md:p-20 md:w-1/4 md:flex-col sidebar"
    >
      <RouterLink to="/" class="self-center flex-shrink-0 md:self-start">
        <img
          src="@/assets/icons/marker.svg"
          alt="Happy"
          class="w-12 h-12 md:h-auto md:w-auto"
        />
      </RouterLink>

      <div class="space-y-8 leading-tight text-white">
        <h1 class="text-lg font-semibold md:font-extrabold md:text-5xl">
          Escolha um orfanato no mapa
        </h1>
        <p class="hidden text-lg font-semibold md:block">
          Muitas crianças estão esperando a sua visita :)
        </p>
      </div>

      <div>
        <h1 class="text-lg font-extrabold text-white">Caraguatatuba</h1>
        <p class="text-lg font-semibold text-white">São Paulo</p>
      </div>
    </aside>
    <main class="flex-grow">
      <LMap :zoom="15" :center="center" class="w-full h-full">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LMarker
          v-for="orphanageMarker in orphanagesMarkers"
          :lat-lng="[orphanageMarker.latitude, orphanageMarker.longitude]"
          :key="orphanageMarker.id"
        >
          <LIcon
            :icon-size="[64, 72]"
            :icon-anchor="[32, 72]"
            :popup-anchor="[0, -68]"
            :icon-url="require('@/assets/icons/marker.svg')"
          />
          <LPopup
            :options="{ closeButton: false }"
            class="flex items-center gap-8"
          >
            <span class="text-xl text-cyan-700">{{
              orphanageMarker.name
            }}</span>
            <BaseButton :to="`/orphanages/${orphanageMarker.id}`" tag="RouterLink" size="sm">
              <ArrowRightIcon />
            </BaseButton>
          </LPopup>
        </LMarker>
      </LMap>
      <BaseButton
        class="absolute bottom-0 right-0 z-50 m-10"
        tag="RouterLink"
        to="/orphanages/create"
      >
        <PlusIcon />
      </BaseButton>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LMap, LMarker, LIcon, LTileLayer, LPopup } from "vue2-leaflet";
import { LatLng, latLng } from "leaflet";
import { ArrowRightIcon, PlusIcon } from "vue-feather-icons";
import BaseButton from "@/components/base/BaseButton.vue";
import api from "@/utils/api";

type OrphanageMarker = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};
@Component({
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LPopup,
    BaseButton,
    ArrowRightIcon,
    PlusIcon,
    LIcon,
  },
})
export default class OrphanagesMap extends Vue {
  center: LatLng = latLng(-23.6222, -45.4074);
  orphanagesMarkers: Array<OrphanageMarker> = [];

  async created() {
    const response = await api.get("/orphanages");
    this.orphanagesMarkers = response.data.map(
      (orphanage: OrphanageMarker) => ({
        id: orphanage.id,
        name: orphanage.name,
        latitude: orphanage.latitude,
        longitude: orphanage.longitude,
      })
    );
  }
}
</script>

<style lang="postcss" scoped>
.sidebar {
  background-image: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
}

>>> .leaflet-container {
  font-family: "Nunito", sans-serif;
}

>>> .leaflet-map-pane {
  @apply z-10;
}

>>> .leaflet-popup-content {
  @apply m-0;
}

>>> .leaflet-popup-content-wrapper {
  @apply py-1 pr-1 pl-8 border-none rounded-2xl shadow-none;
}

>>> .leaflet-popup-tip-container {
  @apply hidden;
}
</style>