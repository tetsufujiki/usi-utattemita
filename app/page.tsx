import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { WhatYouCanMake } from "@/components/sections/what-you-can-make";
import { SessionSample } from "@/components/sections/session-sample";
import { FirstSession } from "@/components/sections/first-session";
import { Included } from "@/components/sections/included";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhatYouCanMake />
        <SessionSample />
        <FirstSession />
        <Included />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
