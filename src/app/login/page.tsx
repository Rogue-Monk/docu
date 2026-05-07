import { login, signup } from "./actions";
import { TopNav } from "@/components/layout/TopNav";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden relative">
      <TopNav />
      <div className="flex-1 flex items-center justify-center p-4 pt-20">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

        <div className="w-full max-w-md acrylic-panel p-10 rounded-3xl border border-white/10 relative z-10 bg-black/40 shadow-2xl">
          <div className="mb-10 text-center">
            <div className="w-16 h-16 bg-surface-container rounded-2xl mx-auto flex items-center justify-center border border-white/5 shadow-[0_0_30px_rgba(0,220,130,0.15)] mb-6">
              <span className="material-symbols-outlined text-3xl text-secondary">
                lock
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">
              Welcome Back
            </h1>
            <p className="text-sm text-on-surface-variant">
              Enter your credentials to access the EngineDoc terminal.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50 text-sm">
                  mail
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="admin@engine-core.dev"
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50 text-sm">
                  key
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            {searchParams.error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-lg flex items-center gap-2 font-medium">
                <span className="material-symbols-outlined text-sm">
                  error
                </span>
                {searchParams.error}
              </div>
            )}

            <div className="flex flex-col gap-3 mt-4">
              <button
                formAction={login}
                className="w-full bg-secondary hover:bg-secondary-hover text-black font-black text-sm py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_30px_rgba(0,220,130,0.5)] flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                Authenticate
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
              
              <button
                formAction={signup}
                className="w-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm py-3.5 rounded-xl border border-white/5 transition-all flex items-center justify-center gap-2"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
