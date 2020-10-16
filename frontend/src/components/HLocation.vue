<template>
  <div class="location">
    <strong>{{ city }}</strong>
    <p>{{ uf }}</p>
  </div>
</template>

<script setup="props">
export default {
  props: {
    city: { type: String, required: true },
    uf: { type: String, required: true },
  },
};
</script>

<style scoped>
.location {
  line-height: 1.5;
}

.location strong {
  font-weight: bold;
}
</style>