"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [{ href: "#feeling", label: "体験" }, { href: "#session", label: "2時間の流れ" }, { href: "#included", label: "料金" }, { href: "#faq", label: "FAQ" }];
const RESERVE_URL = "https://reserve.united-studio.com";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-baseline gap-2 focus-visible:outline-4 focus-visible:outline-offset-4" onClick={() => setOpen(false)}>
          <span className="font-heading text-xl font-black tracking-[-0.05em]">UTATTEMITA</span><span className="hidden font-mono text-[10px] font-bold sm:inline">by UNITED STUDIO INC</span>
        </Link>
        <nav aria-label="メイン" className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-xs font-bold transition-colors hover:text-primary focus-visible:outline-4 focus-visible:outline-offset-4">{item.label}</a>)}
          <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 border-2 border-foreground bg-surprise px-4 py-2 text-xs font-black transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-4">料金・空き状況<ArrowUpRight className="size-4" /></a>
        </nav>
        <button type="button" className="flex size-10 items-center justify-center border-2 border-foreground bg-surprise focus-visible:outline-4 focus-visible:outline-offset-2 md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>{open ? <X className="size-5" /> : <Menu className="size-5" />}<span className="sr-only">{open ? "メニューを閉じる" : "メニューを開く"}</span></button>
      </div>
      {open && <nav id="mobile-nav" aria-label="モバイルメニュー" className="border-t-2 border-foreground bg-background p-4 md:hidden"><ul className="grid gap-2">{navItems.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className="block border-2 border-foreground px-4 py-3 font-heading font-black focus-visible:outline-4 focus-visible:outline-offset-2">{item.label}</a></li>)}<li><a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center justify-between border-2 border-foreground bg-surprise px-4 py-3 font-heading font-black focus-visible:outline-4 focus-visible:outline-offset-2">料金・空き状況<ArrowUpRight className="size-5" /></a></li></ul></nav>}
    </header>
  );
}
