import { AuthPluginImp } from './auth'
import { NotifierPlugin } from './notifier'

declare module 'vue/types/vue' {
  interface Vue {
    $auth: AuthPluginImp
    $notifier: NotifierPlugin
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $auth: AuthPluginImp
    $notifier: NotifierPlugin
  }

  interface Context {
    $notifier: NotifierPlugin
    $auth: AuthPluginImp
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $auth: AuthPluginImp
    $notifier: NotifierPlugin
  }
}
