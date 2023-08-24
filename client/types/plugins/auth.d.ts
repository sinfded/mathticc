import '@nuxt/types'

import { Account } from '@/types/account'

export type AuthRedirectUris = {
  login: string
  logout: string
  auth: string
}

export interface AuthPluginImp {
  currentUserId: string
  authRedirectUris: AuthRedirectUris

  createUser(
    email: string,
    password: string,
    userData: NotWellDefinedObject
  ): Promise<Account | void>
  signInUser(email: string, password: string): Promise<Account | void>
  signOutUser(): void
}
