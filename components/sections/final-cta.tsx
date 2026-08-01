import { ArrowUpRight, MessageCircle, Mic2 } from "lucide-react";

const RESERVE_URL = "https://reserve.united-studio.com";
const LINE_URL = "https://page.line.me/568repew";

export function FinalCta() {
  return (
    <section aria-labelledby="final-heading" className="relative overflow-hidden bg-primary px-4 py-20 md:px-8 md:py-28">
      <Mic2 className="absolute -right-12 top-5 size-52 -rotate-12 opacity-15 md:right-10 md:size-80" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-5xl text-center">
        <p className="mx-auto w-fit -rotate-2 border-2 border-foreground bg-surprise px-4 py-2 font-heading text-sm font-black pop-shadow-sm">READY WHEN YOU ARE</p>
        <h2 id="final-heading" className="mt-9 font-heading text-[clamp(3.8rem,13vw,9rem)] font-black leading-[.9] tracking-[-0.06em] text-balance">その声、<br />録ってみよう。</h2>
        <div className="mx-auto mt-10 flex max-w-xl flex-col justify-center gap-3 sm:flex-row">
          <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="pop-shadow flex items-center justify-center gap-2 border-2 border-foreground bg-foreground px-7 py-4 font-heading text-lg font-black text-background transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-background">空き状況・料金を見る<ArrowUpRight className="size-6" /></a>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-foreground bg-background px-7 py-4 font-heading font-black transition-colors hover:bg-secondary focus-visible:outline-4 focus-visible:outline-offset-4"><MessageCircle className="size-5" />LINEで相談する</a>
        </div>
        <p className="mt-6 text-sm font-bold">予約システムへ移動します。見るだけでも大丈夫です。</p>
      </div>
    </section>
  );
}
