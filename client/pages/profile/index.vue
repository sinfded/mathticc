<template>
  <v-container fluid class="fill-height pa-0">
    <v-sheet
      class="d-flex flex-column justify-start"
      width="100%"
      height="100%"
    >
      <AppBarMain :setting="{ color: 'primary', dark: true }">
        <v-btn @click="signOut" icon><v-icon>mdi-logout-variant</v-icon></v-btn>
      </AppBarMain>

      <v-sheet class="flex-grow-1">
        <v-sheet
          width="100%"
          height="100%"
          class="d-flex justify-center align-center flex-column"
        >
          <v-sheet
            class="pt-4 pb-14 d-flex justify-center flex-column"
            width="100%"
            color="primary"
          >
            <AvatarContainer class="mb-2 mx-auto" />
            <div
              class="d-flex flex-column justify-center align-center white--text"
            >
              <span class="text-subtitle-2"
                >{{ user.firstName }} {{ user.lastName }}</span
              >
              <span class="text-caption mt-n1">Teacher</span>
            </div>
          </v-sheet>
          <v-sheet
            color="transparent"
            width="100%"
            class="px-3 pb-3 flex-grow-1 mt-n10"
          >
            <v-sheet
              color="transparent"
              width="100%"
              height="100%"
              rounded="lg"
              elevation="2"
            >
              <v-tabs
                v-model="profileTab"
                slider-color="grey"
                color="grey darken-4"
                centered
                height="40"
                fixed-tabs
                class="rounded-t-lg"
              >
                <v-tab class="text-subtitle-2 text-capitalize" href="#info"
                  >Information
                </v-tab>
                <v-tab
                  class="text-subtitle-2 text-capitalize"
                  href="#activities"
                  >Activities</v-tab
                >
                <v-tab class="text-subtitle-2 text-capitalize" href="#grades"
                  >Grades</v-tab
                >
              </v-tabs>
              <v-divider></v-divider>
              <v-tabs-items v-model="profileTab">
                <v-tab-item value="info">
                  <InformationTab :user="user" />
                </v-tab-item>
                <v-tab-item value="activities"> Activities </v-tab-item>
                <v-tab-item value="grades"> Grades </v-tab-item>
              </v-tabs-items>
            </v-sheet>
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
export default class ProfilePage extends Vue {
  user: NotWellDefinedObject = {}
  profileTab: any = null

  signOut() {
    this.$auth.signOutUser()
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
      // this.setLinks(this.user.role)
    }
  }
}
</script>
