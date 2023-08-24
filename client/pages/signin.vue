<template>
  <v-container fluid class="fill-height with-background">
    <v-row class="fill-height" justify="center" align="center" no-gutters>
      <v-col cols="12" sm="6" md="4" xl="3" class="px-4">
        <v-sheet color="transparent">
          <v-sheet
            dark
            color="transparent"
            width="100%"
            class="d-flex flex-column justify-center align-center mb-10 mt-4"
          >
            <h1>Welcome!</h1>
            <span class="text-subtitle-2 mt-n2">Sign in to continue</span>
          </v-sheet>
          <v-form
            @submit.prevent="signIn"
            ref="loginForm"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              placeholder="Email"
              color="grey"
              clearable
              solo
              dense
              outlined
              required
              autofocus
              class="rounded-lg"
            >
            </v-text-field>
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
              type="password"
              class="rounded-lg white-text"
            >
            </v-text-field>
            <v-btn
              block
              dark
              outlined
              large
              :loading="loggingIn"
              class="text-capitalize rounded-lg mt-6"
              type="submit"
            >
              Submit
            </v-btn>
          </v-form>
          <v-row justify="center" class="my-4">
            <span class="white--text">OR</span>
          </v-row>
          <v-row justify="center" class="my-4 px-3">
            <v-btn
              to="request"
              block
              large
              text
              dark
              class="text-capitalize rounded-lg mb-4"
              >Request an Account
            </v-btn>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component({})
export default class SignInPage extends Vue {
  emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+/.test(v) || 'Email must be valid',
  ]
  passwordRules = [(v: string) => !!v || 'Password is required']
  valid = true
  loggingIn = false

  email = ''
  password = ''
  user: NotWellDefinedObject = {}

  async signIn() {
    if (this.valid) {
      try {
        this.loggingIn = true
        const user: any = await this.$auth.signInUser(this.email, this.password)
        await this.$fire.database
          .ref(`users/${user.uid}`)
          .get()
          .then((ss: any) => {
            this.user = ss.val()
            this.user.uid = user.uid
          })
          .catch((err: any) => {
            console.error(err)
            //   this.notify = true;
            //   this.notifierState = {
            //     iconName: "mdi-information",
            //     color: "amber",
            //     message: `Wait for account verification.`,
            //   };
          })
        if (this.user.role < 3) {
          // this.$notifier.notifierState = {
          //   iconName: "mdi-check",
          //   color: "success",
          //   message: `Login Success`,
          // };
          this.$router.push('/home')
        } else if (this.user == null) {
          this.$router.push('/signin')
          this.$auth.signOutUser()
          // this.$notifier.notifierState = {
          //   iconName: "mdi-info",
          //   color: "error",
          //   message: `Ooops! Try Again...`,
          // };
        } else {
          this.$router.push('/signin')
          // this.$notifier.notifierState = {
          //   iconName: "mdi-info",
          //   color: "error",
          //   message: `Ooops! Try Again...`,
          // };
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
