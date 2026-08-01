const timeline = [
  { time: "14:00", title: "IN", note: "スタジオ入り。曲と声を一緒にチェック。" },
  { time: "14:15", title: "REC", note: "歌う。何テイクか重ねて、いい瞬間を残す。" },
  { time: "15:10", title: "SELECT", note: "好きなテイクを選ぶ。ここも一緒に。" },
  { time: "15:25", title: "MIX", note: "声を整えて、伴奏の中へ馴染ませる。" },
  { time: "15:50", title: "VIDEO?", note: "撮りたければ、投稿用の動画も。" },
  { time: "16:00", title: "DONE", note: "自分の声でできた一曲を受け取る。" },
];

export function SessionSample() {
  return (
    <section id="session" aria-labelledby="session-heading" className="overflow-hidden border-b-2 border-foreground bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-secondary">02 / Session sample</p>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 id="session-heading" className="font-heading text-5xl font-black leading-none tracking-tight text-balance md:text-7xl">2時間、こんな感じ。</h2>
          <p className="max-w-sm text-base font-semibold leading-relaxed text-background/70">上手さを見せるサンプルじゃなく、当日のテンポをそのまま。</p>
        </div>
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {timeline.map((step, index) => (
            <li key={step.title} className="group border-2 border-background bg-foreground p-5 transition-colors hover:bg-background hover:text-foreground">
              <div className="flex items-center justify-between gap-4"><time className="font-mono text-2xl font-black text-primary group-hover:text-primary">{step.time}</time><span className="text-xs font-bold">0{index + 1}</span></div>
              <h3 className="mt-8 font-heading text-3xl font-black">{step.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed opacity-70">{step.note}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 -rotate-1 bg-secondary px-4 py-3 text-center font-heading text-xl font-black text-secondary-foreground md:text-3xl">歌っている時間を長くするのも、撮影を足すのも。その場で決めてOK。</p>
      </div>
    </section>
  );
}
