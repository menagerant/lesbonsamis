"use client";

import { LogoSvg } from "@/components/svg/LogoSvg";
import { SiteConfig } from "@/site-config";
import { AuthButtonClient } from "../auth/AuthButtonClient";

export function LandingHeader() {
  return (
    <div className="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-1">
          <LogoSvg size={24} />
          <div className="flex origin-left items-center text-xl font-semibold uppercase max-sm:hidden">
            {SiteConfig.title}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="/posts">Blog</a>
          <AuthButtonClient />
        </div>
      </div>
    </div>
  );
}

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
