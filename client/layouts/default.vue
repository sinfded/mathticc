<template>
  <v-app dark>
    <Nuxt />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {}
</script>

<style>
.with-background {
  background-image: url('~assets/img/background.png');
  background-size: cover;
  color: white !important;
}
</style>
