import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "何を用意すればいい？", a: "歌いたい曲と伴奏音源があればOK。音源の探し方が分からない場合は予約後に相談できます。" },
  { q: "歌に自信がなくても大丈夫？", a: "大丈夫です。その日の声を聴きながら、テイクや進め方を一緒に決めます。もっと整えてから録りたい場合のみ、ボイストレーニングも相談できます。" },
  { q: "ひとりでも行ける？", a: "もちろんです。エンジニアが最初から最後まで一緒に進めます。付き添いの方と来ても大丈夫です。" },
  { q: "何時間予約すればいい？", a: "1曲なら、まずは2時間がおすすめです。複数曲やじっくり録りたい場合は長めの枠を選べます。" },
  { q: "動画も撮れる？", a: "投稿用の簡単な歌唱動画ならセッション内で撮影できます。本格的な映像制作は事前にご相談ください。" },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-b-2 border-foreground bg-secondary px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex items-end justify-between gap-4"><div><p className="font-mono text-xs font-bold uppercase tracking-widest">05 / Small FAQ</p><h2 id="faq-heading" className="mt-2 font-heading text-4xl font-black tracking-tight md:text-5xl">ちょっとだけ、確認。</h2></div><span className="hidden -rotate-3 border-2 border-foreground bg-surprise px-3 py-1 font-heading text-sm font-black md:block">5 QUESTIONS</span></div>
        <div className="mt-8 grid gap-2">
          {faqs.map((faq) => <details key={faq.q} className="group border-2 border-foreground bg-background"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 font-heading font-black focus-visible:outline-4 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">{faq.q}<ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="border-t-2 border-foreground px-4 py-4 text-sm font-medium leading-relaxed text-muted-foreground">{faq.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}
