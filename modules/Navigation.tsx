import React from "react";
import { Button } from "@/components/Button";
import LanguageSelector from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { Locale } from "@/i18n-config";
import Link from "next/link";

interface NavigationProps {
  lang: Locale[];
  ctaLabel: string;
}

export const Navigation: React.FC<NavigationProps> = ({ lang, ctaLabel }) => {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-2 items-center">
        <LanguageSelector lang={lang} />
        <Link href="#contact">
          <Button label={ctaLabel} />
        </Link>
      </div>
    </header>
  );
};
