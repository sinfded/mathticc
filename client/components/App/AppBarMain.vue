<template>
  <v-sheet
    :color="setting.color"
    :dark="setting.dark"
    width="100%"
    class="d-flex justify-space-between align-center px-2"
    height="48"
  >
    <div class="d-flex align-center">
      <v-btn v-if="$vuetify.breakpoint.smAndDown" icon @click="goBack">
        <v-icon size="30">mdi-chevron-left</v-icon>
      </v-btn>
      <h3 class="text-capitalize ml-2">{{ $route.name }}</h3>
    </div>
    <slot></slot>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AppBarMain extends Vue {
  @Prop() readonly setting!: NotWellDefinedObject

  goBack() {
    this.$router.push('home')
  }
}
</script>

<style></style>
