<template>
  <div class="page">
    <HSidebar />
    <div class="form-wrapper">
      <h2 class="page-title">Adicione um orfanato</h2>

      <form @submit="handleFormSubmit">
        <h1 class="title">Dados</h1>
        <hr />
        <div class="map-wrapper">
          <HMap @mark="handleMapClick" :markers="[selectedPosition]" unique/>
        </div>

        <label class="input-block">
          <span>Nome</span>
          <input type="text" v-model="formState.name"/>
        </label>

        <label class="input-block">
          <span>Sobre</span>
          <textarea maxlength="300" v-model="formState.about"></textarea>
        </label>

        <!-- <label class="input-block">
          <span>Número de Whatsapp</span>
          <input type="text" v-model="formState.whatsapp"/>
        </label> -->

        <label class="input-block">
          <span>Fotos</span>
          <input
            type="file"
            id="photo-input"
            @change="handleUploadImages"
            multiple
          />

          <div class="photos-preview">
            <img v-for="(image, key) in images" :src="image" :key="key" class="image-preview">
            <label for="photo-input" class="photo-input">
              <img src="@/assets/images/icons/plus-blue.svg" />
            </label>
          </div>
        </label>

        <h1 class="title">Visitação</h1>
        <hr />
        <label class="input-block">
          <span>Instruções</span>
          <textarea v-model="formState.instructions"></textarea>
        </label>

        <label class="input-block">
          <span>Horário de visitas</span>
          <input type="text" v-model="formState.opening_hours"/>
        </label>

        <label class="input-block">
          <span>Atende fim de semana?</span>
          <div class="yes-no-switch">
            <button
              @click="formState.open_on_weekends = true"
              :class="{ active: formState.open_on_weekends }"
              type="button"
            >
              Sim
            </button>
            <button
              @click="formState.open_on_weekends = false"
              :class="{ active: !formState.open_on_weekends }"
              type="button"
            >
              Não
            </button>
          </div>
        </label>
        <button class="confirm-button" type="submit">Confirmar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
export { default as HSidebar } from "@/components/HSidebar";
export { default as HMap } from "@/components/HMap";
import { reactive, ref } from "vue";

export const formState = reactive({
  name: "",
  latitude: "",
  longitude: "",
  about: "",
  instructions: "",
  opening_hours: "",
  open_on_weekends: false,
  images: [],
});
export const selectedPosition = reactive({
  latitude: 0,
  longitude: 0
})

export const images = ref([]);

export const handleUploadImages = (ev) => {
  const fileList = Array.from(ev.target.files);
  formState.images = fileList.map((file) => file.name);
  const imageList = fileList.map((file) => URL.createObjectURL(file));

  images.value = imageList;
};

export const handleFormSubmit = (ev) => {
  ev.preventDefault();
  console.log(formState)
};

export const handleMapClick = (position) => {
  formState.latitude =  position.lat
  formState.longitude = position.lng
  
  selectedPosition.latitude = position.lat
  selectedPosition.longitude = position.lng
}
</script>

<style scoped>
.page {
  display: flex;
  height: 100vh;
}

.page-title {
  color: #8fa7b2;
  text-align: center;
  margin: 40px 0;
  font-weight: 600;
  font-size: 18px;
}

.form-wrapper {
  background-color: #ebf2f5;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  box-sizing: border-box;
}

.form-wrapper form {
  background: #fff;
  border: 1px solid #d3e2e5;
  box-sizing: border-box;
  border-radius: 20px;
  margin: auto;
  padding: 64px 80px;
  width: 90%;
  max-width: 740px;
}

.title {
  font-weight: 700;
  font-size: 2rem;
  margin: 2rem 0 1rem;
}

.input-block,
.title {
  color: #4d6f80;
  font-weight: 600;
}

.map-wrapper {
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #DDE3F0;
}

.input-block > span {
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
}

hr {
  border: 0;
  border-bottom: 1px solid #d3e2e5;
}

input,
textarea {
  display: block;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  padding: .5rem;
}

textarea {
  height: 120px;
  line-height: 1.25;
}

#photo-input {
  display: none;
}

.photo-input {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  width: 96px;
  border-radius: 20px;
  border: 1px dashed #96d2f0;
  box-sizing: border-box;
  cursor: pointer;
}

.yes-no-switch {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.yes-no-switch button {
  height: 64px;
  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  color: #5c8599;
  cursor: pointer;
}

.yes-no-switch button:first-child {
  border-radius: 20px 0px 0px 20px;
}

.yes-no-switch button:last-child {
  border-radius: 0 20px 20px 0;
  border-left: 0;
}

.yes-no-switch button.active {
  background: #edfff6;
  border: 1px solid #a1e9c5;
  color: #37c77f;
}

button.confirm-button {
  margin-top: 3rem;
  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
}

.photos-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, 96px);
  gap: 16px;
}

.image-preview {
  width: 96px;
  height: 96px;
  border-radius: 20px;
  object-fit: cover;
}
</style>