const timeline = [
  { time: "0:00", title: "スタジオ入り", note: "荷物を置いて、ひと息。飲み物を持ち込んでも大丈夫です。" },
  { time: "0:10", title: "曲と声の確認", note: "歌いたい曲を流しながら、キーや進め方をエンジニアと相談。" },
  { time: "0:25", title: "ボーカル録音", note: "何回か歌って、良いテイクを重ねていきます。緊張しても大丈夫。" },
  { time: "1:10", title: "テイクを選ぶ", note: "録れた中から、使うテイクを一緒に選びます。" },
  { time: "1:25", title: "ミックス・マスタリング", note: "声と伴奏のバランスを整えて、聴きやすい音に仕上げます。" },
  { time: "1:50", title: "撮影（希望があれば）", note: "SNS用に、歌っている様子を簡単に撮ることもできます。" },
  { time: "2:00", title: "完成データを受け取る", note: "その日のうちに、またはデータ便でお渡しします。" },
];

export function SessionSample() {
  return (
    <section
      aria-labelledby="session-heading"
      className="bg-secondary"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Session sample
        </p>
        <h2
          id="session-heading"
          className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
        >
          実際の2時間セッション例
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          すごい作品を見せるためのページではありません。
          当日がどう進むのかを、そのまま載せています。
        </p>

        <ol className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl bg-card p-5"
            >
              <div className="flex flex-col items-center">
                <span className="font-mono text-xs font-semibold text-primary">
                  {step.time}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-2 flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-bold"
                >
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-base font-bold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.note}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          時間配分は当日の進み方によって変わります。
          録音に時間をかけたい場合は、その場でエンジニアと調整できます。
        </p>
      </div>
    </section>
  );
}
