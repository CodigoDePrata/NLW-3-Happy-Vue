<template>
  <div class="flex h-screen">
    <TheSidebar />
    <div class="flex-grow bg-gray-100">
      <div class="my-10 text-2xl font-semibold text-center">
        Adicione um orfanato
      </div>

      <div
        class="w-full max-w-2xl p-20 mx-auto overflow-hidden bg-white border-gray-300 rounded-2xl"
      >
        <div
          class="w-full overflow-hidden border-2 border-gray-200 rounded-xl bg-gray-50"
        >
          <LMap :zoom="15" :center="mapCenter" class="w-full h-64">
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LMarker :lat-lng="mapCenter">
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

        <BaseInputControl label="Sobre">
          <input type="text" />
        </BaseInputControl>

        <BaseInputControl label="Sobre" instructions="Máximo de 300 caracteres">
          <textarea></textarea>
        </BaseInputControl>

        <BaseInputControl label="Número de Whatsapp">
          <input type="text" />
        </BaseInputControl>

        <BaseInputControl label="Fotos">
          <input
            type="file"
            id="photo-input"
            @change="handleUploadImages"
            multiple
          />

          <div class="photos-preview">
            <img
              v-for="(image, key) in imagePreviews"
              :src="image"
              :key="key"
              class="image-preview"
            />
            <label for="photo-input" class="photo-input">
              <!-- <img src="@/assets/images/icons/plus-blue.svg" /> -->
              +
            </label>
          </div>
        </BaseInputControl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LMap, LMarker, LIcon, LTileLayer, LPopup } from "vue2-leaflet";
import { LatLng, latLng } from "leaflet";
import TheSidebar from "@/components/TheSidebar.vue";
import BaseInputControl from "@/components/BaseInputControl.vue";
import BaseButton from "@/components/base/BaseButton.vue";

@Component({
  components: {
    TheSidebar,
    BaseInputControl,
    LMap,
    LMarker,
    LTileLayer,
    LPopup,
    BaseButton,
    LIcon,
  },
})
export default class CreateOrphanage extends Vue {
  mapCenter: LatLng = latLng(-23.6222, -45.4074);
  form = {};
  imagePreviews: Array<string> = [];

  handleUploadImages(ev: Event) {
    const fileInputElement: HTMLInputElement = ev.target as HTMLInputElement;
    const fileList = Array.from(fileInputElement.files as Iterable<File>);
    // form.images = fileList.map((file) => file.name);
    this.imagePreviews = fileList.map((file) => URL.createObjectURL(file));

    // images.value = imageList;
  }
}
</script>
