<template>
  <v-card rounded="lg" link>
    <v-sheet class="d-flex pa-2" width="100%">
      <v-img width="30%" max-width="100" :src="lessonInfo.coverImage"> </v-img>
      <v-sheet
        class="d-flex flex-column oveflow-hidden ml-2 pr-2"
        width="100%"
        max-width="70%"
      >
        <span class="text-subtitle-2"
          >Lesson {{ lessonInfo.id }} : {{ lessonInfo.title }}</span
        >
        <p
          class="text-caption ma-0"
          :class="$vuetify.breakpoint.smAndDown ? 'text-truncate' : ''"
        >
          {{ lessonInfo.description }}
        </p>
      </v-sheet>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class InformationTab extends Vue {
  @Prop() readonly lessonInfo!: NotWellDefinedObject
}
</script>
