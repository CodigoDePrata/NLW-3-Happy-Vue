<template>
  <aside class="flex flex-row-reverse items-center justify-between h-24 gap-2 px-6 py-8 md:w-24 md:h-full md:flex-col sidebar">
    <RouterLink to="/">
      <img src="@/assets/icons/marker.svg" alt="Happy" class="w-12 h-12 md:h-auto md:w-auto"/>
    </RouterLink>

    <div v-if="title" class="text-xl font-semibold text-center text-white md:hidden">
      {{ title }}
    </div>

    <BaseButton @click.native="$router.back" size="sm">
      <ArrowLeftIcon />
    </BaseButton>
  </aside>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';
import { ArrowLeftIcon } from "vue-feather-icons";
import BaseButton from "@/components/base/BaseButton.vue";

@Component({
  components: {
    ArrowLeftIcon,
    BaseButton,
  },
})
export default class TheSidebar extends Vue {
  @Prop() title: string | undefined
}
</script>

<style lang="postcss" scoped>
.sidebar {
  background-image: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
}
</style>