<template>
  <v-container fluid class="fill-height with-background">
    <v-row class="fill-height" justify="center" align="center" no-gutters>
      <v-col cols="12" sm="6" xl="4" class="px-4">
        <v-sheet color="transparent">
          <v-sheet
            width="100%"
            color="transparent"
            dark
            class="d-flex flex-column justify-center align-center mb-10 mt-4"
          >
            <h1>Create Account</h1>
            <span class="text-subtitle-2 mt-n2"
              >Fill up the required fields.</span
            >
          </v-sheet>
          <v-form
            @submit.prevent="signUp"
            ref="loginForm"
            v-model="valid"
            lazy-validation
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                sm="6"
                :class="[$vuetify.breakpoint.smAndUp ? 'pr-2' : 'p-0']"
              >
                <v-text-field
                  v-model="userData.firstName"
                  :rules="required"
                  label="First name"
                  placeholder="First name"
                  color="grey"
                  clearable
                  solo
                  dense
                  outlined
                  required
                  autofocus
                  autocomplete="off"
                  class="rounded-lg"
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                :class="[$vuetify.breakpoint.smAndUp ? 'pl-2' : 'p-0']"
              >
                <v-text-field
                  v-model="userData.lastName"
                  :rules="required"
                  label="Last name"
                  placeholder="Last name"
                  color="grey"
                  clearable
                  solo
                  dense
                  outlined
                  required
                  autocomplete="off"
                  class="rounded-lg"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="userData.email"
                  :rules="emailRules"
                  label="Email"
                  placeholder="Email"
                  color="grey"
                  clearable
                  solo
                  dense
                  outlined
                  required
                  autocomplete="off"
                  class="rounded-lg"
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                :class="[$vuetify.breakpoint.smAndUp ? 'pr-2' : 'p-0']"
              >
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  placeholder="Password"
                  color="grey"
                  clearable
                  solo
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
              >
                <v-text-field
                  v-model="confirmPassword"
                  :rules="confirmPassRules"
                  label="Confirm password"
                  placeholder="Confirm password"
                  color="grey"
                  clearable
                  solo
                  dense
                  outlined
                  required
                  autocomplete="off"
                  type="password"
                  class="rounded-lg"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-btn
              block
              dark
              outlined
              large
              class="text-capitalize rounded-lg mt-2"
              type="submit"
            >
              Submit
            </v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class RequestPage extends Vue {
  usernameRules = [(v: string) => !!v || 'Username is required']
  emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+/.test(v) || 'Email must be valid',
  ]
  passwordRules = [(v: string) => !!v || 'Password is required']
  confirmPassRules = [
    ...this.passwordRules,
    (v: string) => (v !== this.password ? "Password don't match." : ''),
  ]
  storeIdRules = [(v: string) => !!v || 'Store ID is required']
  required = [(v: string) => !!v || `This is required`]
  valid = true

  username = ''
  password = ''
  confirmPassword = ''

  userData: any = {
    firstName: '',
    lastName: '',
    birthdate: new Date().toISOString().substr(0, 10),
    gender: 'Male',
    email: '',
    password: '',
    section: 1,
    role: 2,
  }

  signUp() {
    if (this.valid)
      this.$auth.createUser(this.userData.email, this.password, this.userData)
    console.log('Sign Up')
  }

  mounted() {
    console.log(this.userData)
  }
}
</script>
