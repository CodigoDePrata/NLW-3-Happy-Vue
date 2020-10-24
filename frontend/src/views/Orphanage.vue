<template>
  <div class="flex h-screen">
    <TheSidebar />
    <div class="flex-grow overflow-y-scroll bg-gray-100">
      <div class="my-10 text-2xl font-semibold text-center text-gray-300">
        Orfanato
      </div>

      <div
        class="w-full max-w-2xl pb-16 mx-auto my-10 overflow-hidden bg-white border-gray-300 rounded-2xl"
      >
        <img
          class="object-cover w-full h-64"
          v-if="orphanage.images.length > 0"
          :src="orphanage.images[0].url"
        />
        <div class="flex gap-4 px-8 my-6" v-if="orphanage.images.length > 0">
          <img
            class="object-cover w-24 h-24 rounded-3xl"
            v-for="image in orphanage.images"
            :src="image.url"
            :key="image.id"
          />
        </div>

        <div class="px-20">
          <h1 class="my-6 text-5xl font-bold leading-none text-gray-600">
            {{ orphanage.name }}
          </h1>

          <p class="text-lg font-semibold text-gray-600">
            {{ orphanage.about }}
          </p>

          <div
            class="w-full my-16 overflow-hidden border-2 border-gray-200 rounded-xl bg-gray-50"
          >
            <LMap :zoom="15" :center="orphanagePosition" class="w-full h-64">
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LMarker v-if="orphanagePosition" :lat-lng="orphanagePosition">
                <LIcon
                  :icon-url="require('@/assets/icons/marker.svg')"
                  :icon-size="[64, 72]"
                  :icon-anchor="[32, 72]"
                />
              </LMarker>
            </LMap>

            <div class="py-2 font-semibold text-center text-cyan-700">
              Ver rotas no Google Maps
            </div>
          </div>
          <hr class="my-16 border-0 border-b border-gray-200" />

          <h1 class="my-6 text-3xl font-bold leading-none text-gray-600">
            Instruções para visita
          </h1>

          <p class="text-lg font-semibold text-gray-600">
            {{ orphanage.instructions }}
          </p>

          <div class="flex flex-wrap gap-5 my-6">
            <div
              class="flex-grow px-6 py-8 font-semibold border rounded-4xl text-cyan-700 border-cyan-500 from-cyan-50 bg-gradient-to-b"
            >
              <ClockIcon size="2x" class="mb-4" />
              <p>Horário de visitas</p>
              <p>{{ orphanage.opening_hours }}</p>
            </div>
            <div
              class="flex-grow px-6 py-8 font-semibold border rounded-4xl bg-gradient-to-b"
              :class="{
                'from-green-50 border-green text-green':
                  orphanage.open_on_weekends,
                'from-red-50 border-red text-red': !orphanage.open_on_weekends,
              }"
            >
              <AlertCircleIcon size="2x" class="mb-4" />
              <p v-if="orphanage.open_on_weekends">Atendemos</p>
              <p v-if="!orphanage.open_on_weekends">Não atendemos</p>
              <p>fim de semana</p>
            </div>
          </div>

          <button
            class="w-full p-4 mt-12 font-extrabold text-white hover:bg-green-400 bg-green rounded-2xl"
            type="submit"
          >
            <PhoneCallIcon class="inline-block mr-2" /> Entrar em contato
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import TheSidebar from "@/components/TheSidebar.vue";
import { LatLng } from "leaflet";
import { Vue, Component } from "vue-property-decorator";
import { LIcon, LMap, LMarker, LTileLayer } from "vue2-leaflet";
import { AlertCircleIcon, ClockIcon, PhoneCallIcon } from "vue-feather-icons";
import api from "@/utils/api";

type OrphanageData = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<string>;
};

@Component({
  components: {
    TheSidebar,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    AlertCircleIcon,
    PhoneCallIcon,
    ClockIcon,
  },
})
export default class Orphanage extends Vue {
  orphanage: OrphanageData = {
    id: 0,
    name: "",
    latitude: 0,
    longitude: 0,
    about: "",
    instructions: "",
    opening_hours: "",
    open_on_weekends: false,
    images: [],
  };

  async created() {
    const orphanageData = await api.get(`/orphanages/${this.$route.params.id}`);

    this.orphanage = orphanageData.data as OrphanageData;
  }

  get orphanagePosition() {
    const { latitude, longitude } = this.orphanage;

    return new LatLng(latitude, longitude);
  }
}
</script>