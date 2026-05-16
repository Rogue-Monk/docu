"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const nextUrl = (formData.get("next") as string) || "/dashboard";

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(
      `/login?error=Invalid email or password&next=${encodeURIComponent(nextUrl)}`,
    );
  }

  revalidatePath(nextUrl);
  redirect(nextUrl);
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const nextUrl = (formData.get("next") as string) || "/dashboard";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (error) {
    redirect(
      `/register?error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(nextUrl)}`,
    );
  }

  // Redirect to the verification page to enter the OTP code
  redirect(
    `/verify?email=${encodeURIComponent(email)}&next=${encodeURIComponent(nextUrl)}`,
  );
}

export async function verifyOtp(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const code = formData.get("code") as string;
  const nextUrl = (formData.get("next") as string) || "/dashboard";

  const { error } = await supabase.auth.verifyOtp({
    email,
    token: code,
    type: "signup",
  });

  if (error) {
    redirect(
      `/verify?email=${encodeURIComponent(email)}&error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(nextUrl)}`,
    );
  }

  revalidatePath(nextUrl);
  redirect(nextUrl);
}

export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  revalidatePath("/");
  redirect("/");
}

export async function signInWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
    },
  });

  if (error) {
    redirect("/login?error=" + encodeURIComponent(error.message));
  }

  if (data.url) {
    redirect(data.url);
  }
}
