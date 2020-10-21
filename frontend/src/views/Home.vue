<template>
  <div class="flex items-center justify-center w-screen h-screen landing">
    <div
      class="flex flex-col justify-between w-4/5 h-full max-h-screen landing-wrapper"
    >
      <header
        class="justify-between space-y-2 text-center md:flex md:text-left"
      >
        <img src="@/assets/logo.svg" alt="" />

        <div class="flex-col justify-between h-full md:flex">
          <div class="text-right">
            <h1 class="text-2xl font-extrabold text-white">Caraguatatuba</h1>
            <p class="text-2xl font-semibold text-white">São Paulo</p>
          </div>
        </div>
      </header>

      <main>
        <p class="w-64 mb-10 text-6xl font-extrabold leading-none text-white">
          Leve felicidade para o mundo
        </p>
        <section class="flex items-center justify-between gap-x-2 md:gap-0">
          <p
            class="flex-grow text-2xl font-semibold leading-tight text-white md:w-1/3 md:flex-grow-0"
          >
            Visite orfanatos e mude o dia de muitas crianças
          </p>
          <BaseButton
            class="flex-shrink-0"
            variant="yellow"
            to="/orphanages"
            tag="RouterLink"
            size="lg"
          >
            <ArrowRightIcon />
          </BaseButton>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
import { ArrowRightIcon } from "vue-feather-icons";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { BaseButton, ArrowRightIcon } })
export default class Home extends Vue {}
</script>

<style lang="postcss" scoped>
.landing {
  background-image: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
}
.landing-wrapper {
  @apply bg-contain bg-center bg-no-repeat;
  background-image: linear-gradient(329.54deg, #29b6d1aa 0%, #00c7c7aa 100%),
    url("~@/assets/kids.svg");
  padding: 10% 0;
}
@screen md {
  .landing-wrapper {
    @apply bg-auto;
    background-image: url("~@/assets/kids.svg");
    background-position-x: 80%;
  }
}
</style>