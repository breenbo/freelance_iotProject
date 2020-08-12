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
          :label="chosenProduct.name ? chosenProduct.name : 'Choose a product'"
          flat
          no-caps
          size="xl"
          class="q-ma-none q-pa-none productSelect"
          v-if="chosenProduct"
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
                <q-item-label class="text-h5 text-grey-7">{{
                  product.name
                }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-space />

        <div v-if="$q.screen.gt.xs">
          <q-btn
            icon="account_circle"
            label="profile"
            rounded
            outline
            class="q-mr-sm"
          />
          <q-btn label="logout" flat />
        </div>
        <div v-else>
          <q-btn icon="more_vert" @click="profileOpen = true" flat />
        </div>
      </q-toolbar>
    </q-header>
    <!-- user modal for small screen -->
    <q-dialog v-model="profileOpen">
      <q-card class="profileCard">
        <q-card-section class="column">
          <q-btn
            label="Profile"
            color="primary"
            rounded
            outline
            class="q-py-sm full-width q-mb-lg"
            v-close-popup
          />
          <q-btn
            label="Logout"
            color="primary"
            rounded
            outline
            class="q-py-sm full-width"
            v-close-popup
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-mx-xl pageContainer">
      <transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>
    <q-footer reveal>
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
    link: '/'
  },
  {
    title: 'Devices',
    caption: 'Updated devices',
    icon: 'devices',
    link: 'devices'
  },
  {
    title: 'Firmwares',
    caption: 'Available firmwares',
    icon: 'system_update_alt',
    link: 'firmwares'
  },
  {
    title: 'Feedback',
    caption: 'report bug or submit feature request',
    icon: 'feedback',
    link: 'feedback'
  },
  {
    title: 'New product',
    caption: 'Create a new product',
    icon: 'post_add',
    link: 'newproduct'
  }
];

import { Vue, Component } from 'vue-property-decorator';
import { products } from '../store/products/state';

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  profileOpen = false;
  leftDrawerOpen = false;
  essentialLinks = linksData;
  products: products[] = this.$store.state.Products.products as products[];

  // get data from store for less typing
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct as products;
  }

  setChosenProduct(value: products) {
    this.$store.commit('Products/setChosenProduct', value);
  }
}
</script>

<style lang="sass" scoped>
.pageContainer
  max-width: 1400px !important
  margin: 0 auto

.productSelect
  min-width: 250px !important

.profileCard
  width: 80%

.fadeOut
  animation-duration: 200ms

.fadeInDown
  animation-delay: 200ms
  animation-duration: 500ms
</style>
