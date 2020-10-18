<template>
  <aside class="sidebar">
    <img src="@/assets/images/icons/marker.svg" class="marker" />
    <HLeftArrowButton/>
  </aside>
</template>

<script setup>
export { default as HLeftArrowButton } from "@/components/buttons/HLeftArrowButton";
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 96px;
  box-sizing: border-box;
  padding: 32px 24px;
  background: #15C3D6;
}
</style>