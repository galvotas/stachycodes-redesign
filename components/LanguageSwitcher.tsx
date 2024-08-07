"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageSelectorProps {
  lang: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ lang }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;

    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);

    router.push(newPath);
  };

  return (
    <div className="relative inline-block">
      <select
        value={lang}
        onChange={handleLanguageChange}
        className="appearance-none bg-transparent p-4 rounded border border-green focus:outline-none"
      >
        <option value="en">🇬🇧</option>
        <option value="lt">🇱🇹</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
