<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-space />
        <q-btn-dropdown
          :label="chosenProduct.name ? chosenProduct.name:  'Choose a product'"
          flat
          no-caps
          size="xl"
          class="q-ma-none q-pa-none productSelect"
        >
          <q-list>
            <q-item
              v-for="product in products"
              :key="product.id"
              clickable
              v-close-popup
              @click="setChosenProduct(product)"
            >
              <q-item-section>
                <q-item-label class="text-h5 text-grey-7">{{ product.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-space />

        <!-- <q-btn-dropdown
          :label="$store.state.Products.chosenProduct.name"
          flat
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="product in products"
              :key="product.id"
              @click="setChosenProduct(product)"
            >
              <q-item-section>
                <q-item-label>{{ product.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->

        <q-btn
          icon="account_circle"
          label="profile"
          rounded
          outline
          class="q-mr-sm"
        />
        <q-btn
          label="logout"
          flat
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <div class="text-center q-my-sm">Footer</div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { Links } from '../components/models';

const linksData: Links[] = [
  {
    title: 'Home',
    caption: 'See your dashboard',
    icon: 'dashboard',
    link: '/',
  },
  {
    title: 'Devices',
    caption: 'Updated devices',
    icon: 'devices',
    link: 'devices',
  },
  {
    title: 'Firmwares',
    caption: 'Available firmwares',
    icon: 'system_update_alt',
    link: 'firmwares',
  },
  {
    title: 'Feedback',
    caption: 'report bug or submit feature request',
    icon: 'feedback',
    link: 'feedback',
  },
  {
    title: 'New product',
    caption: 'Create a new product',
    icon: 'post_add',
    link: 'newproduct',
  },
];

import { Vue, Component } from 'vue-property-decorator';
import { products } from '../store/products/state';

@Component({
  components: { EssentialLink },
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksData;
  products: products[] = this.$store.state.Products.products;

  // get data from store for less typing
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }

  setChosenProduct(value) {
    this.$store.commit('Products/setChosenProduct', value);
    // this.$store.Products.setChosenProduct(value);
  }
  // get and set chose product in the Products store
  // get selected(): string {
  //   return this.$store.state.Products.chosenProduct;
  // }
  // set selected(value) {
  //   this.$store.commit('Products/setChosenProduct', value);
  // }
}
</script>

<style lang="sass" scoped>
.productSelect
  min-width: 250px !important
</style>