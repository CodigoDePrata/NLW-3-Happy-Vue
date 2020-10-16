<template>
  <HButton>
    <img src="@/assets/images/icons/arrow-right.svg" class="icon" />
  </HButton>
</template>

<script setup>
export { default as HButton } from "./HButton";
</script>

<style scoped>
.icon {
  opacity: 0.5;
  height: 32px;
  width: 32px;
}
</style>