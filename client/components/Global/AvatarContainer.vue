<template>
  <v-sheet
    width="90"
    height="90"
    rounded="xl"
    elevation="2"
    class="d-flex justify-center align-center"
    style="position: relative"
  >
    <v-avatar size="90" class="mx-auto my-1" rounded="xl">
      <v-img :src="profilePic" height="90" width="90"></v-img>
    </v-avatar>
    <v-btn
      fab
      absolute
      color="primary"
      :height="32"
      :width="32"
      style="bottom: -10px; right: -10px"
      @click="showUploader"
    >
      <v-icon size="18">mdi-brush</v-icon>
    </v-btn>
    <v-file-input
      v-model="images"
      ref="uploadInput"
      v-show="false"
      accep
      @change="selectImage"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AvatarContainer extends Vue {
  @Prop({
    default: 'https://www.pgatech.com.ph/images/default-profile.png',
  })
  readonly profilePic!: string

  disabled = true
  images: NotWellDefinedObject[] = []

  showUploader() {
    const uploadInput = (this.$refs.uploadInput as any).$refs
      .input as HTMLInputElement
    uploadInput.click()
  }

  async selectImage(file: File) {
    // const { imageUrl } = await this.$settings.uploadProfilePic(
    //   file,
    //   this.userData.uid
    // )
    // this.profilePic = imageUrl
  }
}
</script>

<style></style>
