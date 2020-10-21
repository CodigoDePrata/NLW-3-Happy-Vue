<template>
  <button
    :is="tag"
    v-bind="$attrs"
    class="flex items-center justify-center text-2xl"
    :class="{
      'bg-cyan-600 hover:bg-cyan-300': variant === 'blue',
      'text-white': variant === 'blue',

      'bg-yellow hover:bg-cyan-100': variant === 'yellow',
      'text-black hover:text-cyan-700': variant === 'yellow',
      
      'w-12 h-12 rounded-2xl': size === 'sm',
      'w-16 h-16 rounded-3xl': size === 'md',
      'w-20 h-20 rounded-4xl': size === 'lg',
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop({ default: "blue" }) variant: "blue" | "yellow" | undefined;
  @Prop({ default: "md" }) size: "sm" | "md" | "lg" | undefined;
  @Prop({ default: "button" }) tag: string | undefined;
}
</script>