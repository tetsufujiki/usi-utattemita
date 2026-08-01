import { ArrowUpRight, Check } from "lucide-react";

const facts = ["2時間から", "エンジニア付き", "録音・ミックス・マスタリング", "当日完成", "空きを見てから決められる"];
const RESERVE_URL = "https://reserve.united-studio.com";

export function Included() {
  return (
    <section id="included" aria-labelledby="included-heading" className="border-b-2 border-foreground bg-background px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <p className="font-mono text-xs font-bold uppercase tracking-widest">04 / Price &amp; flow</p>
        <div className="mt-4 border-2 border-foreground bg-muted p-5 md:p-10">
          <div className="grid gap-9 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="included-heading" className="font-heading text-4xl font-black leading-tight tracking-tight text-balance md:text-6xl">決める前に、<br />ちゃんと見られる。</h2>
              <ul className="mt-7 grid gap-3">
                {facts.map((fact) => <li key={fact} className="flex items-center gap-3 font-bold"><span className="flex size-6 items-center justify-center bg-secondary"><Check className="size-4" /></span>{fact}</li>)}
              </ul>
            </div>
            <div className="border-2 border-foreground bg-background p-5 pop-shadow md:p-7">
              <p className="font-heading text-2xl font-black">空いている日と正確な料金をチェック。</p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">予約システムで日付と料金を確認できます。見るだけでも大丈夫です。</p>
              <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-between gap-3 border-2 border-foreground bg-primary px-5 py-4 font-heading text-lg font-black transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4">
                空き状況・料金を見る<ArrowUpRight className="size-6" />
              </a>
              <p className="mt-3 text-center text-xs font-medium text-muted-foreground">予約システムへ移動します</p>
            </div>
          </div>
        </div>
        <a href="https://rec.united-studio.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 border-b-2 border-foreground text-sm font-bold focus-visible:outline-4 focus-visible:outline-offset-4">料金や対応範囲を詳しく見る <ArrowUpRight className="size-4" /></a>
      </div>
    </section>
  );
}
