import { Check, Disc3 } from "lucide-react";

const noNeed = ["録音機材の知識", "ミックスの知識", "完璧な歌", "ひとりで決めること"];

export function FirstSession() {
  return (
    <section id="first-session" aria-labelledby="first-heading" className="border-b-2 border-foreground bg-primary px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest">03 / You only sing</p>
          <h2 id="first-heading" className="mt-5 font-heading text-[clamp(3.3rem,10vw,8rem)] font-black leading-[.92] tracking-[-0.055em] text-balance">あなたは歌う。<br /><span className="text-stroke">あとは一緒に</span><br />仕上げる。</h2>
        </div>
        <div className="pop-shadow rotate-1 border-2 border-foreground bg-background p-6 md:p-8">
          <div className="flex items-center justify-between border-b-2 border-foreground pb-4"><p className="font-heading text-lg font-black">DON&apos;T NEED</p><Disc3 className="size-8" aria-hidden="true" /></div>
          <ul className="mt-5 grid gap-3">
            {noNeed.map((item) => <li key={item} className="flex items-center gap-3 text-base font-bold"><span className="flex size-7 items-center justify-center bg-surprise"><Check className="size-5" /></span>{item}</li>)}
          </ul>
          <div className="mt-7 border-t-2 border-foreground pt-5"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">BRING ONLY</p><p className="mt-1 font-heading text-xl font-black">必要なのはこれだけ</p><p className="mt-2 text-base font-bold">歌いたい曲 ＋ 伴奏音源</p><p className="mt-2 text-sm font-medium text-muted-foreground">進め方も仕上がりも、当日一緒に決められます。</p></div>
        </div>
      </div>
    </section>
  );
}
