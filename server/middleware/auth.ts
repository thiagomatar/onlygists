import { serverSupabaseUser } from '#supabase/server'

export interface AuthContext {
  isAuthenticated: boolean
  user: { id: string } | null
}

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  const isWebhook = url.pathname.startsWith('/webhooks')
  const isApiCall = url.pathname.startsWith('/api')

  if (isWebhook || !isApiCall) {
    return // Skip for webhooks or non-API calls
  }

  let user = null

  try {
    user = await serverSupabaseUser(event)
  } catch (error) {
    console.error("Erro ao obter usuário do Supabase:", error.message || error)
    return
  }

  const contextAuth: AuthContext = {
    user,
    isAuthenticated: Boolean(user),
  }

  event.context.auth = contextAuth
})