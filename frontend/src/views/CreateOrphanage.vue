<template>
  <div class="h-screen md:flex">
    <TheSidebar title="Adicione um orfanato"/>
    <div class="flex-grow overflow-y-scroll bg-gray-100">
      <div class="hidden my-10 text-2xl font-semibold text-center text-gray-300 md:block">
        Adicione um orfanato
      </div>

      <form
        @submit.prevent="handleFormSubmit"
        class="w-full max-w-2xl px-8 py-16 mx-auto overflow-hidden bg-white border-gray-300 md:my-10 md:px-20 md:rounded-2xl"
      >
        <h1 class="text-3xl font-bold leading-none text-gray-600">Dados</h1>
        <hr class="my-6 border-0 border-b border-gray-200" />

        <div
          class="w-full overflow-hidden border-2 border-gray-200 rounded-xl bg-gray-50"
        >
          <LMap
            :zoom="15"
            :center="mapCenter"
            class="w-full h-64"
            @click="handleMapClick"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LMarker
              v-if="selectedOrphanageSpot"
              :lat-lng="selectedOrphanageSpot"
            >
              <LIcon
                :icon-url="require('@/assets/icons/marker.svg')"
                :icon-size="[64, 72]"
                :icon-anchor="[32, 72]"
              />
            </LMarker>
          </LMap>
          <div class="py-2 font-semibold text-center text-cyan-700">
            Clique no mapa para adicionar a localização
          </div>
        </div>

        <BaseInputControl label="Nome">
          <input type="text" v-model="form.name" />
        </BaseInputControl>

        <BaseInputControl label="Sobre">
          <input type="text" v-model="form.about" />
        </BaseInputControl>

        <BaseInputControl label="Número de Whatsapp">
          <!-- Não tem whatsapp -->
          <input type="text" />
        </BaseInputControl>

        <BaseInputControl label="Fotos">
          <input
            type="file"
            id="photo-input"
            @change="handleUploadImages"
            multiple
            class="hidden w-0 h-0 appearance-none"
          />

          <div class="flex flex-wrap gap-2">
            <img
              v-for="(image, key) in imagePreviews"
              :src="image"
              :key="key"
              class="inline-block w-24 h-24 border border-gray-300 rounded-3xl"
            />

            <label
              for="photo-input"
              class="inline-flex items-center justify-center w-24 h-24 border border-gray-600 border-dashed cursor-pointer bg-gray-50 rounded-3xl text-cyan-700"
            >
              <PlusIcon size="2.5x"></PlusIcon>
            </label>
          </div>
        </BaseInputControl>

        <h1 class="mt-20 text-3xl font-bold leading-none text-gray-600">Visitação</h1>
        <hr class="my-6 border-0 border-b border-gray-200" />

        <BaseInputControl label="Instruções">
          <textarea v-model="form.instructions"></textarea>
        </BaseInputControl>

        <BaseInputControl label="Horário de Visitas">
          <input type="text" v-model="form.opening_hours" />
        </BaseInputControl>

        <BaseInputControl label="Atende fim de semana?">
          <button
            @click="form.open_on_weekends = true"
            class="w-1/2 p-4 font-semibold border border-r-0 border-gray-200 rounded-r-none bg-gray-50 rounded-xl"
            :class="{ 'bg-green text-white': form.open_on_weekends }"
            type="button"
          >
            Sim
          </button>
          <button
            @click="form.open_on_weekends = false"
            class="w-1/2 p-4 font-semibold border border-l-0 border-gray-200 rounded-l-none bg-gray-50 rounded-xl"
            :class="{ 'bg-red text-white': !form.open_on_weekends }"
            type="button"
          >
            Não
          </button>
        </BaseInputControl>

        <button
          class="w-full p-4 mt-12 font-extrabold text-white hover:bg-green-400 bg-green rounded-2xl"
          type="submit"
        >
          Confirmar
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { Component, Vue } from "vue-property-decorator";
import { LMap, LMarker, LIcon, LTileLayer, LPopup } from "vue2-leaflet";
import { LatLng, latLng, LeafletMouseEvent } from "leaflet";
import { PlusIcon } from "vue-feather-icons";
import TheSidebar from "@/components/TheSidebar.vue";
import BaseInputControl from "@/components/BaseInputControl.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import api from "@/utils/api";

type OrphanageForm = {
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  images: Array<File>;
  open_on_weekends: boolean;
};

@Component({
  components: {
    TheSidebar,
    BaseInputControl,
    LMap,
    LMarker,
    LTileLayer,
    LPopup,
    BaseButton,
    PlusIcon,
    LIcon,
  },
})
export default class CreateOrphanage extends Vue {
  mapCenter: LatLng = latLng(-23.6222, -45.4074);
  imagePreviews: Array<string> = [];
  selectedOrphanageSpot: LatLng | boolean = false;
  form: OrphanageForm = {
    name: "",
    about: "",
    instructions: "",
    opening_hours: "",
    images: [],
    open_on_weekends: false,
  };

  handleUploadImages(ev: Event) {
    const fileInputElement: HTMLInputElement = ev.target as HTMLInputElement;
    const fileList = Array.from(fileInputElement.files as Iterable<File>);

    this.form.images.push(...fileList);
    this.imagePreviews.push(
      ...fileList.map((file) => URL.createObjectURL(file))
    );
  }

  handleMapClick(ev: LeafletMouseEvent) {
    this.selectedOrphanageSpot = ev.latlng;
  }

  async handleFormSubmit() {
    const { lat: latitude, lng: longitude } = this
      .selectedOrphanageSpot as LatLng;

    const data = new FormData();

    data.append("name", this.form.name);
    data.append("about", this.form.about);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("instructions", this.form.instructions);
    data.append("opening_hours", this.form.opening_hours);
    data.append("open_on_weekends", String(this.form.open_on_weekends));

    this.form.images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("orphanages", data);

    alert("Cadastro realizado com sucesso!");
  }
}
</script>
