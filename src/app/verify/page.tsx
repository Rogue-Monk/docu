"use client";

import { motion } from "framer-motion";
import { Cpu, WarningCircle, ArrowRight } from "@phosphor-icons/react";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { verifyOtp } from "@/app/login/actions";

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-black flex items-center justify-center text-white/50">Loading...</div>}>
      <VerifyForm />
    </Suspense>
  );
}

function VerifyForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const email = searchParams.get("email") || "";
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
            <h1 className="text-4xl font-medium tracking-tight whitespace-nowrap text-white mb-2">Check Email</h1>
            <p className="text-white/60 text-sm leading-relaxed px-4 -ml-4">
              We've sent an 8-digit code to verify your identity.
            </p>
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
            <h2 className="text-3xl font-medium tracking-tight text-white">Verification</h2>
            <p className="text-white/40 text-sm mt-2">
              Enter the 8-digit code sent to <span className="text-white font-medium">{email}</span>
            </p>
          </div>

          <form className="space-y-4" action={verifyOtp}>
            <input type="hidden" name="email" value={email} />
            <input type="hidden" name="next" value={nextUrl} />

            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-white">Security Code</label>
              <input
                name="code"
                type="text"
                maxLength={8}
                placeholder="12345678"
                required
                className="w-full bg-[#111111] border border-transparent focus:border-white/20 rounded-xl h-14 px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all text-center tracking-[1em] text-xl font-mono"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-lg flex items-center gap-2 font-medium mt-4">
                <WarningCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-14 bg-white text-black font-semibold rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
            >
              Verify & Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-white/60 pt-2">
            Didn't receive the code? Check your spam folder.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
