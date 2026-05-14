"use client";

import { motion } from "framer-motion";
import { GoogleChromeLogo, GithubLogo, Eye, Cpu, WarningCircle } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { signup } from "../login/actions";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const nextUrl = searchParams.get("next") || "/dashboard";

  return (
    <main className="flex min-h-screen w-full bg-black selection:bg-white/30 p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4">
      {/* Left Column (Hero) */}
      <div className="hidden lg:flex w-[52%] relative flex-col items-center justify-end pb-32 px-12 rounded-3xl overflow-hidden shadow-2xl h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4"
            type="video/mp4"
          />
        </video>

        <motion.div
          className="relative z-10 w-full max-w-xs space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          {/* Brand/Logo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center gap-2 mb-8"
          >
            <Cpu className="text-white fill-white w-6 h-6" />
            <span className="text-xl font-semibold tracking-tight text-white">Docu</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h1 className="text-4xl font-medium tracking-tight whitespace-nowrap text-white mb-2">Join Docu</h1>
            <p className="text-white/60 text-sm leading-relaxed px-4 -ml-4">
              Follow these 3 quick phases to activate your space.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 pt-4"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <StepItem number={1} text="Register your identity" active />
            <StepItem number={2} text="Configure your studio" />
            <StepItem number={3} text="Finalize your profile" />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column (Form) */}
      <div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl space-y-8 lg:space-y-6 sm:space-y-10"
        >
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-white">Create New Profile</h2>
            <p className="text-white/40 text-sm mt-2">Input your basic details to begin the journey.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SocialButton icon={<GoogleChromeLogo className="w-5 h-5" />} label="Google" />
            <SocialButton icon={<GithubLogo className="w-5 h-5" />} label="Github" />
          </div>

          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative bg-black px-4 text-xs font-medium text-white/40 uppercase tracking-widest">Or</div>
          </div>

          <form className="space-y-4" action={signup}>
            <input type="hidden" name="next" value={nextUrl} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup name="firstName" label="First Name" placeholder="Jane" type="text" />
              <InputGroup name="lastName" label="Last Name" placeholder="Doe" type="text" />
            </div>

            <InputGroup name="email" label="Email" placeholder="jane@example.com" type="email" />

            <div className="space-y-1">
              <InputGroup name="password" label="Password" placeholder="••••••••" type="password" isPassword />
              <p className="text-[10px] text-white/40 pl-1 mt-1">Requires at least 8 symbols.</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-lg flex items-center gap-2 font-medium mt-4">
                <WarningCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-14 bg-white text-black font-semibold rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all mt-4"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-white/60 pt-2">
            Member of the team? <Link href="/login" className="text-white hover:underline font-medium transition-colors">Log in</Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}

// Reusable Components

function StepItem({ number, text, active }: { number: number; text: string; active?: boolean }) {
  if (active) {
    return (
      <div className="flex items-center gap-4 bg-white text-black border border-white rounded-xl px-4 py-3 shadow-lg">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs font-bold shrink-0">
          {number}
        </div>
        <span className="text-sm font-bold">{text}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-brand-gray text-white border-none rounded-xl px-4 py-3">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white/40 text-xs font-bold shrink-0">
        {number}
      </div>
      <span className="text-sm font-medium text-white/60">{text}</span>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 bg-black border border-white/10 rounded-xl hover:bg-white/5 transition-colors h-12 text-white text-sm font-medium"
    >
      {icon}
      {label}
    </button>
  );
}

function InputGroup({
  name,
  label,
  placeholder,
  type,
  isPassword,
}: {
  name?: string;
  label: string;
  placeholder: string;
  type: string;
  isPassword?: boolean;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-sm font-medium text-white">{label}</label>
      <div className="relative">
        <input
          name={name}
          type={isPassword && show ? "text" : type}
          placeholder={placeholder}
          required
          className="w-full bg-brand-gray border border-transparent focus:border-white/20 rounded-xl h-11 px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
