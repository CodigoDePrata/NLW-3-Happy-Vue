<template>
  <aside class="flex flex-col justify-between w-24 h-full px-6 py-8 bg-cyan">
    <RouterLink to="/">
      <img src="@/assets/icons/marker.svg" alt="Happy" />
    </RouterLink>

    <BaseButton @click="$router.back()" size="sm">
      <ArrowLeftIcon />
    </BaseButton>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ArrowLeftIcon } from "vue-feather-icons";
import BaseButton from "@/components/base/BaseButton.vue";

@Component({
  components: {
    ArrowLeftIcon,
    BaseButton,
  },
})
export default class TheSidebar extends Vue {}
</script>