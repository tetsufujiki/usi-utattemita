import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "https://rec.united-studio.com", label: "REC", note: "料金・対応範囲" },
  { href: "https://studio.united-studio.com", label: "STUDIO", note: "設備・スタジオ" },
  { href: "https://reserve.united-studio.com", label: "RESERVE", note: "空き状況・予約" },
  { href: "https://united-studio.com", label: "UNITED STUDIO", note: "公式サイト" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div><p className="font-heading text-3xl font-black tracking-[-0.05em]">UTATTEMITA</p><p className="mt-1 font-mono text-[10px] font-bold text-background/60">by UNITED STUDIO INC</p></div>
          <nav aria-label="関連サイト"><ul className="grid grid-cols-2 gap-x-8 gap-y-4">{links.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-background"><span><span className="flex items-center gap-1 font-heading text-sm font-black">{link.label}<ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span><span className="text-xs text-background/50">{link.note}</span></span></a></li>)}</ul></nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-background/25 pt-6 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between"><a href="https://united-studio.com" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-background">&copy; {new Date().getFullYear()} United Studio Inc.</a><div className="flex gap-4"><a href="https://reserve.united-studio.com/privacy" className="focus-visible:outline-4 focus-visible:outline-offset-4">プライバシー</a><a href="https://reserve.united-studio.com/terms" className="focus-visible:outline-4 focus-visible:outline-offset-4">利用規約</a></div></div>
      </div>
    </footer>
  );
}
