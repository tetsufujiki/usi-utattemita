import { AudioLines, CircleStop, Clapperboard, Headphones, Mic2, SlidersHorizontal } from "lucide-react";

const moments = [
  { icon: Mic2, word: "歌う", sub: "マイクの前へ", color: "bg-primary", rotate: "-rotate-2" },
  { icon: CircleStop, word: "録る", sub: "エンジニアと", color: "bg-surprise", rotate: "rotate-2" },
  { icon: SlidersHorizontal, word: "整う", sub: "声がクリアに", color: "bg-secondary", rotate: "-rotate-1" },
  { icon: Headphones, word: "馴染む", sub: "曲の中へ", color: "bg-accent", rotate: "rotate-1" },
  { icon: AudioLines, word: "完成", sub: "自分の一曲", color: "bg-primary", rotate: "-rotate-2" },
  { icon: Clapperboard, word: "撮れる", sub: "必要なら動画も", color: "bg-surprise", rotate: "rotate-2" },
];

export function WhatYouCanMake() {
  return (
    <section id="feeling" aria-labelledby="feeling-heading" className="border-b-2 border-foreground bg-background px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest">01 / Feeling</p>
            <h2 id="feeling-heading" className="mt-3 font-heading text-5xl font-black leading-none tracking-tight text-balance md:text-7xl">声が、曲になっていく。</h2>
          </div>
          <p className="max-w-xs text-base font-semibold leading-relaxed">むずかしい説明は抜き。こんな順番で、あなたの声が作品になります。</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {moments.map((item, index) => (
            <article key={item.word} className={`${item.color} ${item.rotate} pop-shadow flex min-h-52 flex-col justify-between border-2 border-foreground p-4 transition-transform hover:rotate-0 hover:-translate-y-1`}>
              <div className="flex items-start justify-between"><item.icon className="size-7" aria-hidden="true" /><span className="font-mono text-xs font-black">0{index + 1}</span></div>
              <div><h3 className="font-heading text-3xl font-black">{item.word}</h3><p className="mt-1 text-sm font-bold">{item.sub}</p></div>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center font-heading text-2xl font-black md:text-4xl">YOU SING. <span className="bg-foreground px-2 text-background">WE MAKE IT A TRACK.</span></p>
      </div>
    </section>
  );
}
