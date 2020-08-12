<template>
  <q-page class="row justify-center items-around pageContainer q-px-lg">
    <div class="col column full-height q-col-gutter-y-lg">
      <div class="order-second svgCenter">
        <slot name="svg"></slot>
      </div>
      <div class="order-first q-mt-lg">
        <div class="column full-height">
          <slot name="cardForm"></slot>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.pageContainer
    max-width: 800px!important

.svgCenter
    max-width: 65vh!important
    width: 100%
    margin: 0 auto
</style>