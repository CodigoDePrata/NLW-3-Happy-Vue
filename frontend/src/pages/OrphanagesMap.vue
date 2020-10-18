<template>
  <div class="orphanages-map">
    <aside class="aside">
      <img src="@/assets/images/icons/marker.svg" alt="" class="marker" />

      <div class="call">
        <h1>Escolha um orfanato no mapa</h1>
        <p>Muitas crianças estão esperando sua visita :)</p>
      </div>

      <HLocation city="Caraguatatuba" uf="São Paulo" class="location" />
    </aside>
    <div class="map-wrapper">
      <Map class="map"/>
      <HPlusButton icon="@/assets/images/icons/plus.svg" class="plus-button"/>
    </div>
  </div>
</template>

<script setup>
export { default as HLocation } from "@/components/HLocation";
export { default as HPlusButton } from "@/components/buttons/HPlusButton";
export { default as HMap } from "@/components/HMap";
</script>

<style>
.orphanages-map {
  display: grid;
  grid-template-columns: 400px 1fr;
  height: 100vh;
  color: white;
}

.aside {
  display: grid;
  box-sizing: border-box;
  padding: 80px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  grid-template-rows: auto auto 1fr;
  gap: 80px;
}

.call h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 2rem;
}

.call p {
  font-size: 18px;
  font-weight: 600;
}

.location {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.map {
  position: relative;
  z-index: 10;
}

.plus-button {
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 20;
}
</style>
