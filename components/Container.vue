<template>
  <div class="container mx-auto">
    <div class="container__inner">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 640px;

    @media (--tablet) {
      max-width: 640px;
    }

    @media (--laptop) {
      max-width: 1024px;
    }

    @media (--large-desktop) {
      max-width: 1440px;
    }
  }

  .container__inner {
    @media (--laptop) {
      padding: 144px 60px 144px 160px;
    }
  }
</style>
