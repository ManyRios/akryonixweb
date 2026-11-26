import Image from "next/image";

interface AkryonixSoonProps {
  logoSrc?: string;
  badgeText?: string;
}

export default function HomePage({
  logoSrc = "/images/akryonix.jfif",
  badgeText = "Construyendo, Disponible muy pronto",
}: AkryonixSoonProps) {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#141d24] px-6 py-12 text-white selection:bg-cyan-400/30 selection:text-cyan-100">
      {/* Subtle ambient glow matching the cyan-to-magenta palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-400/15 via-sky-500/10 to-fuchsia-500/15 blur-3xl"
      />

      {/* Subtle geometric grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#18222a]/80 p-3 shadow-[0_0_50px_rgba(34,211,238,0.12)] backdrop-blur-sm transition duration-300 hover:border-cyan-300/40">
          <Image
            src={logoSrc}
            alt="Akryonix Logo"
            width={640}
            height={360}
            priority
            className="h-auto w-full max-w-[460px] rounded-xl object-contain"
          />
        </div>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#19242d]/90 px-6 py-2 shadow-lg backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-sm font-bold tracking-[0.35em] text-transparent uppercase sm:text-base">
            {badgeText}
          </span>
        </div>
      </section>
    </main>
  );
}