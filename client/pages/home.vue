<template>
  <v-container fluid class="fill-height pa-0">
    <v-sheet
      class="d-flex flex-column justify-start"
      width="100%"
      height="100%"
    >
      <SearchBar />
      <v-sheet class="flex-grow-1 px-3 overflow-y-auto pb-3">
        <v-sheet class="mt-6">
          <h3 class="grey--text text--darken-3 mb-n2">
            Hi, {{ user.firstName }}
          </h3>
          <span class="text-caption grey--text"
            >You have no activity today.</span
          >
        </v-sheet>
        <v-sheet class="mt-2">
          <v-slide-group v-model="examSlide" center-active>
            <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="mr-4"
                height="150"
                width="110"
                rounded="lg"
                @click="toggle"
              >
                <v-row
                  no-gutters
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition origin="center">
                    <v-icon v-if="active" color="white" size="48"
                      >mdi-close-circle-outline</v-icon
                    >
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-sheet class="mt-6">
          <v-row no-gutters class="text-subtitle-2">
            <span class="grey--text text--darken-3">Lessons</span>
            <v-spacer></v-spacer>
            <nuxt-link to="materials" class="text-decoration-none"
              >SEE ALL</nuxt-link
            >
          </v-row>
        </v-sheet>
        <v-sheet class="mt-2">
          <v-slide-group v-model="examSlide" center-active>
            <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="mr-4"
                height="150"
                width="110"
                rounded="lg"
                @click="toggle"
              >
                <v-row
                  no-gutters
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition origin="center">
                    <v-icon v-if="active" color="white" size="48"
                      >mdi-close-circle-outline</v-icon
                    >
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-sheet class="mt-6">
          <v-row no-gutters class="text-subtitle-2">
            <span class="grey--text text--darken-3">Your Group</span>
            <v-spacer></v-spacer>
            <nuxt-link to="materials" class="text-decoration-none"
              >SEE ALL</nuxt-link
            >
          </v-row>
        </v-sheet>
        <v-sheet class="mt-2">
          <v-slide-group v-model="examSlide" center-active>
            <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="mr-4"
                height="150"
                width="110"
                rounded="lg"
                @click="toggle"
              >
                <v-row
                  no-gutters
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition origin="center">
                    <v-icon v-if="active" color="white" size="48"
                      >mdi-close-circle-outline</v-icon
                    >
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-sheet class="mt-6">
          <v-row no-gutters class="text-subtitle-2">
            <span class="grey--text text--darken-3">Your Group</span>
            <v-spacer></v-spacer>
            <nuxt-link to="materials" class="text-decoration-none"
              >SEE ALL</nuxt-link
            >
          </v-row>
        </v-sheet>
        <v-sheet class="mt-2">
          <v-slide-group v-model="examSlide" center-active>
            <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="mr-4"
                height="150"
                width="110"
                rounded="lg"
                @click="toggle"
              >
                <v-row
                  no-gutters
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition origin="center">
                    <v-icon v-if="active" color="white" size="48"
                      >mdi-close-circle-outline</v-icon
                    >
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-sheet class="mt-6">
          <v-row no-gutters class="text-subtitle-2">
            <span class="grey--text text--darken-3">Your Group</span>
            <v-spacer></v-spacer>
            <nuxt-link to="materials" class="text-decoration-none"
              >SEE ALL</nuxt-link
            >
          </v-row>
        </v-sheet>
        <v-sheet class="mt-2">
          <v-slide-group v-model="examSlide" center-active>
            <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="mr-4"
                height="150"
                width="110"
                rounded="lg"
                @click="toggle"
              >
                <v-row
                  no-gutters
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition origin="center">
                    <v-icon v-if="active" color="white" size="48"
                      >mdi-close-circle-outline</v-icon
                    >
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
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
export default class HomePage extends Vue {
  user: NotWellDefinedObject = {}
  examSlide: any = null

  async created() {
    if (this.$fire.auth.currentUser) {
      const uid = this.$fire.auth.currentUser.uid
      await this.$fire.database
        .ref(`users/${uid}`)
        .get()
        .then((ss: any) => {
          this.user = ss.val()
          this.user.uid = uid
        })
        .catch((err: any) => console.error(err))
    }
  }
}
</script>
