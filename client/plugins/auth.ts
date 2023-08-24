import { Account } from '@/types/account'
import { Context, Plugin } from '@nuxt/types'
import { AuthPluginImp, AuthRedirectUris } from '~/types/plugins/auth'

export class AuthPlugin implements AuthPluginImp {
  private $authFire!: NotWellDefinedObject
  private $databaseFire!: NotWellDefinedObject

  authRedirectUris: AuthRedirectUris = {
    login: '/signin',
    logout: '/',
    auth: '/dashboard',
  }

  constructor(private context: Context) {
    this.$authFire = this.context.$fire.auth
    this.$databaseFire = this.context.$fire.database
  }

  get currentUserId() {
    if (this.$authFire.currentUser.uid != null)
      return this.$authFire.currentUser.uid
    else return ''
  }

  async createUser(email: string, password: string, userData: Account) {
    this.$authFire
      .createUserWithEmailAndPassword(email, password)
      .then((credential: NotWellDefinedObject) => {
        var user = credential.user
        if (user) {
          this.$databaseFire
            .ref(`users/${user.uid}`)
            .set(userData, (error: NotWellDefinedObject) => {
              if (error) {
                console.log(error)
              } else {
                console.log('Successfully created user-' + user.uid)
              }
            })
        }
      })
      .catch((error: NotWellDefinedObject) => {
        console.error(error)
      })
  }

  async signInUser(email: string, password: string) {
    try {
      const { user } = await this.$authFire.signInWithEmailAndPassword(
        email,
        password
      )
      return user
    } catch (error) {
      //   this.context.$notifier.notifierState = {
      //     iconName: 'mdi-info',
      //     color: 'error',
      //     message: `Ooops! Try Again...`,
      //   }
      console.error(error)
    }
  }

  async signOutUser() {
    try {
      await this.$authFire.signOut()
      this.context.redirect('/signin')
    } catch (error) {
      console.error(error)
    }
  }
}

const authPlugin: Plugin = function (context, inject) {
  inject('auth', new AuthPlugin(context))
}

export default authPlugin
