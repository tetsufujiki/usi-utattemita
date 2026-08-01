import { ArrowDownRight, Mic2, Play, Radio, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b-2 border-foreground bg-secondary">
      <div className="wave-grid absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-16 lg:min-h-[calc(100svh-4rem)]">
        <div className="flex items-start justify-between gap-3">
          <p className="pop-shadow-sm -rotate-2 border-2 border-foreground bg-surprise px-3 py-1.5 font-heading text-xs font-black uppercase tracking-wider md:text-sm">
            Your voice, your track
          </p>
          <div className="flex items-end gap-1" aria-hidden="true">
            {[18, 34, 25, 44, 30, 52, 22].map((height, index) => (
              <span key={index} className="w-1.5 bg-foreground md:w-2" style={{ height }} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.35fr_.65fr] lg:gap-6">
          <div>
            <h1 id="hero-heading" className="font-heading font-black leading-[0.9] tracking-[-0.065em] text-balance">
              <span className="block text-[clamp(4.25rem,16vw,10.5rem)]">歌うだけで、</span>
              <span className="relative mt-2 inline-block text-[clamp(5.2rem,19vw,12.5rem)]">
                一曲
                <span className="absolute -right-5 top-0 -z-10 size-16 rotate-12 rounded-full bg-primary md:-right-10 md:size-28" aria-hidden="true" />
              </span>
              <span className="ml-2 inline-block text-[clamp(2.6rem,9vw,6.5rem)] tracking-[-0.04em]">になる。</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed md:text-xl">
              好きな曲を、好きな声で。録音もミックスも一緒に進むから、あなたはマイクの前で歌うだけ。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#feeling" className="pop-shadow group inline-flex items-center justify-center gap-3 border-2 border-foreground bg-primary px-7 py-4 font-heading text-lg font-black transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 active:translate-x-1 active:translate-y-1 active:shadow-none">
                歌ってみたい
                <ArrowDownRight className="size-6 transition-transform group-hover:rotate-12" aria-hidden="true" />
              </a>
              <a href="#session" className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-background px-7 py-4 font-heading text-base font-bold transition-colors hover:bg-surprise focus-visible:outline-4 focus-visible:outline-offset-4">
                どう進むか見る
                <Play className="size-4 fill-current" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="pop-shadow rotate-2 border-2 border-foreground bg-background p-4">
              <div className="flex items-center justify-between border-b-2 border-foreground pb-3">
                <span className="font-mono text-xs font-bold">REC_2026.08.01</span>
                <span className="flex items-center gap-2 text-xs font-bold"><span className="size-2 animate-pulse rounded-full bg-primary" />REC</span>
              </div>
              <div className="flex h-28 items-center justify-center gap-1 overflow-hidden" aria-hidden="true">
                {[24,45,68,34,78,52,92,40,67,28,82,54,36,73,46,88,30].map((height, index) => <span key={index} className="w-2 bg-primary" style={{ height: `${height}%` }} />)}
              </div>
              <div className="flex items-center justify-between border-t-2 border-foreground pt-3">
                <span className="font-heading text-sm font-black">VOCAL TAKE 03</span>
                <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-background"><Play className="size-4 fill-current" /></span>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-2 -rotate-6 border-2 border-foreground bg-accent px-4 py-2 font-heading text-sm font-black text-accent-foreground pop-shadow-sm">
              MIXまでおまかせ
            </div>
            <Sparkles className="absolute -right-2 -top-9 size-10 fill-surprise text-foreground" aria-hidden="true" />
          </div>
        </div>

        <ul className="mt-16 flex flex-wrap gap-2 text-xs font-bold md:text-sm">
          <li className="flex items-center gap-2 border-2 border-foreground bg-background px-3 py-2"><Mic2 className="size-4" />歌うだけでOK</li>
          <li className="flex items-center gap-2 border-2 border-foreground bg-background px-3 py-2"><Radio className="size-4" />録音＋MIX</li>
          <li className="flex items-center gap-2 border-2 border-foreground bg-background px-3 py-2">空きを見てから決める</li>
        </ul>
      </div>
    </section>
  );
}
