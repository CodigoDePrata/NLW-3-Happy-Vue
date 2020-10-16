<template>
  <div class="landing-wrapper">
    <main class="about left-wrapper">
      <img src="@/assets/images/logo.svg" alt="" />
      <h1 class="title">Leve felicidade para o mundo</h1>
      <div class="sub-title">
        Visite orfanatos e mude o dia de muitas crianças.
      </div>
    </main>

    <div class="center-wrapper">
      <img src="@/assets/images/kids.svg" alt="" class="kids" />
    </div>

    <div class="right-wrapper">
      <LocationText city="Caraguatatuba" uf="São Paulo" />
      <HArrowButton icon="@/assets/images/icons/arrow-right.svg"/>
    </div>
  </div>
</template>

<script setup>
export { default as HArrowButton } from "@/components/buttons/HArrowButton";
export { default as HLocation } from "@/components/HLocation";
</script>

<style>
.landing-wrapper {
  display: grid;
  grid-template-columns: minmax(auto, 400px) 1fr minmax(auto, 300px);
  padding: 120px;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  color: white;
  font-size: 1.5rem;
  box-sizing: border-box;
}

.title {
  font-size: 6rem;
  font-weight: 800;
}

.sub-title {
  line-height: 1.5;
}

.left-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.center-wrapper {
  text-align: center;
}

.right-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;
}

.kids {
  height: 100%;
}
</style>