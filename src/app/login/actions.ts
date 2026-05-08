'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const nextUrl = (formData.get('next') as string) || '/dashboard'

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect(`/login?error=Invalid email or password&next=${encodeURIComponent(nextUrl)}`)
  }

  revalidatePath(nextUrl)
  redirect(nextUrl)
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const nextUrl = (formData.get('next') as string) || '/dashboard'

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect(`/login?error=${error.message}&next=${encodeURIComponent(nextUrl)}`)
  }

  revalidatePath(nextUrl)
  // We redirect to the requested page assuming email confirmations are disabled for local testing.
  // If email confirmations are enabled, they should be redirected to a "check your email" page.
  redirect(nextUrl)
}

export async function signout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  revalidatePath('/')
  redirect('/')
}
