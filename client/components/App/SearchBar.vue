<template>
  <v-sheet width="100%" class="d-flex pa-3 pb-0">
    <v-text-field
      color="grey darken-2"
      background-color="grey lighten-3"
      solo
      flat
      dense
      hide-details
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      clearable
      clear-icon="mdi-close-circle"
      class="rounded-lg mr-3 text-subtitle-2 font-weight-regular"
    >
    </v-text-field>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SearchBar extends Vue {}
</script>

<style></style>
