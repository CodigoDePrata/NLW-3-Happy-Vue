
<template>
  <div id="page-orphanage">
    <aside>
      <img src="@/assets/images/icons/marker.svg" alt="Happy" />

      <footer>
        <HLeftArrowButton @click="goBack" />
      </footer>
    </aside>

    <main>
      <div className="orphanage-details">
        <img
          src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
          alt="Lar das meninas"
        />

        <div className="images">
          <button className="active" type="button">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />
          </button>
          <button type="button">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />
          </button>
          <button type="button">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />
          </button>
          <button type="button">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />
          </button>
          <button type="button">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />
          </button>
          <button type="button">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />
          </button>
        </div>

        <div className="orphanage-details-content">
          <h1>Lar das meninas</h1>
          <p>
            Presta assistência a crianças de 06 a 15 anos que se encontre em
            situação de risco e/ou vulnerabilidade social.
          </p>

          <div className="map-container">
            <div class="map-wrapper">
              <l-map
                v-if="mapConfig.showMap"
                :zoom="mapConfig.zoom"
                :center="mapConfig.center"
                :options="mapConfig.mapOptions"
                style="height: 80%"
              >
                <l-tile-layer
                  :url="mapConfig.url"
                  :attribution="mapConfig.attribution"
                />
                <l-marker :lat-lng="mapConfig.withTooltip">
                  <l-tooltip :options="{ permanent: true, interactive: true }">
                    <div>
                      I am a tooltip
                      <p v-show="mapConfig.showParagraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                        sollicitudin nisi. Donec finibus semper metus id
                        malesuada.
                      </p>
                    </div>
                  </l-tooltip>
                </l-marker>
              </l-map>
            </div>

            <footer>
              <a href="">Ver rotas no Google Maps</a>
            </footer>
          </div>

          <hr />

          <h2>Instruções para visita</h2>
          <p>
            Venha como se sentir mais à vontade e traga muito amor para dar.
          </p>

          <div className="open-details">
            <div className="hour">
              <!-- <FiClock size={32} color="#15B6D6" /> -->
              Segunda à Sexta <br />
              8h às 18h
            </div>
            <div className="open-on-weekends">
              <!-- <FiInfo size={32} color="#39CC83" /> -->
              Atendemos <br />
              fim de semana
            </div>
          </div>

          <button type="button" className="contact-button">
            <!-- <FaWhatsapp size={20} color="#FFF" /> -->
            Entrar em contato
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// import "../styles/pages/orphanage.css";

import { ref } from "vue";

// import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
export { default as HLeftArrowButton } from "@/components/buttons/HLeftArrowButton";
import { latLng } from "leaflet";

export { default as LMap } from "@vue-leaflet/vue-leaflet/src/components/LMap";
export { default as LTileLayer } from "@vue-leaflet/vue-leaflet/src/components/LTileLayer";
export { default as LMarker } from "@vue-leaflet/vue-leaflet/src/components/LMarker";
export { default as LTooltip } from "@vue-leaflet/vue-leaflet/src/components/LTooltip";

export const location = ref([-23.620855838624667, -45.40241718292237]);
export const goBack = () => console.log;

export const mapConfig = {
  zoom: 13,
  center: latLng(47.41322, -1.219482),
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  withPopup: latLng(47.41322, -1.219482),
  withTooltip: latLng(47.41422, -1.250482),
  currentZoom: 11.5,
  currentCenter: latLng(47.41322, -1.219482),
  showParagraph: false,
  mapOptions: {
    zoomSnap: 0.5,
  },
  showMap: true,
};
</script>

<style>
.map-wrapper {
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #dde3f0;
}
</style>