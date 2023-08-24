<template>
  <v-app dark>
    <NotificationToast />
    <v-row no-gutters>
      <v-navigation-drawer
        v-if="!$vuetify.breakpoint.smAndDown"
        color="primary"
        dark
        v-model="drawer"
        permanent
      >
        <v-sheet
          v-if="$vuetify.breakpoint.smAndUp"
          width="56"
          height="64"
          color="transparent"
          class="d-flex justify-center align-center"
        >
          <v-icon size="40">mdi-fire-circle</v-icon>
        </v-sheet>
        <v-sheet
          v-else
          width="100%"
          height="56"
          class="d-flex justify-center align-center px-2"
          color="transparent"
        >
          <v-sheet
            width="100%"
            height="40"
            class="d-flex justify-center align-center"
            color="primary lighten-1 rounded"
          >
            <v-icon size="32" class="mr-2">mdi-fire-circle</v-icon>
            <span class="text-h4 font-weight-bold">LOGO</span>
          </v-sheet>
        </v-sheet>

        <SideBar :links="links" />
      </v-navigation-drawer>
      <v-main
        :class="[
          $vuetify.breakpoint.smAndDown
            ? 'with-bottom-nav mb-16'
            : 'offset-sidebar',
        ]"
      >
        <v-container fluid class="pa-0 ma-0 fill-height">
          <Nuxt />
        </v-container>
      </v-main>
    </v-row>
    <v-footer
      fixed
      height="64"
      class="py-0 pb-2 px-3 white"
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <v-sheet
        width="100%"
        height="100%"
        elevation="2"
        class="rounded-lg d-flex justify-space-around align-center"
      >
        <v-btn
          v-for="(link, idl) in links"
          :key="idl"
          :to="link.to"
          icon
          tile
          class="rounded-lg"
          :class="[$route.name == link.to ? 'primary--text' : '']"
        >
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
      </v-sheet>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  middleware: 'authenticated',
})
export default class Main extends Vue {
  drawer = true
  user: NotWellDefinedObject = {}
  links: NotWellDefinedObject[] = [
    {
      title: 'Home',
      icon: 'mdi-home',
      to: 'home',
    },
  ]

  get sideBar() {
    let sidebar_stat = false
    if (this.$vuetify.breakpoint.smAndDown) sidebar_stat = false
    else sidebar_stat = true
    return sidebar_stat
  }

  onClickNavIcon() {
    this.drawer = !this.drawer
  }

  setLinks(role: number) {
    if (role == 1) {
      this.links.push({
        title: 'Submissions',
        icon: 'mdi-clipboard-check',
        to: 'submissions',
      })
      this.links.push({
        title: 'Results',
        icon: 'mdi-poll',
        to: 'results',
      })
      this.links.push({
        title: 'Settings',
        icon: 'mdi-cog',
        to: 'settings',
      })
    } else if (role == 2) {
      this.links.push({
        title: 'Activities',
        icon: 'mdi-star-outline',
        to: 'activities',
      })
    }

    this.links.push({
      title: 'Profile',
      icon: 'mdi-account',
      to: `profile`,
    })
  }

  async created() {
    if (this.$fire.auth.currentUser) {
      // let user: NotWellDefinedObject = {}
      const uid = this.$fire.auth.currentUser.uid
      await this.$fire.database
        .ref(`users/${uid}`)
        .get()
        .then((ss: any) => {
          this.user = ss.val()
          this.user.uid = uid
        })
        .catch((err: any) => console.error(err))
      // const user = await this.$user.getCurrentUser()
      this.setLinks(this.user.role)
    }
  }
}
</script>

<style scoped>
.with-bottom-nav {
  height: calc(100vh - 64px);
}

.offset-sidebar {
  width: calc(100vw - 256px);
}
</style>
