<template>
  <v-container fluid class="fill-height with-background">
    <!-- <img
      src="~assets/img/background.png"
      width="100%"
      height="100%"
      style="position: fixed; bottom: 0; left: 0; right: 0; top: 0"
      alt="Classrom Floor"
    /> -->
    <v-row
      class="fill-height"
      justify="center"
      align="center"
      no-gutters
      style="z-index: 100"
    >
      <v-col cols="12" sm="6" md="4" xl="3" class="px-4">
        <v-sheet color="transparent" class="d-flex justify-center flex-column">
          <img
            src="~assets/img/icon.png"
            width="150"
            height="150"
            class="mx-auto"
            @dblclick="showAdminModal"
          />
          <v-sheet
            width="100%"
            color="transparent"
            dark
            class="d-flex flex-column justify-center align-center mb-10 mt-4"
          >
            <h1 class="text-h3 font-weight-bold">MATH TICC</h1>
            <span class="text-subtitle-2 text-center"
              >More Activities To Hit Through Interaction, Collaboration, &
              Contextualization</span
            >
          </v-sheet>
          <v-row justify="center" class="my-4 px-8">
            <v-btn to="signin" block large outlined dark class="rounded-lg mb-4"
              >Sign In
            </v-btn>
            <v-btn
              to="about"
              block
              large
              text
              color="white"
              class="rounded-lg mb-4"
              >About
            </v-btn>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-dialog v-model="adminModal" width="500" persistent>
      <v-card rounded="lg">
        <v-card-title class="text-subtitle-1 px-4 pt-3">
          Admin Account
        </v-card-title>

        <v-card-text class="pa-0">
          <v-container class="pa-0">
            <v-form
              @submit.prevent="signUp"
              ref="loginForm"
              v-model="valid"
              lazy-validation
            >
              <v-row no-gutters class="pb-3 px-4">
                <v-col cols="12" sm="6" class="pr-sm-2">
                  <v-text-field
                    v-model="userData.firstName"
                    label="First name"
                    :rules="required"
                    clearable
                    dense
                    outlined
                    required
                    autofocus
                    autocomplete="off"
                    class="rounded-lg"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pl-sm-2"
                  :class="[$vuetify.breakpoint.smAndUp ? '' : 'mt-n1']"
                >
                  <v-text-field
                    v-model="userData.lastName"
                    label="Last name"
                    :rules="required"
                    clearable
                    dense
                    outlined
                    required
                    autocomplete="off"
                    class="rounded-lg"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-n1">
                  <v-text-field
                    v-model="userData.email"
                    label="Email"
                    :rules="emailRules"
                    clearable
                    dense
                    outlined
                    required
                    autocomplete="off"
                    class="rounded-lg"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  :class="[$vuetify.breakpoint.smAndUp ? 'pr-2' : 'p-0']"
                  class="mt-n1"
                >
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    clearable
                    dense
                    outlined
                    required
                    autocomplete="off"
                    type="password"
                    class="rounded-lg"
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  :class="[$vuetify.breakpoint.smAndUp ? 'pl-2' : 'p-0']"
                  class="mt-n1"
                >
                  <v-text-field
                    v-model="confirmPassword"
                    :rules="required"
                    label="Confirm password"
                    clearable
                    dense
                    outlined
                    required
                    autocomplete="off"
                    type="password"
                    class="rounded-lg"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6" class="pr-2 mt-n1">
                  <v-menu
                    v-model="datePicker"
                    :close-on-content-click="true"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="userData.birthdate"
                        label="Birthdate"
                        :rules="required"
                        hide-details
                        dense
                        outlined
                        required
                        autocomplete="off"
                        class="rounded-lg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="userData.birthdate"
                      @input="datePicker = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6" class="pl-2 mt-n1">
                  <v-select
                    v-model="userData.gender"
                    :items="['Male', 'Female']"
                    :rules="required"
                    hide-details
                    label="Gender"
                    dense
                    outlined
                    required
                    autocomplete="off"
                    class="rounded-lg"
                  ></v-select>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row no-gutters class="px-4 py-3" align="center">
                <v-spacer></v-spacer>
                <v-btn
                  text
                  plain
                  width="100"
                  @click="adminModal = false"
                  class="text-capitalize"
                  >Cancel</v-btn
                >
                <v-btn
                  color="primary"
                  class="rounded-lg text-capitalize"
                  large
                  width="100"
                  type="submit"
                >
                  Submit
                </v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component({})
export default class Index extends Vue {
  emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+/.test(v) || 'Email must be valid',
  ]
  passwordRules = [(v: string) => !!v || 'Password is required']
  confirmPassRules = [
    (v: string) => {
      if (v !== this.password) return "Password don't match."
    },
  ]
  required = [(v: string) => !!v || `This is required`]
  valid = true
  adminModal = false
  datePicker = false

  password = ''
  confirmPassword = ''

  userData: any = {
    firstName: '',
    lastName: '',
    birthdate: new Date().toISOString().substr(0, 10),
    gender: 'Male',
    email: '',
    role: 1,
  }

  async signUp() {
    if (this.valid) {
      await this.$auth.createUser(
        this.userData.email,
        this.password,
        this.userData
      )
      this.adminModal = false
    }

    console.log('Create admin account')
    console.log(typeof this.password)
    console.log(typeof this.confirmPassword)
  }

  showAdminModal() {
    this.adminModal = true
  }
}
</script>
