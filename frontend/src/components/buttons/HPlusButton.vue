<template>
  <HButton>
    <img src="@/assets/images/icons/plus.svg" class="icon"/>
  </HButton>
</template>

<script setup>
export { default as HButton } from "./HButton";
</script>

<style scoped>
.button {
  background: #15C3D6;
}
.button:hover {
  background: #17D6EB;
}

.icon {
  height: 32px;
  width: 32px;
}
</style>