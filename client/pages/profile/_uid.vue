<template>
  <v-container fluid class="fill-height">
    <v-sheet
      class="d-flex flex-column justify-start"
      width="100%"
      height="100%"
    >
      <v-sheet width="100%" class="d-flex justify-space-between">
        <h2>Profile</h2>
      </v-sheet>
      <v-sheet class="flex-grow-1">
        <v-sheet
          width="100%"
          height="100%"
          class="d-flex justify-center align-center flex-column"
        >
          <AvatarContainer class="my-4" />
          <v-sheet
            class="flex-grow-1"
            width="100%"
            height="100%"
            rounded="lg"
            elevation="2"
          >
            {{ $route.params.uid }}
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'main',
})
export default class DynamicProfilePage extends Vue {
  user: NotWellDefinedObject = {}

  async created() {
    if (this.$fire.auth.currentUser) {
      // let user: NotWellDefinedObject = {}
      const uid = this.$route.params.uid
      await this.$fire.database
        .ref(`users/${uid}`)
        .get()
        .then((ss: any) => {
          this.user = ss.val()
          this.user.uid = uid
        })
        .catch((err: any) => console.error(err))
      // const user = await this.$user.getCurrentUser()
      // this.setLinks(this.user.role)
    }
  }
}
</script>
