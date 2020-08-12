<template>
  <!-- create layout with choose product in each concerned page -->
  <q-page>
    <transition
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
    >
      <chooseProduct
        v-if="!chosenProduct"
        :key="'chooseProduct'"
      />
      <div
        v-else
        :key="'dashboard'"
        :class="$q.screen.lt.lg ? 'q-mx-lg':''"
      >
        <!-- inject specific pages in this layout -->
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <router-view :key="chosenProduct.id"></router-view>
        </transition>
      </div>
    </transition>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import chooseProduct from '../components/chooseProduct.vue';
import { products } from '../store/products/state';

@Component({
  components: { chooseProduct },
})
export default class Home extends Vue {
  // computed datas from store
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct;
  }
}
</script>

<style lang="sass" scoped>
.fadeOut
  animation-duration: 200ms

.fadeIn
  animation-delay: 200ms
  animation-duration: 500ms
</style>