<template>
  <label>
    <div class="mt-6 mb-2 text-color-title">
      <span class="mr-8 font-semibold">{{ label }}</span>
      <span v-if="instructions" class="text-sm">{{ instructions }}</span>
    </div>
    <div class="input-wrapper">
      <slot></slot>
    </div>
  </label>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseInputControl extends Vue {
  @Prop({ type: String, required: true }) label: string | undefined;
  @Prop(String) instructions: string | undefined;
}
</script>

<style lang="postcss" scoped>
.input-wrapper >>> input,
.input-wrapper >>> textarea {
  @apply border border-gray-200 rounded-2xl bg-gray-50 w-full p-4 text-gray-500;
}

.input-wrapper >>> input {
  @apply h-16;
}

.input-wrapper >>> textarea {
  @apply h-24;
}
</style>