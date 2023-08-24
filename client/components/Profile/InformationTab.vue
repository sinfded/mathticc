<template>
  <v-sheet width="100%" height="100%">
    <v-row no-gutters class="mb-2">
      <v-col cols="12" v-for="(info, idu) in userInformationList" :key="idu">
        <v-sheet width="100%" height="48" class="d-flex align-center px-2">
          <v-icon size="30" color="grey"> {{ info.icon }} </v-icon>
          <div class="d-flex flex-column justify-start ml-2">
            <span class="text-subtitle-2 grey--text">{{ info.title }}</span>
            <span
              class="text-caption mt-n1 grey--text text--darken-2 font-weight-medium"
              >{{ info.data }}</span
            >
          </div>
        </v-sheet>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class InformationTab extends Vue {
  @Prop() readonly user!: NotWellDefinedObject

  userInfo: NotWellDefinedObject = {}

  get userInformationList() {
    return [
      {
        title: 'Name',
        icon: 'mdi-account-outline',
        data: `${this.user.firstName} ${this.user.lastName}`,
      },
      {
        title: 'Email',
        icon: 'mdi-email-outline',
        data: this.user.email,
      },
      {
        title: 'Gender',
        icon: 'mdi-gender-male-female-variant',
        data: this.user.gender,
      },
      {
        title: 'Birthdate',
        icon: 'mdi-cake-variant-outline',
        data: new Date(this.user.birthdate).toString().substring(4, 15),
      },
    ]
  }
  mounted() {
    this.userInfo = this.user
  }
}
</script>
