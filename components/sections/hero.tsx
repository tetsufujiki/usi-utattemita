import { ArrowDownRight, Clock3, Headphones, Mic2, Play, Radio, Sparkles } from "lucide-react";
import { RecDate } from "@/components/rec-date";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b-2 border-foreground bg-secondary">
      <div className="wave-grid absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-16 lg:py-20 xl:py-24">
        <div className="flex items-start justify-between gap-3">
          <p className="pop-shadow-sm -rotate-2 border-2 border-foreground bg-surprise px-3 py-1.5 font-heading text-xs font-black uppercase tracking-wider md:text-sm">
            Your song. Your voice.
          </p>
          <div className="flex items-end gap-1" aria-hidden="true">
            {[18, 34, 25, 44, 30, 52, 22].map((height, index) => (
              <span key={index} className="w-1.5 bg-foreground md:w-2" style={{ height }} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-10 md:mt-14 md:gap-12 lg:mt-16 lg:gap-14">
          <div>
            <h1 id="hero-heading" className="max-w-[76rem] font-heading font-black leading-[0.88] tracking-[-0.065em] text-balance">
              <span className="block whitespace-nowrap text-[clamp(2.75rem,13vw,10.5rem)] md:text-[clamp(4.25rem,14vw,10.5rem)] lg:text-[clamp(7.5rem,13vw,10.5rem)]">歌うだけで、</span>
              <span className="mt-2 block whitespace-nowrap lg:mt-3">
                <span className="relative inline-block text-[clamp(4.25rem,21vw,12.5rem)] md:text-[clamp(5.2rem,17vw,12.5rem)] lg:text-[clamp(9rem,15.5vw,12.5rem)]">
                  一曲
                  <span className="absolute -right-5 top-0 -z-10 size-16 rotate-12 rounded-full bg-primary md:-right-10 md:size-28 lg:size-32" aria-hidden="true" />
                </span>
                <span className="ml-1 inline-block text-[clamp(2rem,8vw,6.5rem)] tracking-[-0.04em] md:ml-2 md:text-[clamp(2.6rem,8vw,6.5rem)] lg:text-[clamp(4.5rem,7.5vw,6.5rem)]">になる。</span>
              </span>
            </h1>

            <p className="mt-7 max-w-5xl text-lg font-semibold leading-relaxed md:mt-9 md:text-xl lg:mt-10 lg:text-2xl lg:leading-relaxed">
              <span className="block">好きな曲を、自分の声で。</span>
              <span className="md:whitespace-nowrap">録音もミックスも一緒に進むから、あなたはマイクの前で<span className="whitespace-nowrap">歌うだけ。</span></span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4">
              <a href="#feeling" className="pop-shadow group inline-flex items-center justify-center gap-3 border-2 border-foreground bg-primary px-7 py-4 font-heading text-lg font-black transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 active:translate-x-1 active:translate-y-1 active:shadow-none md:min-h-16 md:min-w-64 md:px-10 md:text-xl">
                歌ってみたい
                <ArrowDownRight className="size-6 transition-transform group-hover:rotate-12" aria-hidden="true" />
              </a>
              <a href="#session" className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-background px-7 py-4 font-heading text-base font-bold transition-colors hover:bg-surprise focus-visible:outline-4 focus-visible:outline-offset-4 md:min-h-16 md:min-w-64 md:px-10 md:text-lg">
                どうやって作る？
                <Play className="size-4 fill-current" aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2 text-xs font-bold md:mt-12 md:gap-3 md:text-sm lg:grid lg:max-w-5xl lg:grid-cols-4">
              <li className="flex items-center justify-center gap-2 border-2 border-foreground bg-background px-3 py-2 md:min-h-12 md:px-5"><Mic2 className="size-4" />歌うだけでOK</li>
              <li className="flex items-center justify-center gap-2 border-2 border-foreground bg-background px-3 py-2 md:min-h-12 md:px-5"><Radio className="size-4" />録音＋MIX</li>
              <li className="flex items-center justify-center gap-2 border-2 border-foreground bg-background px-3 py-2 md:min-h-12 md:px-5"><Clock3 className="size-4" />当日完成</li>
              <li className="flex items-center justify-center gap-2 border-2 border-foreground bg-background px-3 py-2 md:min-h-12 md:px-5"><Headphones className="size-4" />聴きながら帰れる</li>
            </ul>
          </div>

          <div className="relative mx-auto mb-7 w-[calc(100%-0.75rem)] max-w-sm md:mb-9 md:max-w-3xl lg:max-w-5xl">
            <div className="pop-shadow rotate-1 border-2 border-foreground bg-background p-4 md:p-6 lg:p-8">
              <div className="flex items-center justify-between border-b-2 border-foreground pb-3 md:pb-4">
                <RecDate />
                <span className="flex items-center gap-2 text-xs font-bold md:text-sm"><span className="size-2 animate-pulse rounded-full bg-primary" />REC</span>
              </div>
              <div className="flex h-28 items-center justify-center gap-1 overflow-hidden md:h-44 md:gap-2 lg:h-52" aria-hidden="true">
                {[24,45,68,34,78,52,92,40,67,28,82,54,36,73,46,88,30].map((height, index) => <span key={index} className="w-2 bg-primary md:w-3 lg:w-4" style={{ height: `${height}%` }} />)}
              </div>
              <div className="flex items-center justify-between border-t-2 border-foreground pt-3 md:pt-4">
                <span className="font-heading text-sm font-black md:text-lg">VOCAL TAKE 03</span>
                <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-background md:size-12"><Play className="size-4 fill-current md:size-5" /></span>
              </div>
            </div>
            <div className="pop-shadow-sm absolute -bottom-7 -left-2 -rotate-6 border-2 border-foreground bg-accent px-4 py-2 font-heading text-sm font-black text-accent-foreground md:-bottom-8 md:px-6 md:py-3 md:text-base">
              MIXまでおまかせ
            </div>
            <Sparkles className="absolute -right-2 -top-9 size-10 fill-surprise text-foreground md:-right-3 md:-top-12 md:size-14" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
